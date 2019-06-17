import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

export default class TableData extends Component {

  deleteUser = (idUser) => {
    this.props.deleteUser(idUser);
  }

  mappingDataUser = () => this.props.DataUserProps.map((value, key) => {
    return <TableDataRow 
              deleteUser={(idUser) => this.props.deleteUser(idUser)}
              key={key} 
              data={value} 
              stt={key+1} 
              id={value.id}
              editFun={(user) => this.props.editFun(value)}
              changeEditStatus={() => this.props.changeEditStatus()}
           />
  })
  render() {
    return (
        <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>
    );
  }
}
