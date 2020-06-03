import React from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

//import './style.scss';

class ProfileView extends React.Component {
    static propTypes = {
        statusText: PropTypes.string,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
        statusText: '',
        userName: ''
    };

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    render() {
        return (
            <div className="container">
                <h2>Profil bearbeiten</h2>
                <form>
                    <div className="row flex-row align-center">
                        <div className="form-group col-sm-3">
                            <img src="https://via.placeholder.com/150" alt="ProfilePic"
                                 className="img-responsive img-circle"/>
                        </div>
                        <div className="form-group col-sm-9">
                            <input type="file" id="imageUpload" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <input type="text" placeholder="Vorname" className="form-control" disabled/>
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="text" placeholder="Nachname" className="form-control" disabled/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="email" placeholder="E-Mail" className="form-control" disabled/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="date" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <input type="text" placeholder="Straße & Hausnummer" className="form-control"/>
                        </div>
                        <div className="form-group col-sm-2">
                            <input type="number" maxLength="5" placeholder="PLZ" className="form-control"/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" placeholder="Ort" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="text" placeholder="Hobbies" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="text" placeholder="Twitter" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="text" placeholder="Facebook" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="text" placeholder="Instagram" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="text" placeholder="XING" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="text" placeholder="LinkedIn" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="text" placeholder="YouTube" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="text" placeholder="Twitch" className="form-control"/>
                        </div>
                    </div>
                    <button className="btn btn-primary pull-right">Speichern</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default connect(mapStateToProps)(ProfileView);
export {ProfileView as ProfileView};
