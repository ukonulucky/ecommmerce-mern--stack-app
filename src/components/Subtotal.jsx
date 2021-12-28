import React from 'react'
 import { useSelector } from "react-redux" 
import "../styles/Subtotal.css"
import CurrencyFormat from "react-currency-format"
function Subtitle() {
    const basket = useSelector(state => state.basket)
     let   price = 0
    
    let cost = () => {
        if (basket.length === 0) {
        return 0
        } else {
           const totalPrice = basket?.map(item => {
                return price = price + item.price
            })
            return totalPrice[totalPrice.length -1]
    }
    }
       
    const costTotal = cost()
  
      
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>  (
                   <>
                        <p>
                            Subtotal ({ basket.length} items): <strong>{ value }</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={costTotal}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            /> 
            <button className="button">Proceed to Checkout</button>
        </div>
    )
}

export default Subtitle 
