import React from "react";
import classes from "./MyButton.module.css"
const MyButton = ({...props}) =>{
    return(
        <button {...props} className={classes.myBtn}>
            
        </button>
    )
}
export default MyButton;