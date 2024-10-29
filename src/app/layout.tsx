import type { Metadata } from "next";
import "./globals.scss";
import LayoutClient from "./Layout.client";

export const metadata: Metadata = {
  title: "Italian Cuisine",
  description:
    "Classic steak & delicious with delightfully unexpected twists. The restaurant's sunny decor was inspired by diners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
