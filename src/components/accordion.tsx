import React, { useState } from 'react';
import './Accordion.css';
import AccordionItem from './accordionItem';

const items = [
    {
        title: "title1"
    },
    {
        title: "title2"
    },
    {
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
                return <AccordionItem title={el.title} key={index} globalExpandProps={globalExpand} />
            })
        }
    </div>
}

export default Accordion;