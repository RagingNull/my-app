import React, { useState } from 'react';
import './Accordion.css';
import AccordionItem from './accordionItem';

const items = [
    {
        item: "item1",
        title: "title1"
    },
    {
        item: "item2",
        title: "title2"
    },
    {
        item: "item3",
        title: "title3"
    }
];

const Accordion = () => {

    const [globalExpand, setGlobalExpand] = useState(false);

    return <div className="accordionContainer">
        <button onClick={() => setGlobalExpand(!globalExpand)}>
            {globalExpand ? "collpse": "expand"}
        </button>
        {
            items.map((el:any, index:number)=>{
                return <AccordionItem item={el.item} title={el.title} key={index} globalExpandProps={globalExpand} />
            })
        }
    </div>
}

export default Accordion;