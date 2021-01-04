import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4 text-center">Quản lý Nhân Viên</h1>
              <p className="lead text-center display-4 ">với Reactjs</p>
              <hr className="my-4" />
            </div>
        </div>
        );
    }
}

export default Header;