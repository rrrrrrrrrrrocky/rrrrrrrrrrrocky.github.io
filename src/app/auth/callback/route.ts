// import { createSupabaseServer } from "@/script/util/supabase-utils";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   // The `/auth/callback` route is required for the server-side auth flow implemented
//   // by the SSR package. It exchanges an auth code for the user's session.
//   // https://supabase.com/docs/guides/auth/server-side/nextjs
//   const requestUrl = new URL(request.url);
//   const code = requestUrl.searchParams.get("code");
//   const origin = requestUrl.origin;
//   const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();

//   if (code) {
//     const supabase = createSupabaseServer();
//     await supabase.auth.exchangeCodeForSession(code);
//   }

//   if (redirectTo) {
//     return NextResponse.redirect(`${origin}${redirectTo}`);
//   }

//   // URL to redirect to after sign up process completes
//   return NextResponse.redirect(`${origin}/protected`);
// }

import { createSupabaseServer } from "@/script/util/supabase-utils";
import { CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";
  console.log("next >>", next);
  console.log("code >>", code);
  console.log("origin >>", origin);

  // return the user to an error page with instructions
  // return NextResponse.redirect(${origin}/auth/auth-code-error)

  if (!code) {
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  const supabase = createSupabaseServer();
  // const token = await supabase.auth.exchangeCodeForSession(code, {
  //   provider: "google",
  //   codeVerifier,
  // });

  // const supabase = createRouteHandlerClient({ cookies });

  try {
    const token = await supabase.auth.exchangeCodeForSession(
      // "34e770dd-9ff9-416c-87fa-43b31d7ef225"
      code
    );

    console.log("token >", token);
    // const error = false;
    if (!token.error) {
      const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === "development";
      console.log("isLocalEnv >>", isLocalEnv);
      console.log("forwardedHost  >>", forwardedHost);
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
    return NextResponse.redirect(`${origin}${next}`);
  } catch (err) {
    console.error("err >>>", err);
    return NextResponse.redirect(`${origin}/client?code=${code}`);
  }

  // return the user to an error page with instructions
}
