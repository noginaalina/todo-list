import React from 'react';
import { ButtonStyle } from '../assets/styles/todo-list.styles';

type ButtonPropsType = {
    title: string,
    onClick: (addRef: any) => void
}

function Button({title, onClick}: ButtonPropsType) {
    return (
        <div>
            <ButtonStyle type='button' onClick={onClick} >{title}</ButtonStyle>
        </div>
    );
}

export default React.memo(Button);