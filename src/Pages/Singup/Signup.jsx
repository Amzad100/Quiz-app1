import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import ani from './signup.json'

const Signup = () => {
    return (
        
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3 py-5">
                <div className="">
                    <Lottie className="lg:h-[600px]" animationData={ani}></Lottie>
                </div>
                <div className="flex justify-center items-center lg:py-[5%]">
                    <form className="max-w-sm w-full text-center"
                    // onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="form-control">
                            <h1 className="text-3xl font-semibold text-center my-5 border-b-2 pb-2 border-[#f4976c]">Registration Now</h1>
                            <label className="label">
                                <span className="label-text font-semibold">*Enter Your Email</span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered input-accent w-full"

                            />


                            <label className="label">
                                <span className="label-text font-semibold">*Choose Password</span>
                            </label>
                            <input type="password" placeholder="Password"
                                className="input input-bordered input-accent w-full " />

                            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text font-semibold">*Enter Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Name"
                                        className="input input-bordered input-accent w-full" />
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text font-semibold">*Class Roll</span>
                                    </label>
                                    <input type="number" placeholder="Roll"
                                        className="input input-bordered input-accent w-full" />
                                </div>
                            </div>



                            <div className="text-center mt-[4%] bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
                                <button type="submit" className="my-btn">Create</button>
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
    )
}

export default Signup;