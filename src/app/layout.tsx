import "@/resource/style/global.css";
import "dayjs/locale/ko";

import { ReactNode, useMemo } from "react";

import Header from "@/component/ui/header";
import ClientProvider from "@/component/_common/client-provider";
import { Container } from "@/component/ui/container";
import { BLOG_NAME } from "@/script/constant/meta";

export const metadata = {
  title: BLOG_NAME,
  description: "rrrrrrrrrrrocky 블로그입니다.",
  // metadataBase: new URL("https://acme.com"),

  // openGraph: {
  //   images: "/images/og-image.webp",
  // },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  const header = useMemo(() => <Header />, []);

  // const footer = (
  //   <footer>
  //     <p>FOOTER</p>
  //   </footer>
  // );
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          name="viewport"
        />
        <meta content="no-cache" httpEquiv="Pragma" />
        <meta
          content="no-cache, no-store, must-revalidate"
          httpEquiv="cache-control"
        />
      </head>

      <body className="relative flex flex-col min-h-screen text-foreground text-sm">
        <ClientProvider>
          {header}
          <Container component="main" className="container flex flex-1">
            {children}
          </Container>
          {/* {footer} */}
        </ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
