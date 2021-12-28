import React from 'react'
import "../styles/Home.css"
import Product from "./Product"
import shoeImage from "../utils/images/shoe.jpg"
import fridge from "../utils/images/fridge.jpeg"
import furniture from "../utils/images/furniture.jpg"
import hair from "../utils/images/hairImage.jpeg"
import Tv from "../utils/images/LgTv.jpeg"
import kitchen from "../utils/images/kitchen.jpeg"
import sound from "../utils/images/soundimage.jpeg"
import shirt from "../utils/images/t-shirt.jpeg"
import bgPic from "../utils/images/large-1.jpg"
import { Link } from "react-router-dom"
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_bgPic " src={bgPic} alt="" />
             </div>  
            <div className="home_row">
                <Product id={ Math.random() } price={345.95} title="Sound System" description="A black pavolio shoe made from the very best of material" rating={3} image={sound} comment={ "Add To Basket"}  />
                <Product id={ Math.random()  } price={19.45} title="T-Shirt" description="A black pavolio shoe made from the very best of material" rating={3} image={shirt} comment={ "Add To Basket"}  />
                <Product id={ Math.random()  }  price={124.39} title="Fridge" description="A black pavolio shoe made from the very best of material" rating={3} image={fridge } comment={ "Add To Basket"} />
                </div>
            <div className="home_row">
                <Product id={ Math.random()  }  price={23.45} title="Hair" description="A black pavolio shoe made from the very best of material" rating={4} image={ hair } comment={ "Add To Basket"}  />
                <Product id={ Math.random()  }  price={249.00} title="Television" description="A black pavolio shoe made from the very best of material" rating={5} image={ Tv } comment={ "Add To Basket"}  />
                <Product id={ Math.random()  }  price={23.45} title="Shoe" description="A black pavolio shoe made from the very best of material" rating={2} image={ shoeImage } comment={ "Add To Basket"} />
              
            </div>
              
            <div className="home_row">
                <Product id={ Math.random()  }  price={1323.05} title="Furniture" description="A black pavolio shoe made from the very best of material" rating={5} image={furniture} comment={ "Add To Basket"} />
                <Product id={ Math.random()  }  price={123.45} title="Kitchen Utensils" description="A black pavolio shoe made from the very best of material" rating={3} image={kitchen} comment={ "Add To Basket"} />
            </div>
           
                
        </div>
    )
}

export default Home
