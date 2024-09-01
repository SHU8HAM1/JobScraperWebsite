import * as React from "react";
const SVGComponent = (props) => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
	<defs/>
	<ellipse style={{"stroke":"rgb(0, 0, 0)","fill":"rgb(255, 255, 255)","strokeWidth":"7px"}} cx="250" cy="250" rx="75" ry="75"/>
	<path style={{"transformBox":"fill-box","transformOrigin":"50% 50%","fill":"rgb(255, 0, 0)","stroke":"rgb(0, 0, 0)"}} d="M 239.937 207.006 L 249.937 272.006 L 229.937 272.006 L 239.937 207.006 Z" transform="matrix(0.642788, -0.766044, 0.766044, 0.642788, -12.61249, -9.954931)"/>
	<path style={{"fill":"rgb(216, 216, 216)","stroke":"rgb(0, 0, 0)","transformOrigin":"239.937px 239.506px"}} d="M 239.937 207.006 L 249.937 272.006 L 229.937 272.006 L 239.937 207.006 Z" transform="matrix(-0.642788, 0.766044, -0.766044, -0.642788, 38.387319, 33.04521)"/>
</svg>
);
export default SVGComponent;
