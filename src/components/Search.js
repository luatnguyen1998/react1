import React, { Component } from 'react';
import EditUser from './EditUser';
class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        temValue : "",
        Userinfo : {}
      }
    }
    
  HienthiForm  =()=>{
    if(this.props.trangthai === true)
    {
      return (  <input type="submit" className="btn btn-secondary btn-block"  value="đóng lại" onClick={this.props.ketnoi}/>)
    }else{
      return (  <input type="submit" className="btn btn-primary btn-block" value="Thêm mới" onClick={this.props.ketnoi} />)
    }
  }
  isChange = (event)=>{
  
    this.setState({temValue:event.target.value});
    this.props.checkConnectProps(this.state.temValue)
  }
  isHienThiFormUser = ()=>{
    if(this.props.editUser === true)
    {
      return <EditUser 
      getUserinfo = {(info)=>this.getUserinfo(info)}
      changeClick = {this.props.ChangeStatusEdituSer}  editValue ={this.props.userObject}/>
    }
  }
  getUserinfo = (info)=>{
    this.setState({
      Userinfo:info
    })
    this.props.getEditInfoApp(info)
    
  }
  
    render() {
      
        return (
        
          <div>

            {this.isHienThiFormUser()}
            <div className="col-md-12">
            <div className="form-group">
              <div className="btn-group">
                <input type="text" className="form-control search"  onChange={(event)=>this.isChange(event)} placeholder="Nhập từ tìm kiếm" />
                <input type="submit" value="Tìm kiếm" className="btn btn-info" onClick = {(dl)=>this.props.checkConnectProps(this.state.temValue)} />
              </div>
            </div>
            
            <hr />
          </div>
          <div className="col-12">
          <div className="form-group">
            {this.HienthiForm()}
            
          </div>
          </div>
          </div>
        );
    }
}

export default Search;