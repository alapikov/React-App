import React from "react";
//@ts-ignore
import ButtonSwitchTheme from "./buttons/ButtonSwitchTheme.tsx";

function HeaderBar() {
    return (
        <div className="HeaderBar" id="HeaderBar">
            <ButtonSwitchTheme />
            
        </div>
    );
}

export default HeaderBar;