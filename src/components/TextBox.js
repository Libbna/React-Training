import React from "react";


const TextBox = (props) => {
    return (
        <textarea
            name="textbox"
            id="textbox"
            cols="70"
            rows="15"
            value={props.value}
            onChange={props.onChange}
        >
            {props.children}
        </textarea>
    );
};
export default TextBox;
