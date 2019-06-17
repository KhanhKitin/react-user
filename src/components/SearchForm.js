import React, { Component } from "react";
import EditUser from "./EditUser";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      // objectUser: {}
    };
  }

  getUserInfo = (info) => {
    // this.setState({
    //   objectUser: info
    // });
    this.props.getUserInfoApp(info);
  }

  ischange = event => {
    console.log(event.target.value);
    this.setState({
      searchText: event.target.value
    });
    this.props.checkConnectProps(this.state.searchText);
  };

  showEditUser = () => {
    if(this.props.editStatus === true){
      return <EditUser 
              getUserInfo = {(info) => this.getUserInfo(info)}
              changeEditStatus={() => this.props.changeEditStatus()} 
              editUserObject = {this.props.editUserObject}
              />
    }
  }

  showButton = () => {
    if (this.props.status === true) {
      return (
        <div
          className="btn btn-block btn-outline-secondary mb-2"
          onClick={() => this.props.check()}
        >
          Đóng lại
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-outline-primary"
          onClick={() => this.props.check()}
        >
          Thêm mới
        </div>
      );
    }
  };
  render() {
    return (
      <div className="col-12">
        {this.showEditUser()}
        <div className="form-group" style={{ width: "100%" }}>
          <div className="btn-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa"
              onChange={event => this.ischange(event)}
              style={{ width: "1060px" }}
            />
            <div
              className="btn btn-info"
              onClick={dl =>
                this.props.checkConnectProps(this.state.searchText)
              }
            >
              Tìm
            </div>
          </div>
        </div>
        {this.showButton()}
        <hr />
      </div>
    );
  }
}
