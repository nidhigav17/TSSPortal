import  { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginPage=()=>{
    const [showPassword, setShowPassword] = useState(true);
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleOnchange = (e) => {
        const { name, value } = e.target
        setData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }
   
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return(
        <>
        <div className='container max-auto p-4'>
                <div className='bg-white p-4 w-full max-w-sm mx-auto'>
                    <div className=' text-5xl w-20 h-20 mx-auto'>

                        < FaUserCircle />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email :</label>
                            <div className="bg-slate-100 p-2">
                                <input type="email" name='email' required value={data.email} onChange={handleOnchange} placeholder='Enter email' className='w-full h-full outline-none bg-transparent' />
                            </div>

                        </div>
                        <div>
                            <label>Password :</label>
                            <div className="bg-slate-100 p-2 flex">
                                <input type={showPassword ? "text" : "password"} required placeholder='Enter password'  className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer' onClick={() => setShowPassword((pre) => !pre)}>
                                    <span>
                                        {showPassword ?
                                            (
                                                <FaEye />
                                            )
                                            :
                                            (
                                                <FaEyeSlash />
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-yellow-600'>
                                Forgot Password
                            </Link>
                        </div>

                        <button className='px-8 py-2 rounded-full font-bold bg-black text-white  hover:scale-105 mx-auto block mt-5'>Login</button>
                    </form>
                    <p className='my-5'>Don't have account ? <Link to={"/"} className='font-bold hover:underline'>Login with Google</Link></p>
                </div>

            </div>
        </>
    )
}
export default LoginPage;