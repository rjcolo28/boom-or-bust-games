import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Modal from 'react-awesome-modal';
import "./style.css";


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Logo
            </a>
            <form action="" method="post">
              <div className="input-field">
                <input id="search" type="search" name="search"></input>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/signup">
                  Sign Up
                </a>
              </li>
              <li>
                <a value="Open" onClick={() => this.openModal()} >Log In</a>
              </li>
            </ul>
          </div>
        </nav>
        <Modal visible={this.state.visible}
          width="450"
          height="400"
          effect="fadeInDown"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <div className="row" id="form">
            <div className="col s1"></div>
              <form className="col s10">
                <div className="row">
                  <h1>Log In</h1>
                  <div className="input-field col s12">
                    <input id="first_name" type="text" className="validate"></input>
                    <label htmlFor="first_name">Username</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate"></input>
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Log In
                  <i className="material-icons right">send</i>
                </button>
                <button className="btn red" type="submit" name="action" href="javascript:void(0);" onClick={() => this.closeModal()}>close
                  <i className="material-icons right">close</i>
                </button>
              </form>
            </div>

          </div>
        </Modal>
      </div>

    );
  }
}

export default Nav;