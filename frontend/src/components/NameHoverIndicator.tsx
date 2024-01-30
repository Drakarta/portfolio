import React from "react";
import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { $firstActivate } from "../resources/store.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";

export default function nameHoverTooltip() {
	const firstActivate = useStore($firstActivate);

	return (
		<motion.div
			className="text-faded pointer-events-none absolute flex w-auto content-center gap-4 text-lg"
			style={{ filter: "drop-shadow(1px 1px 2px black)", marginTop: "11rem" }}
			initial={false}
			animate={firstActivate ? { opacity: 0 } : "initial"}
		>
			<FontAwesomeIcon icon={faArrowUpLong} />
			<div className="system-ui">Hover</div>
			<FontAwesomeIcon icon={faArrowUpLong} />
		</motion.div>
	);
}
