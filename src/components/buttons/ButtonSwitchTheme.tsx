import React from "react";
import Switch, {SwitchProps} from '@mui/material/Switch';
import {styled} from '@mui/material/styles';

const CompSwitchTheme = styled(Switch)<SwitchProps>(({theme}) => ({
    width: 70,
    '&.MuiSwitch-root': {
        height: '42px',
        padding: '14px',
    },
    '.css-jsexje-MuiSwitch-thumb': {
        boxShadow: '0px 0px 0px 0px',
        width: '25px',
        height: '25px',
    },
    '.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase': {
        color: 'hsl(46 95% 42%)',
    },
    '.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
        backgroundColor: '#3582ed',
        opacity: 1,
    },
    '.css-1yjjitx-MuiSwitch-track': {
        backgroundColor: 'hsl(46 95% 59%)',
        opacity: 1,
    },
    'css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase': {
        padding: '7px',
    },
    '.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked': {
        color: '#2259a7',
        transform: 'translateX(28px)',
    },
    
}));

const ButtonSwitchTheme = () => {

    let colorFlag = 'light';

    // function changeColorTheme() {
    //     if (colorFlag === 'light') {

    //     }
    // }

    return (
        <div className="ButtonSwitchThemeCont">
            <CompSwitchTheme />
        </div>
    );
}

export default ButtonSwitchTheme;