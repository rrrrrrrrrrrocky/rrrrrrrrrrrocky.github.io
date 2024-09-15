import { createSupabaseServer } from "@/script/util/supabase-server-utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let code;
  let redirectUrl;
  try {
    const { searchParams /* origin */ } = new URL(request.url);
    code = searchParams.get("code");
    redirectUrl = searchParams.get("redirectUrl") ?? "/";
  } catch {
    return NextResponse.redirect(
      `${origin}/error?code=URL_PARSE_ERROR&message=request url이 없습니다`
    );
  }

  if (!code) {
    return NextResponse.redirect(
      `${origin}/error?code=CODE_ERROR&message=구글에서 내려온 code가 없습니다`
    );
  }

  const supabase = createSupabaseServer();

  try {
    const token = await supabase.auth.exchangeCodeForSession(code);

    console.log("token >", token);
    if (!token.error) {
      const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === "development";
      console.log("isLocalEnv >>", isLocalEnv);
      console.log("forwardedHost  >>", forwardedHost);
      return NextResponse.redirect(redirectUrl);
      // if (isLocalEnv) {
      //   // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
      //   return NextResponse.redirect(`${origin}${redirectUrl}`);
      // } else if (forwardedHost) {
      //   return NextResponse.redirect(`https://${forwardedHost}${redirectUrl}`);
      // } else {
      //   return NextResponse.redirect(`${origin}${redirectUrl}`);
      // }
    }
    // return NextResponse.redirect(`${origin}${redirectUrl}`);
    return NextResponse.redirect(redirectUrl);
  } catch (err) {
    console.error("err >>>", err);
    return NextResponse.redirect(
      `${origin}/error?code=TOKEN_ERROR&message=토큰이 없습니다`
    );
  }
}
