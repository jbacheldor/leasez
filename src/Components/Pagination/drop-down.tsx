import React from "react";

interface DropDownProps {
    props: any[];
}

export const DropDown:React.FC<DropDownProps> = ({props}) => {

    return (
        <div className="dropdown">
        {props.map((value) =>
            <div>{value}</div>
        )}
        </div>
    )
}