import "@/resource/style/global.css";
import Link from "next/link";

export const metadata = {
  title: "r_11 blog",
  description: "rrrrrrrrrrrocky 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let header = (
    <header>
      <Link href={"/"}>
        <h1>HEADER</h1>
      </Link>
    </header>
  );

  let footer = (
    <footer>
      <p>FOOTER</p>
    </footer>
  );
  return (
    <html lang="en">
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
      <body>
        공사중
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
