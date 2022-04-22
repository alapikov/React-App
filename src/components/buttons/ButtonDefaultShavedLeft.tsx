import React from "react";
import Button from '@mui/material/Button'

interface ButtonDefaultShavedLeftProps {
    buttonName: string,

}

function ButtonDefaultShavedLeft({buttonName}: ButtonDefaultShavedLeftProps) {
    return (
        // ** примечание 1 **
        <Button className="ButtonDefaultShavedLeft" type='button' variant='contained'>{buttonName}</Button>
    );
}

export default ButtonDefaultShavedLeft;