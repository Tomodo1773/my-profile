import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
	title: "Tomodo's Profile",
	description: "Welcome to Tomodo's personal profile page",
	openGraph: {
		title: "Tomodo's Profile",
		description: "Welcome to Tomodo's personal profile page",
		url: "https://profile.tomodo.net",
		siteName: "Tomodo's Profile",
		images: [
			{
				url: "https://profile.tomodo.net/images/ogp.png", // 絶対URLを使用
				width: 1200,
				height: 630,
				alt: "Tomodo's Profile",
			},
		],
		locale: "ja_JP",
		type: "website",
	},
	twitter: {  // TwitterはXになりましたが、メタタグは変更なし
		card: "summary_large_image",
		title: "Tomodo's Profile",
		description: "Welcome to Tomodo's personal profile page",
		creator: "@Tomodo_ysys",
		images: ["https://profile.tomodo.net/images/ogp.png"], // 絶対URLを使用
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
