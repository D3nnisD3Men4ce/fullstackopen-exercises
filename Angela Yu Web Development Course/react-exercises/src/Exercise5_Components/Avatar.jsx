import React from "react";

const Avatar = ( {img} ) => {
    return (
        <img
            className="circle-img"
            src={img}
            alt="avatar_img"
        />
    )
}

export default Avatar;