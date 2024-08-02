import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import  { useState } from 'react';
import useSignup from "../../hooks/useSignup"



const SignUp = () => {
const [inputs,setInputs]=useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: '',
});

const {loading ,signup }= useSignup();
const handleGender=(gender) => {
    setInputs({...inputs,gender})
}
const handleSubmit=async (e) => {
    e.preventDefault();
    await signup(inputs);
}



  return (
    <div className="felx flex-col items-center justify-center mx-auto min-w-96">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backgrop-filter bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Sign Up
    <span className='text-yellow-500'> ChatApp</span>

        </h1>



        <form action="" onSubmit={handleSubmit}>
        <div>
            <label className='label p-2 '> 
                <span className='text-base label-text text-white'>Fullname</span>
            </label>
            <input type="text" name="" id=""  placeholder='Enter Fullname' className='w-full input input-bordered h-10'
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs,fullName:e.target.value})}
            />
        </div>
        <div>
            <label className='label p-2 '> 
                <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" name="" id=""  placeholder='Enter Username' className='w-full input input-bordered h-10'
            value={inputs.userName}
            onChange={(e) => setInputs({...inputs,userName:e.target.value})}/>
        </div>
        <div>
            <label className='label p-2 ' > 
                <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type="password" name="" id=""  placeholder='Enter Password' className='w-full input input-bordered h-10'
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,password:e.target.value})}/>
        </div>
        <div>
            <label className='label p-2 ' > 
                <span className='text-base label-text text-white'>Confirm Password</span>
            </label>
            <input type="password" name="" id=""  placeholder='Re-Enter Password' className='w-full input input-bordered h-10'
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
            />
        </div>
<GenderCheckBox  onCheckboxChange={handleGender} selectedGender={inputs.gender}/>

        <Link to='/login' className='text-sm hover:underline hover:text-blue-200 mt-2 inline-block text-gray-300'>Already Have An Account? </Link>
        <div>
            <button type="submit" className='btn btn-block btn-sm mt-2'
            disabled={loading}
            >    
              {loading ?(
                <span className="loading loading-spinner" ></span>
              ):(
                "Sign Up"
              )}

            </button>
            </div>
        </form>
        </div>

    </div>
  )
}

export default SignUp


//Started Code
// import GenderCheckBox from "./GenderCheckBox"


// const signUp = () => {
//   return (
//     <div className="felx flex-col items-center justify-center mx-auto min-w-96">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backgrop-filter bg-opacity-0">
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//         Login
//     <span className='text-yellow-500'> ChatApp</span>

//         </h1>



//         <form action="">
//         <div>
//             <label className='label p-2 '> 
//                 <span className='text-base label-text text-white'>Fullname</span>
//             </label>
//             <input type="text" name="" id=""  placeholder='Enter Fullname' className='w-full input input-bordered h-10'/>
//         </div>
//         <div>
//             <label className='label p-2 '> 
//                 <span className='text-base label-text text-white'>Username</span>
//             </label>
//             <input type="text" name="" id=""  placeholder='Enter Username' className='w-full input input-bordered h-10'/>
//         </div>
//         <div>
//             <label className='label p-2 ' > 
//                 <span className='text-base label-text text-white'>Password</span>
//             </label>
//             <input type="password" name="" id=""  placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//         </div>
//         <div>
//             <label className='label p-2 ' > 
//                 <span className='text-base label-text text-white'>Confirm Password</span>
//             </label>
//             <input type="password" name="" id=""  placeholder='Re-Enter Password' className='w-full input input-bordered h-10'/>
//         </div>
// <GenderCheckBox />

//         <a href='#' className='text-sm hover:underline hover:text-blue-200 mt-2 inline-block text-gray-300'>Already Have An Account? </a>
//         <div>
//             <button className='btn btn-block btn-sm mt-2'>Sign Up

//             </button>
//             </div>
//         </form>
//         </div>

//     </div>
//   )
// }

// export default signUp