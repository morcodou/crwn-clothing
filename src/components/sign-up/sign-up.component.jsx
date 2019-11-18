import React from 'react';
import { connect } from 'react-redux';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { signUpStart } from './../../redux/user/user.actions';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`Password don't match`);
      return;
    }
    const { signUpStart } = this.props;
    signUpStart({ email, password, displayName });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span> Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className='sign-up-form'>
          <FormInput
            name='displayName'
            type='text'
            value={displayName}
            required
            handleChange={this.handleChange}
            label='Display Name'
          />

          <FormInput
            name='email'
            type='email'
            value={email}
            required
            handleChange={this.handleChange}
            label='Email'
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            required
            handleChange={this.handleChange}
            label='Password'
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            required
            handleChange={this.handleChange}
            label='Confirm Password'
          />

          <div className='buttons'>
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
