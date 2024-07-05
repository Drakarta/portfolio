import React from "react";
import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { $firstActivate } from "@/resources/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";

export default function NameHoverTooltip() {
	const firstActivate = useStore($firstActivate);
	return (
		<motion.div
			className="absolute flex content-center gap-4 w-auto font-sans text-lg text-tetriary pointer-events-none"
			style={{ filter: "drop-shadow(2px 2px 4px black)", marginTop: "11rem" }}
			initial={false}
			animate={firstActivate ? { opacity: 0 } : "initial"}
		>
			<FontAwesomeIcon icon={faArrowUpLong} />
			<div className="font-semibold">Hover</div>
			<FontAwesomeIcon icon={faArrowUpLong} />
		</motion.div>
	);
}
