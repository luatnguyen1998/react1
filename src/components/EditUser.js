import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state={
    id : this.props.editValue.id,
    name : this.props.editValue.name,
    tel:this.props.editValue.tel,
    permissions : this.props.editValue.permissions,

    };
  }
  
  isChangeStt = ()=>{
    this.props.changeClick()
  }
  isChange = (event)=>{
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]:value})
  }
  saveButtonInfo = ()=>{
    var info = {}
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permissions = this.state.permissions;
    this.props.getUserinfo(info)
    this.isChangeStt()
  }
    render() {
        return (
            <div className="row">
            <div className="col-12">
         <form>
      <div className="card text-white bg-warning mb-3 text-dark">
        <div className="card-header text-center">Sửa Nhân Viên Vào Hệ Thống</div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" name="name"  placeholder="Tên" defaultValue={this.props.editValue.name} onChange={(event)=>this.isChange(event)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="tel"  placeholder="Điện Thoại" defaultValue={this.props.editValue.tel}  onChange={(event)=>this.isChange(event)}  />
          </div>
          <div className="form-group">
            <select className="form-control" name="permissions" defaultValue={this.props.editValue.permissions}  onChange={(event)=>this.isChange(event)} >
              <option value>chọn quyền nhân viên</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-danger btn-block" value="Lưu Thông Tin" onClick= {()=>this.saveButtonInfo()} />
          </div>
          
        </div>
      </div>
      </form>
      </div>
      </div>
        );
    }
}

export default EditUser;