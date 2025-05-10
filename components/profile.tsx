import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Profile() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
			<Card className="w-full max-w-md">
				<CardContent className="pt-6">
					<div className="flex flex-col items-center space-y-4">
						{/* プロフィール画像 */}
						<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
							<Image src="/images/profile.png" alt="Tomodo" width={128} height={128} className="w-full h-full object-cover" />
						</div>

						{/* 名前 */}
						<h1 className="text-2xl font-bold text-gray-900">ともど</h1>

						{/* 職業 */}
						<div className="text-gray-600 font-medium">生成AI活用推進</div>

						{/* 自己紹介 */}
						<p className="text-gray-600 text-center max-w-sm">
							LLMアプリを作りたい人。SIerの生成AI活用推進。社内でAOAIのAPI公開とかLT大会とか。Azure,Python,LangGraph,Next.js。キャラクターbotが好き。アニメ好き。
						</p>

						{/* ソーシャルリンク */}
						<div className="flex space-x-4 mt-4">
							<Button variant="ghost" size="icon" asChild>
								<a href="https://x.com/Tomodo_ysys" target="_blank" rel="noopener noreferrer" aria-label="X">
									<Image src="/images/x.png" alt="x" width={20} height={20} className="h-5 w-5 object-contain" />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="https://zenn.dev/tomodo_ysys" target="_blank" rel="noopener noreferrer" aria-label="Zenn">
									<Image src="/images/zenn.svg" alt="Zenn" width={20} height={20} />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="https://speakerdeck.com/tomodo_ysys" target="_blank" rel="noopener noreferrer" aria-label="Speaker_deck">
									<Image src="/images/speaker_deck.svg" alt="Speaker deck" width={20} height={20} />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="https://github.com/Tomodo1773" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
									<Image src="/images/github.png" alt="GitHub" width={20} height={20} className="h-5 w-5 object-contain" />
								</a>
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
