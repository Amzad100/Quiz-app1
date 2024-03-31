// import { Link, useNavigate } from "react-router-dom";
// import ani from "./login.json";
// import Lottie from "lottie-react";
// import { useState } from "react";
// import LoginValidation from "./LoginValidation";




// const Login = () => {
//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     })

//     const navigate = useNavigate();

//     const [errors, setErrors] = useState({})
//     const handleInput = (event) => {
//         setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setErrors(LoginValidation(values));
//         if (errors.email === " " && errors.password === " ") {
//             axios.post('http://localhost:8081/login', values)
//                 .then(res => {
//                     if (res.data === "Success") {
//                         navigate('/');
//                     }else{
//                         alert("No record existed")
//                     }
//                 })
//                 .catch(err => console.log(err));
//         }
//     };


//     return (

//         <>
//             <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-3 py-3">
//                 <div className="flex justify-center items-center lg:py-[5%] px-[2%] md:w-1/2">
//                     <form action=""
//                         className="max-w-sm w-full text-center"
//                         onSubmit={handleSubmit}
//                     >
//                         <div className="form-control">
//                             <h1 className="text-3xl font-semibold text-center my-5 border-b-2 border-[#f4976c] py-2">
//                                 Login Now
//                             </h1>

//                             <div className="mb-3">
//                                 <label className="label">
//                                     <span className="label-text font-semibold">
//                                         *Enter Your Email
//                                     </span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     onChange={handleInput}
//                                     placeholder="Email"
//                                     name="email"
//                                     className="input input-bordered input-accent w-full"
//                                 />
//                                 {errors.email && <span className="text-danger">{errors.email}</span>}
//                             </div>

//                             <div className="mb-3">
//                                 <label className="label">
//                                     <span className="label-text font-semibold">
//                                         *Enter Your Password
//                                     </span>
//                                 </label>
//                                 <input
//                                     type="password"
//                                     onChange={handleInput}
//                                     name="password"
//                                     placeholder="Password"
//                                     className="input input-bordered input-accent w-full "
//                                 />
//                                 {errors.password && <span className="text-danger">{errors.password}</span>}
//                             </div>



//                             <div className="mt-4">
//                                 <p>
//                                     New User?{" "}
//                                     <Link to="/signup" className="font-semibold">
//                                         Sign Up
//                                     </Link>{" "}
//                                 </p>
//                             </div>

//                             <div className="text-center mt-[4%] bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
//                                 <button type='submit' className="my-btn text-black font-semibold">
//                                     Login
//                                 </button>
//                             </div>
//                             <div className="divider">Or Sign in With</div>
//                             <div className="flex justify-around items-center gap-2">
//                                 <div
//                                     // onClick={handleGoogleSignin}
//                                     className=" bg-green-400 px-5 py-3 rounded-md flex justify-center items-center"
//                                 >
//                                     {/* <FcGoogle className="text-xl"></FcGoogle> */}
//                                     <button className="text-white font-semibold">Google</button>
//                                 </div>
//                                 <div className=" bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
//                                     {/* <FaGithub className="text-xl text-black"></FaGithub> */}
//                                     <button className="text-black font-semibold">GitHub</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="md:w-1/2">
//                     <Lottie className="h-[400px] lg:h-[600px]" animationData={ani}></Lottie>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Login;


// ------------------
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";
import ani from "./login.json";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8081/login", values)
            .then((res) => {
                if (res.data === "Success") {
                    navigate("/");
                } else {
                    alert("No record existed");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-3 py-3">
                <div className="flex justify-center items-center lg:py-[5%] px-[2%] md:w-1/2">
                    <form
                        action=""
                        className="max-w-sm w-full text-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-control">
                            <h1 className="text-3xl font-semibold text-center my-5 border-b-2 border-[#f4976c] py-2">
                                Login Now
                            </h1>

                            <div className="mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold">
                                        *Enter Your Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    onChange={handleInput}
                                    placeholder="Email"
                                    name="email"
                                    className="input input-bordered input-accent w-full"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold">
                                        *Enter Your Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    onChange={handleInput}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered input-accent w-full "
                                />
                            </div>

                            <div className="mt-4">
                                <p>
                                    New User?{" "}
                                    <Link to="/signup" className="font-semibold">
                                        Sign Up
                                    </Link>{" "}
                                </p>
                            </div>

                            <div className="text-center mt-[4%] bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
                                <button type="submit" className="my-btn text-black font-semibold">
                                    Login
                                </button>
                            </div>
                            <div className="divider">Or Sign in With</div>
                            <div className="flex justify-around items-center gap-2">
                                <div className=" bg-green-400 px-5 py-3 rounded-md flex justify-center items-center">
                                    <button className="text-white font-semibold">Google</button>
                                </div>
                                <div className=" bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
                                    <button className="text-black font-semibold">GitHub</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2">
                    <Lottie className="h-[400px] lg:h-[600px]" animationData={ani}></Lottie>
                </div>
            </div>
        </>
    );
};

export default Login;

