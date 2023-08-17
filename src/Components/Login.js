import './Login.css'
import React from 'react'
import { useState } from 'react'


export  const  Login= () => {
   const [email,setEmail] =useState('')
   const [password,setPassword] =useState('')

   const emailHandler=(event)=>{
     setEmail(event.target.value)

   }
   const passwordHandler =()=>{
    setPassword(evenet.target.value)
   }
    const formHandle= (event)=>{
        event.preventDefault()
    }

  return (
    <>
    <button style={{position:'absolute' ,bottom:'450px' ,left:'90%',  backgroundColor:'red' ,color:'lightblue' , width:'60px' ,borderRadius:'20px' ,backgroundColor:'transparent' ,border:'solid '}}>Sign in</button>
    <div className='main'> 
     
   
        <form  onSubmit={formHandle}>
          <h1 style={{color:'lightblue',marginLeft:'20px'}}> Login</h1>

    <div class='firstName'>
<label  htmlFor='FirstName' style={{ display:'flex' ,flexDirectiom:'column' ,color:'lightblue' }}> First Name</label>
<input  type="email" id='FirstName' placeholder='Muhammad'   onChange={emailHandler} style={{backgroundColor:"transparent" ,color:'lightblue', width:'170px'  ,height:'30px' , borderRadius:'20px'}}></input>
</div>
<div className='Lastname'>
<label  htmlFor='LastName' style={{ display:'flex' ,flexDirectiom:'column' ,color:'lightblue'}}> Last Name</label>
 <input  type="email" id='LastName' placeholder='Uzair'   onChange={emailHandler} style={{backgroundColor:"transparent" ,color:'lightblue', width:'170px'  ,height:'30px' , borderRadius:'20px'}}></input>
 </div>
 <div  className='email' >
 <label  htmlFor='id_email' style={{ display:'flex' ,flexDirectiom:'column' ,color:'lightblue'}}> Email</label>
<input  type="email" id='id_email' placeholder='ozairkhanan@gmail.com'   onChange={emailHandler} style={{backgroundColor:"transparent" ,color:'lightblue' , width:'170px'  ,height:'30px' , borderRadius:'20px'}}></input>
</div>
<div className='password'>
<label htmlFor='id_password'   style={{ display:'flex' ,flexDirectiom:'column',color:'lightblue'}}> Password</label>
<input  type='password'   id='id_password'  placeholder='*********'  onChange={passwordHandler} style={{backgroundColor:"transparent" ,color:'lightblue' , width:'170px'  ,height:'30px' , borderRadius:'20px'}}></input>
</div>
<div className='btn'>
<button type="submit" style={{ display:'flex' ,flexDirectiom:'column',color:"lightblue" ,width:'60px' ,borderRadius:'20px' ,backgroundColor:'transparent' ,border:'solid '}}>sign up</button>
</div>
    </form>

    </div>
    </>
  )

  
}

export default Login