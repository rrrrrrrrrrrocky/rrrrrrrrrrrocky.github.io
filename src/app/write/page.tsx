import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "@/component/ui/container";
import { createSupabaseServer } from "@/script/util/supabase-utils";
import { redirect } from "next/navigation";

// const signIn = async (formData: FormData) => {
//   "use server";

//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;
//   const supabase = createClient();

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     return encodedRedirect("error", "/login", "Could not authenticate user");
//   }

//   return redirect("/protected");
// };

// // const { error } = await supabase.auth.signInWithPassword({
// //   email,
// //   password,
// // });

const Write = async () => {
  const supabase = createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("user >>", user);
  // supabase.auth.signInWithOAuth({
  //   provider: "google",
  //   options: {
  //     redirectTo: "/", // 로그인 성공 후 이동할 URL
  //   },
  // });
  // console.log("supabase >>", supabase.auth);
  // if (!session || session.user.email !== "rrrrrrrrrrrocky@gmail.com") {
  if (!user) {
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

    if (data.url) {
      redirect(data.url); // use the redirect API for your server framework
    }
    return;
  }
  return <Container>asdasd</Container>;
};

export default Write;
