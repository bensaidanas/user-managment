import { Link } from "react-router-dom";


const Signup = () => {
    const onSubmit = (ev) => {
        ev.preventDefault();
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Sign up for free </h1>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Already have an account? <Link to="/login">Sing in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup