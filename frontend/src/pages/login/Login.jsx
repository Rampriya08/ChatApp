import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const [userName,setUserName] =useState("");
    const [password,setPassword]=useState("");

    const {loading,login} =useLogin();
    const handleSubmit =async (e) =>{
        e.preventDefault();
        await login({userName,password});
        }

  return (
    <div className='felx flex-col items-center justify-center min-w-96 mx-auto'>
<div className="h-full w-full p-6 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100">
    <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Login
    <span className='text-yellow-500'> ChatApp</span>

        </h1>

    <form onSubmit={handleSubmit}> 
        <div>
            <label className='label p-2 '> 
                <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" name="" id=""  placeholder='Enter Username' className='w-full input input-bordered h-10'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
        </div>

        <div>
            <label className='label p-2 ' > 
                <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type="password" name="" id=""  placeholder='Enter Password' className='w-full input input-bordered h-10'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <Link to='/signup' className='text-sm hover:underline hover:text-blue-200 mt-2 inline-block text-gray-300'>{"Don't"} Have An Account? </Link>

        <div>
        <button type="submit" className='btn btn-block btn-sm mt-2'
            disabled={loading}
            >    
              {loading ?(
                <span className="loading loading-spinner" ></span>
              ):(
                "Login"
              )}
              </button>
        </div>

    </form>
        </div>


    </div>
  )
}

export default Login


//Started Code
// const Login = () => {
//     return (
//       <div className='felx flex-col items-center justify-center min-w-96 mx-auto'>
//   <div className="h-full w-full p-6 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100">
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Login
//       <span className='text-yellow-500'> ChatApp</span>
  
//           </h1>
  
//       <form>
//           <div>
//               <label className='label p-2 '> 
//                   <span className='text-base label-text text-white'>Username</span>
//               </label>
//               <input type="text" name="" id=""  placeholder='Enter Username' className='w-full input input-bordered h-10'/>
//           </div>
  
//           <div>
//               <label className='label p-2 ' > 
//                   <span className='text-base label-text text-white'>Password</span>
//               </label>
//               <input type="password" name="" id=""  placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//           </div>
  
//           <a href='#' className='text-sm hover:underline hover:text-blue-200 mt-2 inline-block text-gray-300'>{"Don't"} Have An Account? </a>
  
//           <div>
//               <button className='btn btn-block btn-sm mt-2'>Login
  
//               </button>
//           </div>
  
//       </form>
//           </div>
  
  
//       </div>
//     )
//   }
  
//   export default Login