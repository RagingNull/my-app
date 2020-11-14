import React, { ReactElement, useEffect, useState } from 'react';
import './AccordionItem.css';
import CheckBoxContainer from './CheckBoxContainer';

interface IAccordionItem {
    title: string,
    globalExpandProps: boolean
}

const AccordionItem = ({title, globalExpandProps}:IAccordionItem ) : ReactElement => {

    const [expand, setExpand] = useState(false);

    useEffect(() =>{
        setExpand(globalExpandProps)
    },[globalExpandProps])

    const header = (
        <div className={'panelContainer'}>
            <p onClick={() => setExpand(!expand)}>{title}</p>
            <div className={expand? "expand" : "collapse"}>
                <CheckBoxContainer />
            </div>
        </div>
    );
    return header;
}
export default AccordionItem;