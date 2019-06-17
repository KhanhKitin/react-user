import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json'

const uuidv1 = require('uuid/v1');

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      keyWord: '',
      status: false,
      data: [],
      editStatus: false,
      editUserObject: {}
    }
  }
  
  componentWillMount(){
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }

  changeStatus = () => { 
    this.setState({
      status: !this.state.status
    })
    // console.log(this.state.status);
  }

  getUserInfoApp = (info) => {
    this.state.data.forEach((item) => {
      if(item.id === info.id){
        item.name = info.name;
        item.phone = info.phone;
        item.permission = info.permission
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  changeEditStatus = () => {
    this.setState({
      editStatus: !this.state.editStatus
    })
  }
  
  getEditUser = (user) => {
    console.log('ket noi thanh cong');
    this.setState({
      editUserObject: user
    })
  }

  getNewUserData = (name, phone, permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    console.log('ket noi thanh cong');
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });

    localStorage.setItem('userData', JSON.stringify(items));
  }

  getTextSearch = (dl) => {
    this.setState({
      keyWord: dl
    })
  }

  deleteUser = (idUser) => {
    var result = this.state.data.filter((item) => item.id !== idUser);
    this.setState({
      data: result
    })

    localStorage.setItem('userData', JSON.stringify(result));
    console.log(localStorage.getItem('userData'));
  }

  render(){
    var result = [];
    this.state.data.forEach((item) => {
      if(item.name.toUpperCase().indexOf(this.state.keyWord.toUpperCase()) !== -1){
        result.push(item);
      }
    })
    return (
      <div>
        <Header />
         <div className='search-Form'>
           <div className='container'>
             <div className='row'>
                <SearchForm 
                  check={() => this.changeStatus()} 
                  status={this.state.status}
                  checkConnectProps={(dl) => this.getTextSearch(dl)}
                  editStatus={this.state.editStatus}
                  changeEditStatus={() => this.changeEditStatus()}
                  editUserObject={this.state.editUserObject}
                  getUserInfoApp={(info) => this.getUserInfoApp(info)}
                />
                <TableData DataUserProps = {result}
                          changeEditStatus={() => this.changeEditStatus()}
                          editFun = {(user) => this.getEditUser(user)}
                          deleteUser = {(idUser) => this.deleteUser(idUser)}
                />
                <AddUser add={(name, phone, permission) => this.getNewUserData(name, phone, permission)} status={this.state.status}/>
             </div>
           </div>
         </div>
      </div>
    );
  }
}

export default App;
