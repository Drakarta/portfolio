import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { $scrolled } from "@/resources/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function ScrollIndicator() {
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
			className="-right-4 bottom-11 absolute flex gap-4 font-sans text-lg text-tetriary transform rotate-90"
			style={{ filter: "drop-shadow(2px 2px 4px black)" }}
			initial={false}
			animate={scrolled ? { bottom: "-80px" } : "initial"}
			transition={{ duration: 0.75, ease: "easeInOut" }}
		>
			<div className="font-semibold">Scroll</div>
			<div className="flex flex-col justify-center h-7">
				<FontAwesomeIcon icon={faArrowRightLong} />
			</div>
		</motion.div>
	);
}
