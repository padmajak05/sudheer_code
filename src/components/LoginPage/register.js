import React from 'react';
import './register-style.scss';
import Form from './Form/register-form';
let value;
const data = {
  loginTitle: 'Login',
  registerTitle: 'Add User',
  username: 'User Name',
  password: 'Password',
  formBtnText: 'Register',
  registerBtnText: 'Register',
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: ''
    }
  }

  onSuccess(res) {
    this.setState({result: res})
  }

  render() {
    if(this.state.result === true) {
      value = 'Registered Succesully';
    } else if (this.state.result === 'userExists') {
      value = 'User Alredy Exists';
    } else if (this.state.result === true) {
        value = 'Server Error';
    }
    return (
         <div className="form-page-register-wrapper">
          <div className="form-page-register-wrapper">
            <div className="form-page-register-layout">
              <div className="form-page-register-header">
                 <h2 className="form-page-register-heading">
                 {data.registerTitle}
                </h2>
              </div>
              <Form data={data} 
                btnText={data.registerBtnText} 
                registerPage 
                onSuccessValue = {this.onSuccess.bind(this)} 
                result = {this.state.result} {...this.props} />
            </div>
          </div>
         </div>
          
    )
  }
}

export default Login;
