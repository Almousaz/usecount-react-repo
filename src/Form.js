import { useState , useReducer, useRef } from "react"
import { formReducer, initialState } from "./formReducer"
import { type } from "@testing-library/user-event/dist/type"


export const Form = () => {
    // const [product , setProduct] = useState( {

    //     title : "",
    //     description : "",
    //     price : 0,
    //     category : "",
    //     tags : [],
    //     quantity : 0, 
    // })


    const tagRef = useRef ()



    const [state , dispatch] = useReducer(formReducer , initialState)

    const handleInputChange = (event) => {
        dispatch({ 
            type : "change_input" , data : {name : event.target.name , value : event.target.value}
        })
    }

    const handleTags = () => {
        const tags = tagRef.current.value.split(",")
        console.log(tags , tagRef.current.value)
        tags.forEach((t) => {
            dispatch({type : "add_tag" , data : t})
        });
    };

    console.log(state)

    return (

        <div>
            <form>
                <input type="text" placeholder="title" name="title" onChange={handleInputChange} />
                <input type="text" placeholder="description" name="description" onChange={handleInputChange} />
                <input type="number" placeholder="section" name="price" onChange={handleInputChange} />
                <p>Category</p>
                <select  name="category" onChange={handleInputChange} >
                    <option value="bag">Bag</option>
                    <option value="shoes">Shoes</option>
                    <option value="dress">Dress</option>
                </select>
                    <p>Tag</p>
                    <textarea placeholder="tags" ref={tagRef} ></textarea>
                    <br />

                    <button type="button" onClick={handleTags} >select tag</button>

                    <br />
                    {state.tags.map((tag) => {
                     return  <button key={tag} onClick={() => dispatch({ type : "remove_tag" , data : tag})} >{tag}</button>;
                    })}

                    

                    <div style={{marginTop : "20px"}}>
                        <button type="button" onClick={() => dispatch({type : "increase"})} >+</button>
                         number {state.quantity}
                        <button type="button" onClick={() => dispatch({type : "decrease"})} >-</button>
                    </div>

                
            </form>
        </div>
    )
}