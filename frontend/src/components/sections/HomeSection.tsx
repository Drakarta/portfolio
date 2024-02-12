import React from "react";

import AntHoney from "../AntHoney";
import NameHoverIndicator from "../NameHoverIndicator";

export default function HomeSection() {
	return (
		<div className="flex h-svh w-full flex-col items-center justify-center">
			<AntHoney />
			<NameHoverIndicator />
		</div>
	);
}
