import { FC, memo } from 'react';
import {} from "../assets/styles/todo-list.styles";

interface CheckedPropsType {
    checked: boolean,
    checkedOnClick: () => void
}


const Checked: FC<CheckedPropsType> = ({checked, checkedOnClick}) => {
    return (

            <div>
                <input className='ml-20' type='checkbox' checked={checked} onChange={checkedOnClick}/>
                {checked}
            </div>

    );
}

export default memo(Checked);