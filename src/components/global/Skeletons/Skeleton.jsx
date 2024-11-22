import React from "react";

const Skeleton = ({ height, width, padding, style }) => {
    return (
        <div
            className={`${style} rounded animate-pulse `}
        ></div>
    );
};

export default Skeleton;
