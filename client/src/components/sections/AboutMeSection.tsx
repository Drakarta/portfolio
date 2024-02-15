import React from "react";

export default function AboutMeSection() {
	const birth = new Date(1071075000000).getTime();
	const now = new Date().getTime();
	const deltaTime = Math.abs(now - birth);
	const age = Math.floor(deltaTime / (1000 * 60 * 60 * 24 * 365.25));
	const Anthony = "Anthony";

	return (
		<div className="flex h-full flex-col gap-16 px-32 py-16 text-lg text-secondary">
			<div className="w-max border-b-4 border-secondary font-bespoke text-5xl">
				About Me;
			</div>
			<div className="bg-zinc-600 w-max">
				<p>
					{Anthony}, I'm {age} years old.
				</p>
			</div>
			<div className="bg-zinc-600 w-max self-end">
				<p>
					{Anthony}, I'm {age} years old.
				</p>
			</div>
			<div className="bg-zinc-600 w-max">
				<p>
					{Anthony}, I'm {age} years old.
				</p>
			</div>
		</div>
	);
}
