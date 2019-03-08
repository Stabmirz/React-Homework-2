import React from "react";

const Location = props => (
	<div className="city-day-condition">
	 {	
	 	props.city && props.country && <p className="location">
	 	{ props.city }, { props.country }
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="description">{ props.description }</p> 
	 }
	</div>
);

export default Location;