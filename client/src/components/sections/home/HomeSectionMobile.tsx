import React from "react";
import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { $firstActivate, $nameActiveMobile } from "@/resources/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import ant from "@/assets/ant_flat.svg";
import honey from "@/assets/honey_pot_flat.svg";

export default function HomeSectionMobile() {
	const nameActiveMobile = useStore($nameActiveMobile);
	const firstActivate = useStore($firstActivate);

	return (
		<div className="flex flex-col justify-center items-center h-svh">
			<button
				className="flex justify-center cursor-pointer"
				style={{ height: "148px" }}
				onClick={() => {
					$nameActiveMobile.set(!nameActiveMobile);
					$firstActivate.set(true);
				}}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						$nameActiveMobile.set(!nameActiveMobile);
						$firstActivate.set(true);
					}
				}}
			>
				<img
					className="mt-3 w-32 aspect-square"
					style={{ filter: "drop-shadow(3px 3px 5px black)" }}
					src={ant.src}
					alt="ant"
				/>
				<img
					className="mt-3 w-32 aspect-square"
					style={{ filter: "drop-shadow(3px 3px 5px black)" }}
					src={honey.src}
					alt="honey_pot"
				/>
			</button>
			<motion.div
				className="absolute flex justify-center gap-4 col-start-2 row-start-6 mt-48 font-sans text-lg text-tetriary pointer-events-none"
				style={{ filter: "drop-shadow(1px 1px 2px black)" }}
				initial={false}
				animate={firstActivate ? { opacity: 0 } : "initial"}
			>
				<FontAwesomeIcon icon={faArrowUpLong} />
				<div className="text-lg">Tap</div>
				<FontAwesomeIcon icon={faArrowUpLong} />
			</motion.div>
			<motion.div
				onClick={() => {
					$nameActiveMobile.set(!nameActiveMobile);
				}}
				className="absolute flex justify-center justify-self-center mt-52 px-1.5 w-fit max-h-20 font-bespoke text-6xl text-secondary cursor-pointer overflow-hidden"
				style={{ lineHeight: "normal", letterSpacing: "-0.025em" }}
				initial={{ height: "0px" }}
				animate={nameActiveMobile ? { height: "auto" } : "initial"}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<div style={{ filter: "drop-shadow(3px 3px 5px black" }}>Anthon</div>
				<motion.div
					style={{ filter: "drop-shadow(3px 3px 5px black" }}
					initial={false}
					animate={
						nameActiveMobile
							? {
									y: ["0rem", "4rem", "4rem"],
									width: ["2rem", "2rem", "0rem"],
								}
							: "initial"
					}
					transition={{
						delay: 0.375,
						duration: nameActiveMobile ? 0.75 : 0,
						ease: "easeInOut",
						times: [0.3, 0.6, 0.9],
					}}
				>
					e
				</motion.div>
				<div style={{ filter: "drop-shadow(3px 3px 5px black" }}>y</div>
			</motion.div>
		</div>
	);
}
