import React from "react";

import AntHoney from "../AntHoney";
import NameHoverIndicator from "../NameHoverIndicator";

function HomeSection() {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<div
				onClick={() => {
					console.log("clicked");
				}}
			>
				test
			</div>
			<AntHoney />
			<NameHoverIndicator />
		</div>
	);
}

export default HomeSection;
