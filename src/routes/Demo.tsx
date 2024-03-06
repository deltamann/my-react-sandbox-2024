import React from 'react'
import { ItemProp } from '../components/ItemList/Item';
import ItemList from '../components/ItemList/ItemList';

type Props = {}

const initItems: ItemProp[] = [
    { name: "Item 1", description: "This is item 1" },
    { name: "Item 2", description: "This is item 2" },
    { name: "Item 3", description: "This is item 3" },
];

const Demo = (props: Props) => {
    return (
        <div className='DemmoPage'>
            <ItemList initItems={initItems} />
        </div>
    )
}

export default Demo