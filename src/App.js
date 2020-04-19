import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import {Link, Route, Redirect} from 'react-router-dom';
import './App.css';
import Auth from './Auth';
import Private from './Private';
import Public from './Public';
import Home from './Home';
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';



const PrivatLink = ({privatLink}) => {
  if(privatLink === true){
    return <Link className='navBar--link' to='/Private'>Private</Link>
  } else return null
}

const PrivatRoute = ({privatRoute}) => {
  if(privatRoute === true) {
    return <Route path='/Private' component={Private} />
  } else return null
}


class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({isAuthorized});
  };

  render() {
    const {isAuthorized} = this.state;
    return (
      <div>
        <nav className='navBar'>
          <Link className='navBar--link' to='/'>Home</Link>
          {/* <Link className='navBar--link' to='/Private'>Private</Link> */}
          <Link className='navBar--link' to='/Public'>Public</Link>
          <Link className='navBar--link' to='/Auth'>Authorize</Link>
          <PrivatLink privatLink={isAuthorized} />
        </nav>
        {/* <hr></hr> */}
        <div className='routContainer'>
          <Redirect from='*' to='/' />
          {/* <Redirect from='/Private' to='/Auth' /> */}
          <Route path='/' component={Home} exact />
          <Route path='/Public' component={Public} />
          <Route path='/Auth' component={Auth}></Route>
          <PrivatRoute privatRoute={isAuthorized}/>
        </div>
      </div>
    );
  }
}

export default App;
