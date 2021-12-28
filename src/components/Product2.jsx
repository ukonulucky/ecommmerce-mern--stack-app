import React from 'react'
import {useDispatch,useSelector } from "react-redux"
import "../styles/Product.css"
import StarIcon from '@mui/icons-material/Star';
function Product2({ title, rating, price, description, image,comment, id }) {
    const dispatch = useDispatch()
    const basket = useSelector(state => state.basket)
  
    const action2 = (id) => {
        const index = basket.findIndex(
            (basket) => basket.id === id
        )
        if (index >= 0) {
            const newState = [...basket]
            newState.splice(index, 1)
            return {
                type: "REMOVE_FROM_BASKET",
                payload: newState  
            }
        } else {
            console.warn(`product with the id ${id} does not exist`)
        }
      
        
  
    }
    
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p>{description}</p>
                <div className="amount">
                <small>$</small>
                    <strong>{ price }</strong>
                </div>
                <div className="product_rating">
                    {
                     Array(rating).fill().map((_,i) =>
                     { return (<span key={ i } className="star"><StarIcon  /> </span>)})
                    }
                </div>
                <img src={image} alt="shoe image" />
                <button type='button' onClick={() => {
                    dispatch(action2(id))
                   
                }} >{ comment }</button>
            </div>
            
            
        </div>
    )
}

export default Product2
