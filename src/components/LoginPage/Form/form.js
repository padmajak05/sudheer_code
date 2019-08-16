import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HttpClient from '../utils/httpClient';
import './style.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uvalue: props.userLogged,
      pvalue: '',
      result: props.result,
      success: '',
      focus: false,
    };

    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeResult = this.changeResult.bind(this);
  }

  onRegisterSubmit(event) {
    event.preventDefault();
    const formData = {
      username: this.state.uvalue,
      password: this.state.pvalue
    };
    HttpClient.post({
      path: '/api/users/list',
      data: formData,
    }).then((res) => {
      this.setState({ result: true })
      this.changeResult(this.state.result);
    }).catch((error) => {
      this.setState({ result: 'userExists' })
      this.changeResult(this.state.result);
    });
  }

  changeResult(value) {
    this.props.onSuccessValue(value);
  }

  onSubmit(event) {
    event.preventDefault();
    const formData = {
      username: this.state.uvalue,
      password: this.state.pvalue
    };
    HttpClient.get({
      path: `/api/users/list/${formData.username}`,
      data: formData,
    }).then((res) => {
      if (res.data[0] !=undefined && res.data[0].username === formData.username && res.data[0].password === formData.password) {
        this.props.history.push('/about');
      }
    }).catch((error)=>{
        throw error;
    });
  }

  changeUsername(event) {
    this.setState({ uvalue: event.target.value });
  }

  changePassword(event) {
    this.setState({ pvalue: event.target.value });
  }
  
  render() {
    return (
      <form className="form" onSubmit={this.props.registerPage ? this.onRegisterSubmit : this.onSubmit}>
        <div className="form__field-wrapper">
        <label className="form__field-label" htmlFor="username">
            User Name
          </label>
          <input
            className="form__field-input"
            type="text"
            id="username"
            value={this.uvalue}
            onChange={this.changeUsername}
            placeholder="Type your User Name"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <span className="focus-input100" data-symbol=""></span>
        </div>
        <div className="form__field-wrapper">
        <label className="form__field-label" htmlFor="password">
            Password
          </label>
          <input
            className="form__field-input"
            id="password"
            type="password"
            value={this.state.pvalue}
            onChange={this.changePassword}
            placeholder="Type your Password"
          />
          <span className="focus-input100" data-symbol=""></span>
        </div>
        <div className="form__submit-btn-wrapper">
          <button className="form__submit-btn" type="submit">
            {this.props.btnText}
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
