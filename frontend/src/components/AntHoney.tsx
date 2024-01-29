import React from "react";
import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { $nameActive, $firstActivate } from "../resources/store.ts";

import ant from "../assets/ant_flat.svg";
import honey from "../assets/honey_pot_flat.svg";

let timout: NodeJS.Timeout;

export default function Anthoney() {
	const nameActive = useStore($nameActive);

	return (
		<div
			className="text-primary flex cursor-pointer text-9xl"
			style={{
				lineHeight: "normal",
				letterSpacing: "-0.05em",
			}}
			onMouseEnter={() => {
				$nameActive.set(true);
				timout = setTimeout(() => {
					$firstActivate.set(true);
				}, 250);
			}}
			onMouseLeave={() => {
				$nameActive.set(false);
				clearTimeout(timout);
			}}
		>
			<div className="flex overflow-hidden" style={{ paddingRight: "0.025em" }}>
				<motion.div
					initial={false}
					animate={nameActive ? { x: "-8.5rem", width: 0 } : "initial"}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					<img
						className="mt-3 h-32 w-32"
						style={{
							maxWidth: "none",
							filter: "drop-shadow(3px 3px 5px black)",
						}}
						src={ant.src}
						alt="ant"
					/>
				</motion.div>
				<motion.div
					className="bespoke-sans"
					style={{ filter: "drop-shadow(3px 3px 5px black)" }}
					initial={{ width: "0rem", x: "0.5rem" }}
					animate={
						nameActive ? { x: "0rem", width: "auto", marginLeft: 0 } : "initial"
					}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					Ant
				</motion.div>
			</div>
			<div className="flex overflow-hidden" style={{ paddingRight: "0.025em" }}>
				<motion.div
					initial={false}
					animate={nameActive ? { x: "-8rem", width: 0 } : "initial"}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					<img
						className="mt-3 h-32 w-32"
						style={{
							maxWidth: "none",
							filter: "drop-shadow(3px 3px 5px black)",
						}}
						src={honey.src}
						alt="honey"
					/>
				</motion.div>
				<motion.div
					className="flex"
					initial={{ width: "0rem" }}
					animate={nameActive ? { width: "auto" } : "initial"}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					<div
						className="bespoke-sans"
						style={{ filter: "drop-shadow(3px 3px 5px black)" }}
					>
						hon
					</div>
					<motion.div
						className="bespoke-sans"
						style={{ filter: "drop-shadow(3px 3px 5px black)" }}
						initial={false}
						animate={
							nameActive
								? {
										y: ["0rem", "8rem", "8rem"],
										width: ["4rem", "4rem", "0rem"],
									}
								: "initial"
						}
						transition={{
							delay: 0.375,
							duration: nameActive ? 0.75 : 0,
							ease: "easeInOut",
							times: [0.3, 0.6, 0.9],
						}}
					>
						e
					</motion.div>
					<div
						className="bespoke-sans"
						style={{ filter: "drop-shadow(3px 3px 5px black)" }}
					>
						y
					</div>
				</motion.div>
			</div>
		</div>
	);
}
