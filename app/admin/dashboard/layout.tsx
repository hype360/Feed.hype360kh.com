import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Back office",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <body>{children}</body>
    </>
  );
}
