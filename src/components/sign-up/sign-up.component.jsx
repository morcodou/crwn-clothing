import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { signUpStart } from './../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`Password don't match`);
      return;
    }
    signUpStart({ email, password, displayName });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span> Sign up with your email and password</span>

      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          required
          handleChange={handleChange}
          label='Display Name'
        />

        <FormInput
          name='email'
          type='email'
          value={email}
          required
          handleChange={handleChange}
          label='Email'
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          required
          handleChange={handleChange}
          label='Password'
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          required
          handleChange={handleChange}
          label='Confirm Password'
        />

        <div className='buttons'>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
