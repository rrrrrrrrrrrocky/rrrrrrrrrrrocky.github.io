const Parser = require("rss-parser");
const fs = require("fs");
const OpenAI = require("openai");
const path = require("path");
const dayjs = require("dayjs");
require("dotenv").config();

// RSS 피드 URL
const RSS_FEED_URL = process.env.RSS_FEED_URL; // 구독할 RSS 피드 URL로 변경하세요

// RSS 파서 초기화
const parser = new Parser();

/**
 * guid는 url주소 형태이며, 마지막 path만 파싱해서 폴더 경로로 사용 예정
 * @param {*} guid example - https://medium.com/p/39e6f2492ad6
 */
const splitGuid = (guid) => {
  const splitPath = guid.split("/");
  return `${splitPath[splitPath.length - 2]}_${splitPath[splitPath.length - 1]}`;
};

// 기존에 작성된 guid 검증 후 RSS 추가하는 함수
const checkForNewPosts = async () => {
  try {
    // 1. feed: RSS 피드 가져오기
    const feed = await parser.parseURL(RSS_FEED_URL);

    // 2. newItems: 현재 파일시스템(블로그 md폴더)에 중복으로 참조된 블로그 체크 후 데이터 반환
    const newItems = feed.items.filter((item) => {
      const uuid = splitGuid(item.guid);
      const uniqueBlogFolder = `src/_post/${uuid}`;
      return !Boolean(fs.existsSync(uniqueBlogFolder));
    });

    // 3. 2번의 배열에 데이터가 있을 경우, 첫번째 데이터의 타이틀로 gpt에게 질의 (비용절감을 위해 content 길이를 제한해서 gpt에게 전달)
    if (newItems.length > 0) {
      const uuid = splitGuid(newItems[0].guid);

      const plainTextContent = newItems[0].content
        .replace(/<\/?[^>]+(>|$)/g, "")
        .substring(0, 500);

      const openAI = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY,
      });
      const completion = await openAI.chat.completions.create({
        messages: [
          { role: "system", content: "너는 세계 최고의 FrontEnd 웹개발자야" },
          {
            role: "user",
            content: `
                - 블로깅 키워드: ${newItems[0].title} \n
                - 참조 블로그 원문 (500자 이내): ${plainTextContent} \n
                '블로깅 키워드'와 '참조 블로그 원문'을 참조해서 아래의 작성 요건에 맞춰서 작성해줘 \n
                1. 3,000자 이상으로 최대한 전문적인 지식을 기반으로 작성 할 것 \n
                2. 목차는 아래와 같이 구성해줘 \n
                  - 소개 \n
                  - 배경 및 필요성 \n
                  - 핵심 내용 \n
                  - 예시 \n
                3. 블로깅 키워드가 한국어가 아니어도 번역해서 한국어로 블로그 작성을 할 것 (금액, 날짜 등의 데이터 또한 한국데이터에 맞게 바꿀 것) \n
                4. 다른 대답이나 잡담은 하지 말고, 대답에는 아래의 데이터 형태(frontmatter)에 맞춰서만 응답 할 것 \n
                  ---\n
                  uuid: ${uuid}\n
                  title: 블로그 내용을 한줄로 담을 수 있는 타이틀(약 60자 내외)\n
                  createdAt: ${dayjs().format("YYYY-MM-DD HH:mm:ss")}\n
                  tags: ${newItems[0].categories} 태그들을 아래의 조건에 맞게 작성해줘 \n
                    - 데이터 형태: javascript string[] \n
                    - 문자 형태: camelCase \n
                    - 배열의 최대 길이: 4개 \n
                    - tags 검열: ${newItems[0].categories} 에서 일반적으로 사용되지 않는 태그는 제거 
                  description: 작성된 블로그를 홍보하는 홍보담당자 마인드로 description 작성 할 것(글자수: 100자)
                  ---\n\n
                  
                  마크다운형식의 블로그 내용 작성 (1번 3,000자 이상으로, 2번 목차를 꼭 지켜서 작성 할 것)
                5. 4번의 데이터에서 title, createdAt, uuid, tags, description는 따옴표로 감싸서 특수문자때문에 파싱에러가 나지 않도록 응답해줘
              `,
          },
        ],
        model: process.env.GPT_MODEL,
      });
      const responseContent = completion.choices[0].message.content;
      console.info("답변 원문 >>", responseContent);
      const responsePromptData = {
        uuid,
        content: responseContent,
      };
      console.log("uuid가 포함 된 응답 >>", responsePromptData);
      writeFile(responsePromptData);
    } else {
      console.info("새로운 글이 없습니다.");
    }
  } catch (error) {
    console.error(`RSS 피드를 가져오는 중 오류 발생: ${error.message}`);
  }
};

const writeFile = (responsePromptData) => {
  const folderPath = path.join(
    __dirname,
    `src/_post/${responsePromptData.uuid}`
  );

  // 폴더가 존재하지 않으면 생성
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`폴더가 생성되었습니다: ${folderPath}`);
  }

  const blogContent = responsePromptData.content;

  // 파일 경로 설정 (guid 폴더 안에 파일 이름을 'index.md'로 저장)
  const filePath = path.join(folderPath, "index.md");

  // 마크다운 파일 작성
  fs.writeFileSync(filePath, blogContent, "utf8");
  console.info(`Markdown 파일이 저장되었습니다: ${filePath}`);
};

checkForNewPosts();
