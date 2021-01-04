import './../css/App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import Tables from './Tables';
import React, { Component } from 'react';
import Data from './Data.json';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      trangthai :true,
      data :[],
      searchText:"",
      editUserStatus : false,
      userObject :{}
    }
  }
  componentWillMount(){
     // localStorage.setItem('UserDATA', JSON.stringify(Data));
     if(localStorage.getItem('UserDATA')===null){
       localStorage.setItem('UserDATA',JSON.stringify(Data));
     }else
     {
       var temp = JSON.parse(localStorage.getItem('UserDATA'));
       this.setState({
         data:temp
       })
     }
  }
  doitrangthai = () => {
    this.setState({trangthai:!this.state.trangthai});
  }
  checkConnect = (dl)=>{
    this.setState({
      searchText : dl
    })
  console.log("du lieu bo "+this.state.searchText)
  }
  getTextUser  = (name,tel,permissions)=>{
     
      // var item  = {}
      // item.id = "";
      // item.name = name;
      // item.tel = tel;
      // item.permissions = permissions;
      // console.log("ket noi ok");
      // console.log(item);
      var item  = {}
      item .id = uuidv4();
      item.name = name;
      item.tel  = tel;
      item.permissions  =  permissions;
      var items = this.state.data;
      items.push(item);
      this.setState({
        data:items
      })
      console.log(this.state.data)
      localStorage.setItem('UserDATA', JSON.stringify(this.state.data))
  }
  editUser  = (user)=>{
    
    this.setState({userObject:user})
    
  }
  deleteUser = (user)=>{
    var temData = this.state.data;
    temData = temData.filter(item=>item.id !== user);
    this.setState({
      data:temData
    })
    localStorage.setItem('UserDATA', JSON.stringify(temData))
  }
  ChangeStatusEdituSer = ()=>{
    this.setState({editUserStatus:!this.state.editUserStatus})
  }
  getEditInfoApp = (info)=>{
    console.log("da sửa "+info.name)
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permissions = info.permissions;
      }
    })
    localStorage.setItem('UserDATA', JSON.stringify(this.state.data))
  }
  render() {
   
    var ketqua = []
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1 )
      {
        ketqua.push(item)
      }
    })
    // localStorage.setItem("key1","haha")
    return (
      <div className="App">
      <Header />
        <div className="searchForm">
            <div className="container">
              <div className="row">
              
                <Search ketnoi = {this.doitrangthai} trangthai ={this.state.trangthai}
                checkConnectProps = {(dl)=>this.checkConnect(dl) }
                editUser = {this.state.editUserStatus}  ChangeStatusEdituSer = {()=>this.ChangeStatusEdituSer()} userObject = {this.state.userObject} getEditInfoApp = {(info)=>this.getEditInfoApp(info)} />
                <Tables DataUser = {ketqua}   editUser = {(user)=>this.editUser(user)} ChangeStatusEdituSer ={()=>this.ChangeStatusEdituSer()} deleteUser={(user)=>this.deleteUser(user)}   />
                <AddUser  add  = {(name,tel,permissions)=>this.getTextUser(name,tel,permissions)} hienthi = {this.state.trangthai} />
  
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
