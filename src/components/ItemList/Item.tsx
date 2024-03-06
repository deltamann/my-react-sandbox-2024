import "./Item.css"

export type ItemProp = {
    name: string, 
    description: string
}

const ItemPropDefault: ItemProp = { name: "name", description: "description" }

const Item = (props = ItemPropDefault) => {
    return (
        <div className="Item-Wrapper">
            <div className="Item-Block">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Item;
