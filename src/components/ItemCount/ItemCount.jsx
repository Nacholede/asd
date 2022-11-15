import React, {useState} from "react"
import MyButton from "../../MyButton/MyButton"

function ItemCount ({stock}) {
    const [count, setCount] = useState (1);

    function handleAdd (evt) {
        if (count < stock) setCount (count + 1);
    }

    function handleSubstract (evt) { 
        if (count > 1) setCount (count - 1);
    }

    function onAddToCart () {
        
    }

    return (
        <div className= "itemcount_container">
            <div className="itemcount_control">
                <MyButton onClick= {handleSubstract}> - </MyButton>
                <span> {count} </span>
                <MyButton onClick={handleAdd}> + </MyButton>
                
                </div>
                <div className="itemcount_btns">
                    <MyButton> Agregar al carrito </MyButton>

                </div>

        </div>
    )
}

export default ItemCount; 

