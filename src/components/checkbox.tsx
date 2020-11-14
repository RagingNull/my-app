import React from 'react';
import './checkbox.css';

interface ICheckBoxRow {
    role: string
};

const CheckBoxRow = ({role}: ICheckBoxRow) =>{
    return (
    <>
        <input type={'checkbox'} id={role} name={role} value={role}/>
        <label htmlFor={role}>{role}</label>
    </>
    )
}

const roles = [
    'admin', 'view', 'proc'
];

const Checkbox = () => {
    return (
        <div className='rowContainer'>
            {
                roles.map((role: string, index:number) =>{
                    return (
                        <CheckBoxRow role={role} key={index} />
                    )
                })
            }
        </div>
    );
}

export default Checkbox