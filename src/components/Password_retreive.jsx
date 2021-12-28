import React from 'react'
import logo from "../utils/images/amazone.jpeg"
import { Link } from "react-router-dom"
import "../styles/Login.css" 
import { useState } from "react"
import axios from "axios"

function Password_retreive() {
    const [loginData, setloginData] = useState({
        email: "",
        password:""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (loginData.email === "") {
            setloginData({...loginData,
                email:""
            })
        } else if (loginData.password === "") {
            setloginData({...loginData,
                password:""
            })
        
        } else if (loginData.email !== "" && loginData.password !== "") {
            const post = async () => {
               try {
                const data = JSON.stringify(loginData)
                const result =  await axios.post("http://localhost:5000/user_create", {loginData})
                   console.log(result.data)
               } catch (error) {
                   console.log(error.message)
               }
            }
            post()
        } 
    }
    return (
        <div className="login_one">
            <Link to="/">
            <div className="logo">
                <img src={ logo } alt="amazone logo" />
            </div>
            </Link>
            <div className="login_container">
                <h1>PassWord Recovery</h1>
                <form action="" onSubmit={handleSubmit}>
                    <h5>Email</h5>
                    <input type="text" placeholder="Please enter your email." onChange={(e) => {
                        setloginData({...loginData,
                            email: e.target.value
                        })
                    }} required={ true } />

                    <h5>New Password</h5>
                    <input type="password" placeholder="Please enter your new password." onChange={(e) => {
                         setloginData({...loginData,
                            password: e.target.value
                        })
                    }} required={ true } />

                    <button className="login_signinButton" type="submit" onClick={ handleSubmit }>Submit</button>
                </form>
                <p>
                    By signing-in you agree to our Terms and conditions of use & sale. please
                    see our privacy notice, our cookies notice
                    and our interest-based ads notice.
                </p>
            </div>
        </div>
    )
}

export default  Password_retreive
