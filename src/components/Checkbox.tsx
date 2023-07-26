import React from 'react';
import {CheckboxContainer} from "../assets/styles/todo-list.styles";

interface CheckedPropsType {
    checked: boolean,
    checkedOnClick: () => void
}


const Checked: React.FC<CheckedPropsType> = ({checked, checkedOnClick}) => {
    return (

            <CheckboxContainer>
                <input type='checkbox' checked={checked} onChange={checkedOnClick}/>
                {checked}
            </CheckboxContainer>

    );
}

export default Checked;