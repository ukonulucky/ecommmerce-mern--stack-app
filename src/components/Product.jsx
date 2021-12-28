import React from 'react'
import {useDispatch } from "react-redux"
import "../styles/Product.css"
import StarIcon from '@mui/icons-material/Star';
function Product({ title, rating, price, description, image,comment, id }) {
    const dispatch = useDispatch()
     const addItem = () => {
        return {
            type: "ADD_TO_BASKET",
        item:{
            title: title,
            id: id,
            rating: rating,
            price: price,
            description: description,
            image: image
           
        }
       }
    }
    
    return (
        <div className="product">
            <div className="product_info" >
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
                <button  type ='button' onClick={() => {
                    dispatch(addItem())
                }} >{ comment }</button>
            </div>
            
            
        </div>
    )
}

export default Product
