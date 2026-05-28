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
	title: "ともどのプロフィール",
	description: "ともどのSNS・技術発信リンク集",
	openGraph: {
		title: "ともどのプロフィール",
		description: "ともどのSNS・技術発信リンク集",
		url: "https://profile.tomodo.net",
		siteName: "ともどのプロフィール",
		images: [
			{
				url: "https://profile.tomodo.net/images/ogp.png", // 絶対URLを使用
				width: 1200,
				height: 630,
				alt: "ともどのプロフィール",
			},
		],
		locale: "ja_JP",
		type: "website",
	},
	twitter: {  // TwitterはXになりましたが、メタタグは変更なし
		card: "summary_large_image",
		title: "ともどのプロフィール",
		description: "ともどのSNS・技術発信リンク集",
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
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
