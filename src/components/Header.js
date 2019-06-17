import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h2 className="display-4">Project quản lý thành viên bằng reactjs</h2>
          <p className="lead">với dữ liệu json</p>
          <hr className="my-2" />
        </div>
      </div>
    );
  }
}
