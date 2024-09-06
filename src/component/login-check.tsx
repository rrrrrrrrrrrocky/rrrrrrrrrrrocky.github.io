"use client";
import { Button } from "@/component/ui/button";
import { createSupabaseClient } from "@/script/util/supabase-utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { User } from "@supabase/supabase-js";

const LoginCheck = ({ user }: { user?: User }) => {
  const supabase = createSupabaseClient();

  const getData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log("user >>", user);
    if (user) return;
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    // const data = await supabase.auth.exchangeCodeForSession(code || "");
    console.log("data >>", data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      Client
      <Button
        onClick={() => {
          supabase.auth.signOut();
        }}>
        ㄹ로그아웄
      </Button>
    </div>
  );
};

export default LoginCheck;
