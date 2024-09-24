// import dynamic from "next/dynamic";
import Write from "@/component/write/_write-container";

// const Write = dynamic(() => import("@/component/write/_write-container"), {
//   loading: () => <p>dynamic Loading...</p>,
//   ssr: false,
// });

const WritePage = async () => {
  return <Write />;
};

export default WritePage;
