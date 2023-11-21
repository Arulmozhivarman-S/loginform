import { Button } from 'bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ButtonAppBar from './HomePage'
export default function Login() {
  return (
        <div >
        <div className='des1'></div>
        <div className='header'>
                <h5 style={{textAlign:'right'}}>New User?  <a href="#">Sign Up</a> </h5>
        </div>

        <div className='login'>
            <h1 style={{marginLeft:'10px'}}>Welcome Back!</h1>
            <h4 style={{marginLeft:'10px'}}>Login to continue</h4>
            <FontAwesomeIcon icon={faUser} shake />{' '}
            <input type='text' placeholder=' Enter Your Email !!!' />
            <input id='inp2'  type='password' placeholder=" Enter Your password !!!"/>{' '}
             <FontAwesomeIcon id='i' icon={faLock} />
        </div>
        <div className='Footer'>
                <button type='submit'><link href="/ButtonAppBar">Login</link></button>
                <a href='#' style={{marginLeft:'60px',color:'black'}}>Forget Password?</a>
        </div>
        <div className='footer2'>
                <a style={{color:"blue"}}>Login With </a>
               <GoogleIcon style={{marginRight:"10px",marginLeft:"20px"}}/>
               <FacebookIcon style={{marginLeft:"5px"}}/>
               <TwitterIcon style={{marginLeft:"20px"}}/>
        </div>
        <div className='des2'>

        </div>

        </div>
  )
}
