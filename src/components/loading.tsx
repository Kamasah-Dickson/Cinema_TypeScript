import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const LoaderExampleLoader = () => (
	<Segment>
		<Dimmer active>
			<Loader />
		</Dimmer>

		<Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
	</Segment>
);

export default LoaderExampleLoader;
