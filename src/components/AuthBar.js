import { NavLink } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";


function AuthBar() {
    return (
        <div className="Auth-wrap">
            <NavLink to="/login" className="link" activeClassName="active-link">Log In</NavLink>
            <NavLink to="/signup" className="link" activeClassName="active-link">Sign up</NavLink>
        </div>
    );
};

export default AuthBar;