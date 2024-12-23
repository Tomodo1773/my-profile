import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Profile() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
			<Card className="w-full max-w-md">
				<CardContent className="pt-6">
					<div className="flex flex-col items-center space-y-4">
						{/* プロフィール画像 */}
						<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
							<img src="/images/profile.png" alt="Tomodo" className="w-full h-full object-cover" />
						</div>

						{/* 名前 */}
						<h1 className="text-2xl font-bold text-gray-900">ともど</h1>

						{/* 職業 */}
						<div className="text-gray-600 font-medium">生成AI活用推進</div>

						{/* 自己紹介 */}
						<p className="text-gray-600 text-center max-w-sm">
							SIerの生成AI活用推進。社内向けにAOAIのAPI公開してLT大会など開催。Azure,Python,Langchain,Streamlit,Line。LLMアプリ開発者目指してキャラクターbotで特訓中。技術ブログ、コミュニティ参加。アニメ好き。
						</p>

						{/* ソーシャルリンク */}
						<div className="flex space-x-4 mt-4">
							<Button variant="ghost" size="icon" asChild>
								<a href="https://x.com/Tomodo_ysys" target="_blank" rel="noopener noreferrer" aria-label="X">
									<img src="/images/x.png" alt="x" className="h-5 w-5 object-contain" />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="https://zenn.dev/tomodo_ysys" target="_blank" rel="noopener noreferrer" aria-label="Zenn">
									<object data="/images/zenn.svg" type="image/svg+xml" className="h-5 w-5 object-contain" aria-label="Zenn"></object>
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="https://speakerdeck.com/tomodo_ysys" target="_blank" rel="noopener noreferrer" aria-label="Speaker_deck">
									<object data="/images/speaker_deck.svg" type="image/svg+xml" className="h-5 w-5 object-contain" aria-label="Speaker_deck"></object>
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="https://github.com/Tomodo1773" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
									<img src="/images/github.png" alt="GitHub" className="h-5 w-5 object-contain" />
								</a>
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
