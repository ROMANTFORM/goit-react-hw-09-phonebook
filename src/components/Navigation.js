import { NavLink } from 'react-router-dom';
import AuthBar from './AuthBar';
import UserBar from './UserBar';
import * as authSelectors from "../redux/auth/auth-selectors";
import { useSelector } from 'react-redux';

function Navigation() {

    const isAuthenticated = useSelector(authSelectors.getAuthenticated)
    return (
        <nav className="Nav-wrap">
            <div className="Nav-menu">
                <NavLink exact to="/" className="link" activeClassName="active-link">Home</NavLink>
                <NavLink to="/contacts" className="link" activeClassName="active-link">Contacts</NavLink>
                 
            </div>
            <div className="User-menu">
                {isAuthenticated ? <UserBar /> : <AuthBar/>}
                {/* <AuthBar/> */}
            </div>
        </nav>
    );
};

export default Navigation;