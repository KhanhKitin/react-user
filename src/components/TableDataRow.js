import React, { Component } from "react";

export default class TableDataRow extends Component {

    ResultPermission = () => {
        let permission;
        if(Number(this.props.data.permission) === 0){
            permission = "Admin";
        }
        else if(Number(this.props.data.permission) === 1){
            permission = "Modrater";
        }
        else{
            permission = "Normal";
        }
        return permission;
    }

    handleEditUser = () => {
      this.props.editFun();
      this.props.changeEditStatus();
    }
    handleDeleteUser = (idUser) => {
      this.props.deleteUser(idUser);
    }

    render() {
      // console.log(this.props.data);
    return (
      <tr>
        <td>{this.props.stt}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.phone}</td>
        <td>{this.ResultPermission()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning sua" onClick={() => this.handleEditUser()}>
              <i className="fa fa-edit" />
              Sửa
            </div>
            <div className="btn btn-danger xoa" onClick={(idUser) => this.handleDeleteUser(this.props.id)}>
              <i className="fa fa-delete" />
              Xóa
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
