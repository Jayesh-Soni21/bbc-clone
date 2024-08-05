import React from 'react'
import p0gpmw0t from "../images/p0gpmw0t.png"
import logo from "../images/logo.png"
import { signInWithPopup } from 'firebase/auth'
import { googleProvider } from '../firebase/setup'
import { auth} from '../firebase/setup'
import { useNavigate } from 'react-router-dom'
function Signin() {
    const navigate=useNavigate();
    const googleSignin= async()=>{
        try{

        await signInWithPopup(auth,googleProvider)
        auth.currentUser && navigate("/")
        }
        catch(err){
                console.error(err);
        }
    }
    console.log(auth);
  return (
    <div className='grid grid-cols-2 bg-black h-screen'>
      <div className='text-center'>
        <img src={logo} alt='' className='h-14 ml-80 mt-32'/>
        <h1 className='text-white text-3xl font-semibold mt-8 ml-14'>Sign in</h1>
        <button onClick={googleSignin} class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-14 w-96 mt-14 ml-12">
  Sign in
</button>
<h2 className='text-blue-500 underline mt-7 ml-12'> Sign in Now</h2>
      </div>
      <div>
      <img src={p0gpmw0t} alt='' className='h-screen ml-60'/>
      </div>
      
    </div>
  )
}

export default Signin
