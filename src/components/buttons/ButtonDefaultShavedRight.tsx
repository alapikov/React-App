import React from "react";
import Button from '@mui/material/Button'

interface ButtonDefaultShavedRightProps {
    buttonName: string,

}

function ButtonDefaultShavedRight({buttonName}: ButtonDefaultShavedRightProps) {
    return (
        // ** примечание 1 **
        <Button className="ButtonDefaultShavedRight" type='button' variant='contained'>{buttonName}</Button>
    );
}

export default ButtonDefaultShavedRight;