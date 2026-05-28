import Image from "next/image";

const links = [
	{
		label: "Zenn",
		href: "https://zenn.dev/tomodo_ysys",
		icon: "/images/zenn.svg",
		iconAlt: "Zenn",
		iconClassName: "h-10 w-10",
	},
	{
		label: "Speaker Deck",
		href: "https://speakerdeck.com/tomodo_ysys",
		icon: "/images/speaker_deck.svg",
		iconAlt: "Speaker Deck",
		iconClassName: "h-11 w-11 rounded-lg",
	},
	{
		label: "GitHub",
		href: "https://github.com/Tomodo1773",
		icon: "/images/github.png",
		iconAlt: "GitHub",
		iconClassName: "h-12 w-12",
	},
];

export default function Profile() {
	return (
		<main className="min-h-screen bg-white text-zinc-950">
			<div className="mx-auto flex min-h-screen w-full max-w-[560px] flex-col px-4 pb-8 pt-7 sm:px-7 sm:pt-10">
				<section className="relative flex flex-1 flex-col">
					<div className="pointer-events-none absolute left-7 top-10 h-px w-9 -rotate-45 bg-[#079aa0] sm:left-6 sm:top-12 sm:w-16" />
					<div className="pointer-events-none absolute right-11 top-16 h-3 w-3 rounded-full border-[3px] border-[#f0a000] sm:right-9 sm:top-20 sm:border-4" />
					<div className="pointer-events-none absolute left-0 top-32 flex items-center gap-2 sm:top-36">
						<span className="h-3 w-3 rounded-full border-[3px] border-[#079aa0]" />
						<span className="h-px w-8 border-t-2 border-dotted border-[#079aa0] sm:w-10" />
					</div>
					<div className="pointer-events-none absolute right-0 top-36 h-px w-10 border-t-2 border-dotted border-[#079aa0] sm:top-40 sm:w-16" />

					<div className="relative flex flex-col items-center text-center">
						<div className="relative">
							<div className="absolute -inset-2 rounded-full border-[6px] border-[#079aa0]" />
							<div className="absolute -inset-5 rounded-full border border-cyan-100" />
							<div className="relative h-44 w-44 overflow-hidden rounded-full bg-white shadow-[0_16px_46px_rgba(8,145,150,0.22)] sm:h-56 sm:w-56">
								<Image src="/images/profile.png" alt="ともど" width={224} height={224} className="h-full w-full object-cover" priority />
							</div>
						</div>

						<h1 className="mt-8 text-[3.7rem] font-black leading-none tracking-normal sm:text-[4.8rem]">ともど</h1>
						<div className="mt-4 h-1.5 w-20 rounded-full bg-[#079aa0]" />
						<p className="mt-5 text-base font-extrabold leading-relaxed text-[#079aa0] sm:text-xl">AIエージェントデベロッパー / 生成AI活用推進</p>
						<p className="mt-5 max-w-[31rem] text-base font-medium leading-8 text-zinc-800 sm:text-lg sm:leading-9">
							AIエージェントデベロッパー。SIerの生成AI活用推進。社内でAOAIのAPI公開とかLT大会とか。Azure, Python,
							LangGraph。キャラクターbotが好き。アニメ好き。
						</p>
					</div>

					<nav aria-label="プロフィールリンク" className="relative mt-8 space-y-4">
						<a
							href="https://x.com/Tomodo_ysys"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex min-h-[86px] w-full items-center justify-between rounded-xl bg-black px-6 text-white shadow-[0_14px_30px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 sm:min-h-[108px] sm:px-9"
							aria-label="X"
						>
							<span className="flex items-center">
								<span className="flex h-14 w-14 items-center justify-center sm:h-20 sm:w-20">
									<Image src="/images/x.png" alt="" width={72} height={72} className="h-11 w-11 object-contain sm:h-16 sm:w-16" />
								</span>
								<span className="mx-5 h-14 w-px bg-white/35 sm:mx-8 sm:h-20" />
								<span className="text-4xl font-black leading-none sm:text-5xl">
									X
								</span>
							</span>
							<span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-3xl font-black leading-none text-black transition group-hover:translate-x-1 sm:h-14 sm:w-14">
								›
							</span>
						</a>

						<div className="space-y-4">
							{links.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex min-h-[76px] items-center justify-between rounded-xl border border-zinc-200 bg-white px-5 shadow-[0_8px_18px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 sm:min-h-[92px] sm:px-8"
									aria-label={link.label}
								>
									<span className="flex min-w-0 items-center gap-4 sm:gap-6">
										<span className="flex h-14 w-14 shrink-0 items-center justify-center">
											<Image src={link.icon} alt="" width={48} height={48} className={`${link.iconClassName} object-contain`} />
										</span>
										<span className="truncate text-2xl font-black leading-none text-zinc-950 sm:text-4xl">
											{link.label}
										</span>
									</span>
									<span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-3xl font-black leading-none text-zinc-950 transition group-hover:translate-x-1 group-hover:bg-cyan-50 group-hover:text-[#079aa0]">
										›
									</span>
								</a>
							))}
						</div>
					</nav>
				</section>
			</div>
		</main>
	);
}
