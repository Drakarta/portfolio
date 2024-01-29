import React, { useEffect } from "react";

import AntHoney from "../AntHoney";
import NameHoverIndicator from "../NameHoverIndicator";

export default function HomeSection() {
	return (
		<div
			id="3"
			className="flex h-screen w-full flex-col items-center justify-center"
		>
			<AntHoney />
			<NameHoverIndicator />
		</div>
	);
}
