import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import {
	$firstActivate,
	$isMobile,
	$nameActive2,
} from "../../resources/store.ts";

import AntHoney from "../AntHoney.tsx";
import NameHoverIndicator from "../NameHoverIndicator.tsx";
import ScrollIndicator from "../ScrollIndicator.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import ant from "../../assets/ant_flat.svg";
import honey from "../../assets/honey_pot_flat.svg";

function HomeSection() {
	const isMobile = useStore($isMobile);
	const nameActive2 = useStore($nameActive2);
	const firstActivate = useStore($firstActivate);

	return (
		<>
			{isMobile ? (
				<div className="grid h-svh grid-cols-3 grid-rows-9">
					<div
						className="col-start-1 col-end-4 row-start-5 flex cursor-pointer justify-center"
						onClick={() => {
							$nameActive2.set(!nameActive2);
							$firstActivate.set(true);
						}}
					>
						<img
							className="-my-4 aspect-square w-32"
							style={{ filter: "drop-shadow(3px 3px 5px black)" }}
							src={ant.src}
							alt="ant"
						/>
						<img
							className="-my-4 aspect-square w-32"
							style={{ filter: "drop-shadow(3px 3px 5px black)" }}
							src={honey.src}
							alt="honey_pot"
						/>
					</div>
					<motion.div
						className="pointer-events-none relative top-6 col-start-2 row-start-6 flex justify-center gap-4 text-lg opacity-30"
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
							$nameActive2.set(!nameActive2);
						}}
						className="relative col-start-1 col-end-4 row-start-6 row-end-8 m-2 flex max-h-20 w-fit cursor-pointer justify-center justify-self-center overflow-hidden px-1.5 text-6xl"
						style={{ lineHeight: "normal", letterSpacing: "-0.025em" }}
						initial={{ height: "0px" }}
						animate={nameActive2 ? { height: "auto" } : "initial"}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					>
						<div
							className="bespoke-sans"
							style={{ filter: "drop-shadow(3px 3px 5px black" }}
						>
							Anthon
						</div>
						<motion.div
							className="bespoke-sans"
							style={{ filter: "drop-shadow(3px 3px 5px black" }}
							initial={false}
							animate={
								nameActive2
									? {
											y: ["0rem", "4rem", "4rem"],
											width: ["2rem", "2rem", "0rem"],
										}
									: "initial"
							}
							transition={{
								delay: 0.375,
								duration: nameActive2 ? 0.75 : 0,
								ease: "easeInOut",
								times: [0.3, 0.6, 0.9],
							}}
						>
							e
						</motion.div>
						<div
							className="bespoke-sans"
							style={{ filter: "drop-shadow(3px 3px 5px black" }}
						>
							y
						</div>
					</motion.div>
				</div>
			) : (
				<div className="flex h-screen w-full flex-col items-center justify-center">
					<AntHoney />
					<NameHoverIndicator />
				</div>
			)}
			<ScrollIndicator />
		</>
	);
}

export default HomeSection;
