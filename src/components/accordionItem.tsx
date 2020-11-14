import React, { ReactElement, useEffect, useState } from 'react';
import './AccordionItem.css';

interface IAccordionItem {
    title: string,
    item: string,
    globalExpandProps: boolean
}

const AccordionItem = ({title, item, globalExpandProps}:IAccordionItem ) : ReactElement => {

    const [expand, setExpand] = useState(false);

    useEffect(() =>{
        setExpand(globalExpandProps)
    },[globalExpandProps])

    const header = (
        <div className={'panelContainer'}>
            <p onClick={() => setExpand(!expand)}>{title}</p>
            <div className={expand? "expand" : "collapse"}>{item}</div>
        </div>
    );
    return header;
}
export default AccordionItem;