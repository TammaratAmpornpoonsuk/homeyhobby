import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { MouseTrail } from "@/components/mouse-trail";
import { PageTransition } from "@/components/page-transition";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homey Hobby",
  description: "Homey Hobby Official Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${prompt.className} min-h-full flex flex-col`}>
        <PageTransition>{children}</PageTransition>
        <MouseTrail />
      </body>
    </html>
  );
}
