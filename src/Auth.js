import React, {Component} from 'react';
import {authorizeUser} from './AuthorizeApi'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkError: null,
      email: '',
      password: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    if(email && password) {
      const authorizeResult = authorizeUser(email,password);
      this.setState({
        ...this.state,
        checkError: !authorizeResult
      })
    }
  }
  handleChange = ({target}) => {
    const name = target.getAttribute('name');
    this.setState({
      ...this.state,
      [name]: target.value,
    })
  }
  errorRender = ({checkError}) => {
    if(checkError === true) {
      return <p className='error'>test</p>
    } else return null
  }
  render() {
    const {email, password, checkError} = this.state;
    return (
      <div className='auth'>
        <form className='auth--form' onSubmit={this.handleSubmit}>
          <input
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={email}
            className='auth--input'
            onChange={this.handleChange}
            name='email'
          />
          <input
            required
            pattern=".{3,}"
            value={password}
            type='password'
            className='auth--input'
            onChange={this.handleChange}
            name='password'
          />
          {this.errorRender({checkError})}
          <button 
            type="submit"
            className='auth--btn'
          >
            Accept
          </button>
        </form>
      </div>
    );
  }
}

export default Auth;
