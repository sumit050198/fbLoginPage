import React from 'react';
import './LoginForm.css'; // Assuming you create a CSS file for styles

const LoginForm = () => {
    return (
        <div className="login-form">
            <div className="container-fluid bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5 d-flex flex-row justify-content-between">
                            <div className="left-col col-md-6 my-5">
                                <h2 className="text-primary">facebook</h2>
                                <p className="font-weight-medium">
                                    Connect with friends and the world <br /> around you on Facebook.
                                </p>
                            </div>
                            <div className="card shadow d-flex flex-column justify-content-center align-items-center">
                                <div className="mt-4 input-container">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Email or phone number" 
                                    />
                                </div>
                                <div className="input-container">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="exampleInputPassword1" 
                                        placeholder="Password" 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary login-button">
                                    Login
                                </button>
                                <div className="mt-3 form-check">
                                    <a href="/">Forget Password</a>
                                </div>
                                <hr className="mt-3 divider" />
                                <button 
                                    type="submit" 
                                    className="btn text-white mt-2 mb-4 create-account-button">
                                    Create new account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;


{/* <footer className="container-fluid bg-white">
                <div className="footer-langs container d-flex flex-column mt-5" style={{ fontSize: 12 }}>
                    <ol className="d-flex flex-row justify-content-center align-items-center mt-5">
                        <li>English (UK)</li>
                        <li className="mx-4"><a href="/">मराठी</a></li>
                        <li className="mx-4"><a href="/">हिन्दी</a></li>
                        <li className="mx-4"><a href="/">اردو</a></li>
                        <li className="mx-4"><a href="/">ગુજરાતી</a></li>
                        <li className="mx-4"><a href="/">ಕನ್ನಡ</a></li>
                        <li className="mx-4"><a href="/">ਪੰਜਾਬੀ</a></li>
                        <li className="mx-4"><a href="/">தமிழ்</a></li>
                        <li className="mx-4"><a href="/">বাংলা</a></li>
                        <li className="mx-4"><a href="/">తెలుగు</a></li>
                        <li className="mx-4"><a href="/">മലയാളം</a></li>
                        <li><button>+</button></li>
                    </ol>
                    <ol className="d-flex flex-row align-items-center">
                        <li><a href="/">Sign Up</a></li>
                        <li className="mx-4"><a href="/">Log In</a></li>
                        <li className="mx-4"><a href="/">Messenger</a></li>
                        <li className="mx-4"><a href="/">Facebook Lite</a></li>
                        <li className="mx-4"><a href="/">Video</a></li>
                        <li className="mx-4"><a href="/">Places</a></li>
                        <li className="mx-4"><a href="/">Games</a></li>
                        <li className="mx-4"><a href="/">Marketplace</a></li>
                        <li className="mx-4"><a href="/">Meta Pay</a></li>
                        <li className="mx-4"><a href="/">Meta Store</a></li>
                        <li className="mx-4"><a href="/">Meta Quest</a></li>
                        <li className="mx-4"><a href="/">Imagine with Meta AI</a></li>
                        <li className="mx-4"><a href="/">Instagram</a></li>
                        <li className="mx-4"><a href="/">Threads</a></li>
                        <li className="mx-4"><a href="/">Fundraisers</a></li>
                        <li className="mx-4"><a href="/">Services</a></li>
                        <li className="mx-4"><a href="/">Voting Information Centre</a></li>
                        <li className="mx-4"><a href="/">Privacy Policy</a></li>
                        <li className="mx-4"><a href="/">Privacy Centre</a></li>
                        <li className="mx-4"><a href="/">Groups</a></li>
                        <li className="mx-4"><a href="/">About</a></li>
                        <li className="mx-4"><a href="/">Create ad</a></li>
                        <li className="mx-4"><a href="/">Create Page</a></li>
                        <li className="mx-4"><a href="/">Developers</a></li>
                        <li className="mx-4"><a href="/">Careers</a></li>
                        <li className="mx-4"><a href="/">Cookies</a></li>
                        <li className="mx-4"><a href="/">AdChoices</a></li>
                        <li className="mx-4"><a href="/">Terms</a></li>
                        <li className="mx-4"><a href="/">Help</a></li>
                        <li className="mx-4"><a href="/">Contact uploading and non-users</a></li>
                    </ol>
                    <small>Meta © 2024</small>
                </div>
            </footer> */}

