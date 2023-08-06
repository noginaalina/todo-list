import {memo} from 'react';

type ButtonPropsType = {
    title: string,
    onClick: (addRef: any) => void
}

function Button({title, onClick}: ButtonPropsType) {
    return (
            <button className="text-lg ml-4 py-2 px-7 outline-none border-2 border-purple-800 bg-transparent text-purple-700 rounded-lg transition duration-400 hover:shadow-md cursor-pointer w-28" type='button' onClick={onClick} >{title}</button>
    );
}

export default memo(Button);