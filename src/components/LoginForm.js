import React, { useState } from 'react';
import './LoginForm.css'; // Assuming you create a CSS file for styles

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your authentication logic here
        if (username === 'sumitpandey050198@gmail.com' && password === '123456789') {
            alert('Login successful!');
            // Redirect to another page or set authentication state here
        } else {
            setError('Invalid username or password');
        }
    };
    return (
        <div className="login-form">
            <div className="container-fluid bg-light">
                <div className="container">
                    <form className="row" onSubmit={handleSubmit}>
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
                                        value={username}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Email or phone number"
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-container">
                                    <input
                                        type="password"
                                        value={password}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {error && <p className="error">{error}</p>}

                                <button
                                    type="submit"
                                    className="btn btn-primary login-button">
                                    Login
                                </button>
                                <div className="mt-3 form-check">
                                    <a href="/">Forget Password</a>
                                </div>
                                <hr className="mt-3 divider" />
                                <div className="mb-4 create-account-button d-flex justify-content-center" style={{ background: '#42B72A', cursor: 'pointer' }}>
                                    <p className="text-white mt-2 justify-content-cente align-items-center"> create account button</p>
                                </div>
                                {/* <button className="btn text-white mb-4 create-account-button" style={{ background: '#42B72A' }}> create-account-button</button> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Implement your authentication logic here
//         if (username === 'admin' && password === 'password') {
//             alert('Login successful!');
//             // Redirect to another page or set authentication state here
//         } else {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 {error && <p className="error">{error}</p>}
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
