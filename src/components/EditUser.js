import React, { Component } from "react";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.editUserObject.id,
      name: this.props.editUserObject.name,
      phone: this.props.editUserObject.phone,
      permission: this.props.editUserObject.permission
    };
  }

  isChange = event => { // lay noi dung input
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  saveButton = () => {
    this.props.changeEditStatus();
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.phone = this.state.phone;
    info.permission = this.state.permission;
    this.props.getUserInfo(info);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form method="post">
            <div className="card border-primary mb-3">
              <div className="card-header text-center">Sửa thông tin user</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="tên user"
                    name="name"
                    defaultValue={this.props.editUserObject.name}
                    onChange={event => this.isChange(event)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="điện thoại"
                    name="phone"
                    defaultValue={this.props.editUserObject.phone}
                    onChange={event => this.isChange(event)}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    required
                    name="permission"
                    defaultValue={this.props.editUserObject.permission}
                    onChange={event => this.isChange(event)}
                  >
                    <option value>Chọn quyền mặc định</option>
                    <option value={0}>Admin</option>
                    <option value={1}>Modrater</option>
                    <option value={2}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="button"
                    className="btn btn-block btn-secondary"
                    value="Lưu"
                    onClick={() => this.saveButton()}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
