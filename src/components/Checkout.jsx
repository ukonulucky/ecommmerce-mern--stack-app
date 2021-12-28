import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import "../styles/Checkout.css"
import Subtotal from './Subtotal'
import advert from "../utils/images/large-image.jpeg"
import Product2 from './Product2'
import shoeImage from "../utils/images/shoe.jpg"
import fridge from "../utils/images/fridge.jpeg"
import furniture from "../utils/images/furniture.jpg"
import hair from "../utils/images/hairImage.jpeg"
import Tv from "../utils/images/LgTv.jpeg"
import kitchen from "../utils/images/kitchen.jpeg"
import sound from "../utils/images/soundimage.jpeg"
import shirt from "../utils/images/t-shirt.jpeg"
import bgPic from "../utils/images/large-1.jpg"

function Checkout() {
    
    const basket = useSelector(state => state.basket)
   
    const dispatch = useDispatch()
    
    const basket2 = basket.length > 0 ? (
            basket.map((item, index) => {
                return <div key={index}>
                    <Product2 price={item.price} title={item.title} description={item.description} rating={item.rating} image={item.image} id={ item.id } comment={"Remove From Basket"}  />
                    </div>
                
            })) : (
            <div>
                No Item Found In Basket. 
            </div>
            )
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src={advert} className="checkout_adv" alt="advert" />
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    { basket2 }
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
