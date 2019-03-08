import React from "react";

const Icon = props => (
    <div>
        { 	
            props.icon &&
            <i className="icon"><img src={'http://openweathermap.org/img/w/'+`${props.icon}`+'.png'} alt="weater-icon"/></i>
        }
    </div>
);

export default Icon;