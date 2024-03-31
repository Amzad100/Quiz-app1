// import Lottie from "lottie-react";
// import { Link, useNavigate } from "react-router-dom";
// import ani from './signup.json'
// import { useState } from "react";
// import SignUpValidation from "./SignUpValidation";
// import axios from "axios";


// const Signup = () => {
//     const [values, setValues] = useState({
//         email: '',
//         password: '',
//         name: ''
//     })

//     const navigate = useNavigate();

//     const [errors, setErrors] = useState({})
//     const handleInput = (event) => {
//         setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setErrors(SignUpValidation(values));
//         if (errors.email === " " && errors.password === " " && errors.name === " " ) {
//             axios.post('http://localhost:8081/signup', values)
//                 .then(res => { 
//                     navigate('/login');
//                  })
//                 .catch(err => console.log(err));
//         }
//     };
//     return (

//         <>
//             <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3 py-5">
//                 <div className="">
//                     <Lottie className="lg:h-[600px]" animationData={ani}></Lottie>
//                 </div>
//                 <div className="flex justify-center items-center lg:py-[5%]">
//                     <form className="max-w-sm w-full text-center"
//                         onSubmit={handleSubmit}
//                     >
//                         <div className="form-control">
//                             <h1 className="text-3xl font-semibold text-center my-5 border-b-2 pb-2 border-[#f4976c]">Registration Now</h1>
//                             <label className="label">
//                                 <span className="label-text font-semibold">*Enter Your Email</span>
//                             </label>
//                             <input type="text" placeholder="Email" name="email"
//                                 onChange={handleInput}
//                                 className="input input-bordered input-accent w-full"
//                             />
//                             {errors.email && <span className="text-danger">{errors.email}</span>}


//                             <label className="label">
//                                 <span className="label-text font-semibold">*Choose Password</span>
//                             </label>
//                             <input type="password" placeholder="Password" name="password"
//                                 onChange={handleInput}
//                                 className="input input-bordered input-accent w-full " />
//                             {errors.password && <span className="text-danger">{errors.password}</span>}


//                             <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
//                                 <div className="form-control w-full ">
//                                     <label className="label">
//                                         <span className="label-text font-semibold">*Enter Your Name</span>
//                                     </label>
//                                     <input type="text" placeholder="Name" name="name"
//                                         onChange={handleInput}
//                                         className="input input-bordered input-accent w-full" />
//                                     {errors.name && <span className="text-danger">{errors.name}</span>}
//                                 </div>

//                                 {/* <div className="form-control w-full ">
//                                     <label className="label">
//                                         <span className="label-text font-semibold">*Class Roll</span>
//                                     </label>
//                                     <input type="number" placeholder="Roll" name="roll"
//                                         onChange={handleInput}
//                                         className="input input-bordered input-accent w-full" />
//                                     {errors.roll && <span className="text-danger">{errors.roll}</span>}
//                                 </div> */}
//                             </div>

//                             <div className="text-center mt-[4%] bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
//                                 <button type="submit" className="my-btn">Sign Up</button>
//                             </div>

//                             <div className="mt-4">
//                                 <p>
//                                     Already have an account?{" "}
//                                     <Link to="/login" className="font-semibold">
//                                         Login
//                                     </Link>{" "}
//                                 </p>
//                             </div>
//                         </div>

//                     </form>

//                 </div>

//             </div>
//         </>
//     )
// }

// export default Signup;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Lottie from "lottie-react";
// import ani from "./signup.json";
// -----------------------
// const Signup = () => {
//     const [values, setValues] = useState({
//         email: "",
//         password: "",
//         name: "",
//     });

//     const navigate = useNavigate();

//     const handleInput = (event) => {
//         setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios
//             .post("http://localhost:8081/signup", values)
//             .then((res) => {
//                 navigate("/login");
//             })
//             .catch((err) => console.log(err));
//     };

//     return (
//         <>
//             <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3 py-5">
//                 <div className="">
//                     <Lottie className="lg:h-[600px]" animationData={ani}></Lottie>
//                 </div>
//                 <div className="flex justify-center items-center lg:py-[5%]">
//                     <form
//                         className="max-w-sm w-full text-center"
//                         onSubmit={handleSubmit}
//                     >
//                         <div className="form-control">
//                             <h1 className="text-3xl font-semibold text-center my-5 border-b-2 pb-2 border-[#f4976c]">
//                                 Registration Now
//                             </h1>
//                             <label className="label">
//                                 <span className="label-text font-semibold">
//                                     *Enter Your Email
//                                 </span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Email"
//                                 name="email"
//                                 onChange={handleInput}
//                                 className="input input-bordered input-accent w-full"
//                             />

//                             <label className="label">
//                                 <span className="label-text font-semibold">
//                                     *Choose Password
//                                 </span>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 name="password"
//                                 onChange={handleInput}
//                                 className="input input-bordered input-accent w-full "
//                             />

//                             <div className="flex flex-col md:flex-row justify-center items-center gap-5">
//                                 <div className="form-control w-full ">
//                                     <label className="label">
//                                         <span className="label-text font-semibold">
//                                             *Enter Your Name
//                                         </span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="Name"
//                                         name="name"
//                                         onChange={handleInput}
//                                         className="input input-bordered input-accent w-full"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="text-center mt-[4%] bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
//                                 <button type="submit" className="my-btn">
//                                     Sign Up
//                                 </button>
//                             </div>

//                             <div className="mt-4">
//                                 <p>
//                                     Already have an account?{" "}
//                                     <Link to="/login" className="font-semibold">
//                                         Login
//                                     </Link>{" "}
//                                 </p>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Signup;
// -----------------------


import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import ani from "./signup.json";

const Signup = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        name: "",
    });

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8081/signup", values)
            .then((res) => {
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3 py-5">
                <div className="">
                    <Lottie className="lg:h-[600px]" animationData={ani}></Lottie>
                </div>
                <div className="flex justify-center items-center lg:py-[5%]">
                    <form
                        className="max-w-sm w-full text-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-control">
                            <h1 className="text-3xl font-semibold text-center my-5 border-b-2 pb-2 border-[#f4976c]">
                                Registration Now
                            </h1>
                            <label className="label">
                                <span className="label-text font-semibold">
                                    *Enter Your Email
                                </span>
                            </label>
                            <input
                                type="text"
                                onChange={handleInput}
                                placeholder="Email"
                                name="email"
                                className="input input-bordered input-accent w-full"
                            />

                            <label className="label">
                                <span className="label-text font-semibold">
                                    *Choose Password
                                </span>
                            </label>
                            <input
                                type="password"
                                onChange={handleInput}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered input-accent w-full "
                            />

                            <div className="mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold">
                                        *Enter Your Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    onChange={handleInput}
                                    placeholder="Name"
                                    name="name"
                                    className="input input-bordered input-accent w-full"
                                />
                            </div>

                            

                            <div className="text-center mt-[4%] bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
                                <button type="submit" className="my-btn">
                                    Sign Up
                                </button>
                            </div>

                            <div className="mt-4">
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login" className="font-semibold">
                                        Login
                                    </Link>{" "}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
