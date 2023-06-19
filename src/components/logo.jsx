import React from "react";

const Logo = (props) => {
    return (
            <img
                src={props.logo}
                alt={props.alt}
                width={props.width}
            />
    );
}

export default Logo;