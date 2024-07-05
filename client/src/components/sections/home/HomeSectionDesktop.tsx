import React from "react";

import AntHoney from "./homeComponents/AntHoney";
import NameHoverIndicator from "./homeComponents/NameHoverIndicator";

export default function HomeSectionDesktop() {
	return (
		<div className="flex flex-col justify-center items-center w-full h-svh">
			<AntHoney />
			<NameHoverIndicator />
		</div>
	);
}
