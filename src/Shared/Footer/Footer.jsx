import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            
            <footer className="">
                <div className="bg-[#b4dfe5] my-footer">
                    <div className="footer p-10  text-black flex justify-between flex-col md:flex-row">
                        <div>
                            <Link to='/'>
                            <h1 className="btn btn-ghost text-xl">Quiz app</h1>
                            </Link>
                            <p className="pl-2">
                                Quiz Management Services
                                <br />
                                Providing reliable result since 2020
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold text-lg my-text">Services</span>
                                <a className="link link-hover">School</a>
                                <a className="link link-hover">College</a>
                                <a className="link link-hover">University</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold text-lg my-text">Menu</span>
                                <Link to="/" className="link link-hover">
                                    Home
                                </Link>
                                <Link to="/contact" className="link link-hover">
                                    Contact
                                </Link>
                                <Link to="/viewAll" className="link link-hover">
                                    All Result
                                </Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold text-lg my-text">Legal</span>
                                <a className="link link-hover">Terms of use</a>
                                <a className="link link-hover">Privacy policy</a>
                                <a className="link link-hover">Cookie policy</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                {/* <SocialIcon></SocialIcon> */}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="bg-[#303c6c] text-[#d2fdff] py-3 text-center">
                    © 2024 Quiz Management Services. <br /> Developed by Mohammad Amzadul Islam
                </p>
            </footer>
        </div>
    )
}

export default Footer;