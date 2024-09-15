"use client";

import { useMutation } from "@tanstack/react-query";
import { createSupabaseClient } from "../util/supabase-client-utils";

export const usePostGoogleLogin = () => {
  return useMutation({
    mutationFn: async ({
      redirectServer = "http://localhost:3000/auth/callback",
      redirectUrl,
    }: {
      redirectServer: string;
      redirect?: (redirectTo: string) => void;
      redirectUrl: string;
    }) => {
      const supabase = createSupabaseClient();

      let href;
      try {
        const serverUrl = new URL(redirectServer);
        const redirect = new URL(redirectUrl);
        serverUrl.searchParams.append("redirectUrl", redirect.href);
        href = serverUrl.href;
      } catch {
        throw new Error("error URL");
      }

      if (!href) {
        throw new Error("error URL");
      }

      try {
        const { data } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: href,
            queryParams: {
              access_type: "offline",
              prompt: "consent",
            },
          },
        });
        return data;
        // if (data.url) {
        //   // redirect(data.url); // use the redirect API for your server framework
        // }
      } catch {
        throw new Error("window not defined");
      }
    },
  });
};
