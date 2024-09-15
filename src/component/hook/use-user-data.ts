"use client";

import { usePostGoogleLogin } from "@/script/api/auth-mutations";
import { useGetCheckSession } from "@/script/api/auth-queries";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useUserData = () => {
  const { replace } = useRouter();
  const [userData, setUserData] = useState<User>();
  const { mutateAsync: postGoogleLogin } = usePostGoogleLogin();
  const sessionQuery = useGetCheckSession();

  const goToGoogleLoginPage = async () => {
    const res = await postGoogleLogin({
      redirectServer: `${window.location.origin}/auth/callback`,
      redirectUrl: window.location.href,
    });

    if (res.url) {
      window.location.href = res.url;
    }
  };

  const goToErrorPage = ({
    code,
    message,
  }: {
    code: string;
    message: string;
  }) => {
    try {
      const errorPageUrl = new URL(`${window.location.origin}/error`);
      errorPageUrl.searchParams.append("code", code);
      errorPageUrl.searchParams.append("message", message);
      replace(errorPageUrl.href);
    } catch (err) {
      console.error("url err >", err);
      throw new Error(err as string);
    }
  };

  useEffect(() => {
    if (sessionQuery.data) {
      const isValidEmail =
        sessionQuery.data?.userData?.email === "rrrrrrrrrrrocky@gmail.com";
      if (isValidEmail) {
        setUserData(sessionQuery.data.userData);
      } else if (!isValidEmail) {
        goToErrorPage({
          code: "AUTHORIZATION_ERROR",
          message: "권한이 없습니다.",
        });
      } else if (sessionQuery.data?.sessionError) {
        console.error(
          "googleUserData.sessionError >>",
          sessionQuery.data?.sessionError
        );
        goToErrorPage({
          code: `SESSION_ERROR (${sessionQuery.data?.sessionError?.code}) `,
          message: sessionQuery.data?.sessionError?.message,
        });
      } else if (!sessionQuery) {
        goToErrorPage({
          code: "FAILED_USER_DATA",
          message: "유저 데이터가 없습니다.",
        });
      } else {
        goToErrorPage({
          code: "UNKNOWN_ERROR",
          message: "알 수 없는 에러입니다.",
        });
      }
    }

    if (sessionQuery.isError || sessionQuery.error) {
      goToErrorPage({
        code: `REACT_QUERY_ERROR ${sessionQuery.error.name}`,
        message: sessionQuery.error.message,
      });
    }
  }, []);

  return { userData, goToGoogleLoginPage, ...sessionQuery };
};
