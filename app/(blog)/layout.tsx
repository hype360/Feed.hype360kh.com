import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { geistSans } from "@/app/fonts/fonts";

export const metadata: Metadata = {
  title: "Laravel Blog",
  description: "The official Laravel blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <body
        className={`${geistSans.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </>
  );
}
