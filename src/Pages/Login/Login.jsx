import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="card flex-shrink-0 my-5 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center mt-5">Login</h1>
                    <form>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center'>Do you new Quiz app? <Link className='text-orange-500 font-bold' to='/signup'> SignUP</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;