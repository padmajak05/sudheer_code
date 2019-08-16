import React, { Component } from 'react';
const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <a onClick={() => { props.history.push('/about') }}>goto about</a>
    </div>)
}
export default Home;