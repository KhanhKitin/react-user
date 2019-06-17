import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      phone: "",
      permission: ""
    };
  }

  isChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  showForm = () => {
    if (this.props.status === true) {
      return (
        <div className="col">
          <form method='post'>
            <div className="text-left">
              <div
                className="card border-primary mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Thêm mới user vào hệ thống</div>
                <div className="card-body text-primary">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="tên user"
                      name="name"
                      onChange={this.isChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="điện thoại"
                      name="phone"
                      onChange={event => this.isChange(event)}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      required
                      name="permission"
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
                      type="reset"
                      className="btn btn-block btn-primary"
                      onClick={(name, phone, permission) =>
                        this.props.add(
                          this.state.name,
                          this.state.phone,
                          this.state.permission
                        )
                      }
                      value="Thêm Mới"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  render() {
    return <div>{this.showForm()}</div>;
  }
}
