import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {push} from 'react-router-redux';
import t from 'tcomb-form';
import PropTypes from 'prop-types';
import logo from '../../images/Beuth-Logo_basis.png';

import * as actionCreators from '../../actions/auth';

const Form = t.form.Form;

const Login = t.struct({
    email: t.String,
    password: t.String
});

const LoginFormOptions = {
    auto: 'placeholders',
    fields: {
        password: {
            type: 'password'
        }
    }
};

class LoginView extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        isAuthenticating: PropTypes.bool.isRequired,
        statusText: PropTypes.string,
        actions: PropTypes.shape({
            authLoginUser: PropTypes.func.isRequired
        }).isRequired,
        location: PropTypes.shape({
            search: PropTypes.string.isRequired
        })
    };

    static defaultProps = {
        statusText: '',
        location: null
    };

    constructor(props) {
        super(props);

        const redirectRoute = this.props.location ? this.extractRedirect(this.props.location.search) || '/' : '/';
        this.state = {
            formValues: {
                email: '',
                password: ''
            },
            redirectTo: redirectRoute
        };
    }

    componentWillMount() {
        if (this.props.isAuthenticated) {
            this.props.dispatch(push('/'));
        }
    }

    onFormChange = (value) => {
        this.setState({formValues: value});
    };

    extractRedirect = (string) => {
        const match = string.match(/next=(.*)/);
        return match ? match[1] : '/';
    };

    login = (e) => {
        e.preventDefault();
        const value = this.loginForm.getValue();
        if (value) {
            this.props.actions.authLoginUser(value.email, value.password, this.state.redirectTo);
        }
    };

    render() {
        let statusText = null;
        if (this.props.statusText) {
            const statusTextClassNames = classNames({
                'alert': true,
                'alert-danger': this.props.statusText.indexOf('Authentication Error') === 0,
                'alert-success': this.props.statusText.indexOf('Authentication Error') !== 0
            });

            statusText = (
                <div className="row">
                    <div className="col-sm-12">
                        <div className={statusTextClassNames}>
                            {this.props.statusText}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="container login">

                <div className="login-container margin-top-medium">
                    <h1 className="text-center"><img src={logo} alt="Logo Beuth Hochschule"/></h1>
                    {statusText}
                    <form onSubmit={this.login}>
                        <Form ref={(ref) => {
                            this.loginForm = ref;
                        }}
                              type={Login}
                              options={LoginFormOptions}
                              value={this.state.formValues}
                              onChange={this.onFormChange}
                        />
                        <a href="#">Passwort vergessen?</a>
                        <button disabled={this.props.isAuthenticating}
                                type="submit"
                                className="btn btn-primary pull-right"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isAuthenticating: state.auth.isAuthenticating,
        statusText: state.auth.statusText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
export {LoginView as LoginViewNotConnected};
