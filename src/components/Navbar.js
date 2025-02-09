import React from 'react'
import logo from "../images/logo.png"
import user from "../images/user.png"
import lenses from "../images/lenses.png" 
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/setup'
import { signOut } from 'firebase/auth'
function Navbar(props) {

    const navigate=useNavigate();

    const logout= async()=>{
        try{
            await signOut(auth)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }
    }
    console.log(auth)
  return (
    <div className='grid grid-cols-3 bg-black text-white fixed'>
      <div className='flex p-3 h-15'>
        <img src={logo} alt='' className='h-8 mt-1'/>
       {auth.currentUser? <button onClick={logout} className='text-white flex hover:border border-white p-2'>
            Logout
        </button>:<Link to='/signin'>
        <button className='text-white flex hover:border border-white p-2 w-48'>
            <img src={user} alt='' className='h-7'/>
            Sign in
        </button>
        </Link>}
        
      </div>
      <div className='flex'>
        <button onClick={()=> props.setMenu("All")} className=' font-semibold text-sm'> 
            Home
        </button>
        <button onClick={()=> props.setMenu("Science")} className='ml-7 font-semibold text-sm'>
            Science
        </button>
        <button onClick={()=> props.setMenu("Movies")} className='ml-7 font-semibold text-sm'>
         Movies
        </button>
        <button onClick={()=> props.setMenu("Food")} className='ml-7 font-semibold text-sm'>
          Food
        </button>
        <button onClick={()=> props.setMenu("Worklife")} className='ml-7 font-semibold text-sm'>
            Worklife
        </button>
        <button onClick={()=> props.setMenu("Travel")} className='ml-7 font-semibold text-sm'>
        Travel
        </button>
        <button onClick={()=> props.setMenu("Future")} className='ml-7 font-semibold text-sm'>
        Future
        </button>
        <button onClick={()=> props.setMenu("Culture")} className='ml-7 font-semibold text-sm'>
            Culture
        </button>
      </div>
      <div className='ml-40 flex p-4'>
      <img src={lenses} alt='' className='h-6'/>
        <input onChange={(e)=>props.setSearch(e.target.value)} className='bg-black flex' placeholder='Search BBC'/>
           
      </div>
     
    </div>
  )
}

export default Navbar
