import "./ItemForm.css";

const ItemForm = ({ onAdd }: { onAdd: Function }) => {
    const triggerOnAdd = () => {
        const nameValue = document.getElementById("nameValue") as HTMLInputElement;
        const descValue = document.getElementById("descValue") as HTMLInputElement;

        if (nameValue.value === "" || descValue.value === "") {
            alert("Name or Description cannot be empty!");
            return;
        }
        onAdd({ name: nameValue.value, description: descValue.value });
        nameValue.value = "";
        descValue.value = "";
    };

    return (
        <div className="ItemForm">
            <div className="ItemForm-InputBlock">
                <div className="ItemForm-NameInput">
                    <label htmlFor="nameValue">Name: </label>
                    <input name="nameValue" type="text" id="nameValue" />
                </div>

                <div className="ItemForm-DescInput">
                    <label htmlFor="descValue">Description: </label>
                    <input name="descValue" type="text" id="descValue" />
                </div>
            </div>

            <div className="ItemForm-ButtonBlock">
                <button onClick={triggerOnAdd}>Add Item</button>
            </div>
        </div>
    );
};
export default ItemForm;