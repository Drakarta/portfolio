import React from "react";

import AntHoney from "../AntHoney";
import NameHoverIndicator from "../NameHoverIndicator";

function HomeSection() {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<AntHoney />
			<NameHoverIndicator />
		</div>
	);
}

export default HomeSection;
