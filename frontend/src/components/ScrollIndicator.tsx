import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { $scrolled } from "../resources/store.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function ScrollIndicator() {
	const scrolled = useStore($scrolled);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				$scrolled.set(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<motion.div
			className="absolute -right-4 bottom-11 flex rotate-90 transform gap-4 text-lg opacity-30"
			style={{ filter: "drop-shadow(2px 2px 4px black)" }}
			initial={false}
			animate={scrolled ? { bottom: "-80px" } : "initial"}
			transition={{ duration: 0.75, ease: "easeInOut" }}
		>
			<div>Scroll</div>
			<div className="flex h-7 flex-col justify-center">
				<FontAwesomeIcon icon={faArrowRightLong} />
			</div>
		</motion.div>
	);
}

export default ScrollIndicator;
