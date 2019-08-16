import React from 'react';
import './style.scss';
import Form from './Form/form';

const data = {
  loginTitle: 'Login',
  registerTitle: 'Register',
  username: 'User Name',
  password: 'Password',
  formBtnText: 'LOGIN',
  registerBtnText: 'SIGNUP',
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged: ''
    }
  }

  render() {
    const btnText = this.props.id === 'login' ? data.formBtnText : data.registerBtnText;
    return (
      <div className="form-page__wrapper">
      <div className="form-page__form-header">
          <h2 className="form-page__form-heading">
            {data.loginTitle}
          </h2>
        <Form data={data} btnText={data.formBtnText} loginPage {...this.props} userLogged />
       
        <div className="signup">
          <p>Sign Up Using</p>
          <a href="/register">SIGNUP</a>
        </div>
        
      </div>
    </div>
    )
  }
}

export default Login;
