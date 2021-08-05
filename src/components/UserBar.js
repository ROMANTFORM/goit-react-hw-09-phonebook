
// function UserBar() {
//     return (
//         <div>
//             <h2>UserBar</h2>
//         </div>
//     );
// };

// export default UserBar;

import { connect } from 'react-redux';
import * as authSelector from "../redux/auth/auth-selectors";
import * as authOperation from "../redux/auth/auth-operations";
import defaultAvatar from '../images/default-avatar.webp';

const UserBar = ({avatar, name, onLogout}) => {
    return (
        <div className="Nav-Container__right" >
            <img src={avatar} alt={name} width="32" />
            <span className="Span" >Hi, {name}</span>
            <button type="button" className="logout-btn" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    name: authSelector.getUserName(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogout: authOperation.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);