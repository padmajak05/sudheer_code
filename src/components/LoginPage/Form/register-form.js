import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HttpClient from '../utils/httpClient';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import './style.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uvalue: '',
      lastValue: '',
      firstValue: '',
      pvalue: '',
      result: props.result,
      success: '',
      startDate: new Date()
    };

    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeResult = this.changeResult.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.change = this.change.bind(this);
  }

  onRegisterSubmit(event) {
    event.preventDefault();
    const formData = {
      firstname: this.state.firstValue,
      lastname: this.state.lastValue,
      username: this.state.uvalue,
      password: this.state.pvalue,
      male: this.state.male,
      female: this.state.female,
      Date: this.state.date,
      phone: this.state.phone,
      aadhar: this.state.aadhar
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

  change(e) {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  changeFirstName(event) {
    this.setState({ firstValue: event.target.value });
    
  }

  changeLastName(event) {
    this.setState({ lastValue: event.target.value });
  }

  changeUserName(event) {
    this.setState({ uvalue: event.target.value });
  }

  changePassword(event) {
    this.setState({ pvalue: event.target.value });
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }
  render() {
    return (
      <form className="register-form" onSubmit={this.props.registerPage ? this.onRegisterSubmit : this.onSubmit}>
        <div className="form-register-content">
          <div className="inline-class">
                <span><label className="name"  htmlFor="firstname">
                      Name
                </label></span>
          </div>
          <div className="inline-class">
              <input
                className="form-two-field-input"
                type="text"
                id="firstName"
                name="firstValue"
                value={this.firstValue}
                onChange={e => this.change(e)}
                placeholder="Type your First Name"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              /><br/>
              <label className="placeholder-name" htmlFor="firstname">
                  First Name
              </label>
            </div>
          <div className="inline-class">
              <input
                className="form-two-field-input"
                type="text"
                id="lastName"
                name="lastValue"
                value={this.lastValue}
                onChange={e => this.change(e)}
                placeholder="Type your Last Name"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              /><br/>
              <label className="placeholder-name" htmlFor="lastname">
                  Last Name
              </label>
          </div>
        </div>



        <div className="form-register-content">
        <div className="inline-class">
          <span><label className="name" >
                Gender
          </label></span>
        </div>
        <div className="inline-class radio-align">
              <input
                className="radio-button"
                type="radio"
                name="radio"
                id="male"
                value={this.male}
                onChange={this.changeUsername}
                
              /><br/>
              <label className="placeholder-name" htmlFor="lastname">
                  Male
              </label>
        </div>
        <div className="inline-class radio-align">
              <input
                className="radio-button"
                name="radio"
                type="radio"
                id="female"
                value={this.female}
                onChange={this.changeUsername}
                
              /><br/>
              <label className="placeholder-name" htmlFor="lastname">
                  Female
              </label>
        </div>
        </div>
        <div className="form-register-content">
        <div className="inline-class">
          <span><label className="name" >
                Date Of Birth
          </label></span>
        </div>
        <div className="inline-class">
              <DatePicker
                className="date-picker"
                type="date"
                id="date"
                selected={this.state.startDate}
                onChange={this.handleChange}

                
              /><br/>
              
        </div>
        </div>
        <div className="form-register-content">
        <div className="inline-class">
          <span><label className="name" >
                Phone Number
          </label></span>
        </div>
        <div className="inline-class">
              <input
                className="form-two-field-input"
                type="text"
                id="phone"
                value={this.state.phone}
                onChange={this.changeUsername}
                
              /><br/>
              
        </div>
        </div>
        <div className="form-register-content">
        <div className="inline-class">
          <span><label className="name" >
                Aadhar Number
          </label></span>
        </div>
        <div className="inline-class">
              <input
                className="form-two-field-input"
                type="text"
                id="aadhar"
                value={this.state.aadhar}
                onChange={this.changeUsername}
                
              /><br/>
              
        </div>
        </div>
        <div className="form-register-content">
        <div className="inline-class">
          <span><label className="name" >
                Place
          </label></span>
        </div>
        <div className="inline-class">
              <input
                className="form-two-field-input"
                type="text"
                id="place"
                value={this.state.aadhar}
                onChange={this.changeUsername}
                
              /><br/>
              
        </div>
        </div>
        <div className="form-register-content">
        <div className="inline-class">
          <span><label className="name" >
                Photo
          </label></span>
        </div>
        <div className="inline-class">
              <input
                className="photo-input"
                type="file"
                id="photo"
                value={this.state.aadhar}
                onChange={this.changeUsername}
                
              /><br/>
              
        </div>
        </div>
        <div className="form-register-content">
      
      <div className="inline-class">
            <span><label className="name"  htmlFor="firstname">
                  Father Name
            </label></span>
          </div>
      <div className="inline-class">
                <input
                  className="form-two-field-input"
                  type="text"
                  id="firstName"
                  value={this.first}
                  onChange={this.changeUsername}
                  placeholder="Type your First Name"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                /><br/>
                <label className="placeholder-name" htmlFor="firstname">
                    First Name
                </label>
          </div>
          <div className="inline-class">
                <input
                  className="form-two-field-input"
                  type="text"
                  id="lastName"
                  value={this.last}
                  onChange={this.changeUsername}
                  placeholder="Type your Last Name"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                /><br/>
                <label className="placeholder-name" htmlFor="lastname">
                    Last Name
                </label>
          </div>
          </div>
        <div className="form-register-content">
    
    <div className="inline-class">
          <span><label className="name"  htmlFor="firstname">
                Mother Name
          </label></span>
        </div>
    <div className="inline-class">
              <input
                className="form-two-field-input"
                type="text"
                id="firstName"
                value={this.first}
                onChange={this.changeUsername}
                placeholder="Type your First Name"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              /><br/>
              <label className="placeholder-name" htmlFor="firstname">
                  First Name
              </label>
        </div>
        <div className="inline-class">
              <input
                className="form-two-field-input"
                type="text"
                id="lastName"
                value={this.last}
                onChange={this.changeUsername}
                placeholder="Type your Last Name"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              /><br/>
              <label className="placeholder-name" htmlFor="lastname">
                  Last Name
              </label>
        </div>
        </div>
        <div className="form-register-content">
          <div className="inline-class">
            <span><label className="name"  htmlFor="firstname">
                  UserName
            </label></span>
          </div>
          <div className="inline-class">
                <input
                  className="form-two-field-input"
                  type="text"
                  id="firstName"
                  value={this.uvalue}
                  onChange={this.changeUserName}
                  placeholder="Type your First Name"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                /><br/>
            </div>
            </div>
        <div className="form-register-content">
        <div className="inline-class">
              <span><label className="name"  htmlFor="firstname">
                  Password
              </label></span>
            </div>
            <div className="inline-class">
                  <input
                    className="form-two-field-input"
                    type="text"
                    id="firstName"
                    value={this.pvalue}
                    onChange={this.changePassword}
                    placeholder="Type your First Name"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  /><br/>
            </div>
            </div>
        <div className="form-register-content">
              <div className="inline-class">
                  <span><label className="name"  htmlFor="firstname">
                        Confirm Password
                  </label></span>
                </div>
                <div className="inline-class">
                      <input
                        className="form-two-field-input"
                        type="text"
                        id="firstName"
                        value={this.first}
                        onChange={this.changeUsername}
                        placeholder="Type your First Name"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                      /><br/>
                  </div>
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
