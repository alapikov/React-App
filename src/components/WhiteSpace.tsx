import React from "react";

interface WhiteSpaceProps {
    height: string
}

const WhiteSpace = ({height}: WhiteSpaceProps) => {
    return (
        <div className="WhiteSpace">
            <div style={{opacity: 0, height: height}}>
                non-visible text
            </div>
        </div>
    );
}

export default WhiteSpace;