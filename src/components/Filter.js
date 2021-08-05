import { connect } from "react-redux";
import * as actions from '../redux/contacts/contacts-actions';
import * as selectors from '../redux/contacts/contacts-selectors';


const Filter = ({value, onChange}) => {

    return (
        <div className="Filter-container">
            <h3>Find contact by name</h3>
            <label>
                <input
                    className="Filter-input"
                    name="search"
                    type="text"
                    value={value}
                    onChange={onChange}
                ></input>
            </label>
        </div>
    )
};

const mapStateToProps = (state) => ({
    value: selectors.getFilter(state)
});

const mapDispatchToProps = dispatch => ({
    onChange: (evt) => dispatch(actions.filterContact(evt.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);