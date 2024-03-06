import { useState } from "react";
import Item, { ItemProp } from "./Item";
import ItemForm from "./ItemForm";
import "./ItemList.css"

export type ItemListProp = {
    initItems: ItemProp[];
};

const ItemList = ({ initItems }: ItemListProp) => {
    const [items, setItems] = useState(initItems);

    function addItem(item: ItemProp) {
        setItems([item, ...items]);
        // console.log([item, ...items]);
    }

    return (
        <div className="ItemList-Wrapper">
            <h2>Item List</h2>
            <ItemForm onAdd={addItem} />
            <div className="ItemList-Block">
                {items.map((item, i) => {
                    // console.log(item.name, item);
                    return (
                        <Item key={i} name={item.name} description={item.description} />
                    );
                })}
            </div>
        </div>
    );
};
export default ItemList;
