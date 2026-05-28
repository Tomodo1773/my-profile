const links = [
	{
		label: "Zenn",
		href: "https://zenn.dev/tomodo_ysys",
		icon: "/images/zenn.svg",
		iconAlt: "Zenn",
		iconClassName: "h-8 w-8 sm:h-10 sm:w-10",
	},
	{
		label: "Speaker Deck",
		href: "https://speakerdeck.com/tomodo_ysys",
		icon: "/images/speaker_deck.svg",
		iconAlt: "Speaker Deck",
		iconClassName: "h-9 w-9 rounded-md sm:h-11 sm:w-11 sm:rounded-lg",
	},
	{
		label: "GitHub",
		href: "https://github.com/Tomodo1773",
		icon: "/images/github.png",
		iconAlt: "GitHub",
		iconClassName: "h-9 w-9 sm:h-12 sm:w-12",
	},
];

const xProfileUrl = "https://x.com/intent/user?screen_name=Tomodo_ysys";

export default function Profile() {
	return (
		<main className="min-h-screen bg-white text-zinc-950">
			<div className="mx-auto flex min-h-screen w-full max-w-[560px] flex-col px-5 pb-6 pt-12 sm:px-7 sm:pt-12">
				<section className="relative flex flex-1 flex-col justify-center">
					<div className="pointer-events-none absolute left-3 top-9 h-px w-9 -rotate-45 bg-[#079aa0]/80 sm:left-6 sm:top-12 sm:w-16" />
					<div className="pointer-events-none absolute right-8 top-16 h-3 w-3 rounded-full border-[3px] border-[#f0a000] sm:right-9 sm:top-20 sm:border-4" />
					<div className="pointer-events-none absolute left-0 top-32 flex items-center gap-2 sm:top-36">
						<span className="h-3 w-3 rounded-full border-[3px] border-[#079aa0]/90" />
						<span className="h-px w-8 border-t-2 border-dotted border-[#079aa0]/90 sm:w-10" />
					</div>
					<div className="pointer-events-none absolute right-0 top-36 h-px w-10 border-t-2 border-dotted border-[#079aa0]/90 sm:top-40 sm:w-16" />

					<div className="relative flex flex-col items-center text-center">
						<div className="relative">
							<div className="absolute -inset-2 rounded-full border-[5px] border-[#079aa0] sm:border-[6px]" />
							<div className="absolute -inset-5 rounded-full border border-cyan-100" />
							<div className="relative h-40 w-40 overflow-hidden rounded-full bg-white shadow-[0_16px_46px_rgba(8,145,150,0.22)] sm:h-56 sm:w-56">
								<img src="/images/profile.png" alt="ともど" width={224} height={224} className="h-full w-full object-cover" />
							</div>
						</div>

						<h1 className="mt-7 text-[3.65rem] font-black leading-none tracking-normal sm:mt-8 sm:text-[4.8rem]">ともど</h1>
						<div className="mt-3 h-1.5 w-20 rounded-full bg-[#079aa0] sm:mt-4" />
						<p className="mt-5 text-sm font-extrabold leading-relaxed text-[#079aa0] sm:text-xl">AIエージェントデベロッパー / 生成AI活用推進</p>
						<p className="mt-3 max-w-[31rem] text-sm font-medium leading-7 text-zinc-800 sm:mt-5 sm:text-lg sm:leading-9">
							「ないなら作る」が信条。AIキャラbotや投資管理アプリとか個人開発しがち。本業はSIerで生成AI。Python /
							TypeScript / Azure。アニメ1クール5〜10本見る2児の父。
						</p>
					</div>

					<nav aria-label="プロフィールリンク" className="relative mt-7 space-y-4 sm:mt-8">
						<a
							href={xProfileUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex min-h-[64px] w-full items-center justify-between rounded-lg bg-zinc-950 px-5 text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 sm:min-h-[108px] sm:px-9"
							aria-label="X"
						>
							<span className="flex items-center">
								<span className="flex h-10 w-10 items-center justify-center sm:h-20 sm:w-20">
									<img src="/images/x.png" alt="" width={72} height={72} className="h-8 w-8 object-contain sm:h-16 sm:w-16" />
								</span>
								<span className="mx-4 h-9 w-px bg-white/30 sm:mx-8 sm:h-20" />
								<span className="text-2xl font-black leading-none sm:text-5xl">
									X
								</span>
							</span>
							<span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl font-black leading-none text-black transition group-hover:translate-x-1 sm:h-14 sm:w-14">
								›
							</span>
						</a>

						<div className="grid grid-cols-3 gap-3 sm:gap-4">
							{links.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex aspect-square flex-col items-center justify-center rounded-lg border border-zinc-200 bg-white px-2 shadow-[0_8px_18px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
									aria-label={link.label}
								>
									<span className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-14 sm:w-14">
										<img src={link.icon} alt="" width={48} height={48} className={`${link.iconClassName} object-contain`} />
									</span>
									<span className="mt-3 max-w-full text-center text-[13px] font-black leading-tight text-zinc-950 sm:text-xl">
										{link.label}
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
