import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Properties from './components/properties';
import LoginModal from './components/loginModal';
import MyAccountModal from './components/myAccountModal';
import { connect } from 'react-redux';
import { createAccount, signIn } from './actions/accountActions'

class Propertyzoom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginOpen: false,
      isLoginLoading: false,
      myAccountOpen: false

    }
  }

  componentDidUpdate(prevProps) {
    if(this.state.isLoginLoading && (prevProps.userId != this.props.userId)) {
      this.setState({loginOpen: false, isLoginLoading: false})
    }

    if(this.state.isLoginLoading && (prevProps.error != this.props.error)) {
      this.setState({isLoginLoading: false})
    }

  }

  launchLoginModal = () => {
    this.setState({loginOpen: true})
  }

  launchMyAccount = () => {
    this.setState({myAccountOpen: true})
  }

  closeLoginModal = () => {
    this.setState({loginOpen: false})
  }

  loginOrCreateAccount = (type, userInfo) => {

    if(type == "login"){
      const { email, password } = userInfo;
      this.setState({isLoginLoading: true}, () => {
        this.props.signIn(email, password)
      });
    }

    else if(type == "createAccount") {
      const { fname, lname, username, password, maximumRent, email, accountType } = userInfo;
      this.setState({isLoginLoading: true}, () => {
        this.props.createAccount(fname, lname, username, password, maximumRent, email, accountType)
      });
    }
  }

  render() {
    return (
      <div>
        <Header userId={this.props.userId} launchMyAccount={this.launchMyAccount} login={this.launchLoginModal} />
        <LoginModal isLoading={this.state.isLoginLoading} loginErrorMessage={this.props.error} onSubmit={this.loginOrCreateAccount} onClose={this.closeLoginModal} open={this.state.loginOpen}/>
        <MyAccountModal/>
        <Properties/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userInfo.userId,
    error: state.userInfo.error,
    fname: state.userInfo.fname,
    lname: state.userInfo.lname,
    username: state.userInfo.username,
    maximumRent: state.userInfo.maximumRent,
    email: state.userInfo.email,
    accountType: state.userInfo.accountType
  }
};

const mapDispatchToProps = dispatch => ({
   createAccount: (fname, lname, username, password, maximumRent, email, accountType) => dispatch(createAccount(fname, lname, username, password, maximumRent, email, accountType)),
   signIn: (email, password) => dispatch(signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Propertyzoom);
