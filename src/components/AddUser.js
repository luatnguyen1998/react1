import React, { Component } from 'react';

class AddUser extends Component {
 constructor(props) {
   super(props);
   this.state={
     id:"",
     name:"",
     tel:"",
     permissions:""
   };
 }
 
  isChange   = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
   this.setState({
     [name]:value
   })
  //  var item = {}
  //  item.id = this.state.id;
  //  item.name =this.state.name;
  //  item.tel = this.state.tel;
  //  item.permissions = this.state.permissions;
  //  console.log(item);
  }
   
    hienThiForm = ()=>{
        if(this.props.hienthi === true){
            return (
                      
         <div className="col">
         <form>
      <div className="card text-white border-primary mb-3 text-dark">
        <div className="card-header text-center">Thêm Nhân Viên Vào Hệ Thống</div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" name="name"  placeholder="Tên" onChange={(event)=>this.isChange(event)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="tel"  placeholder="Điện Thoại" onChange={(event)=>this.isChange(event)} />
          </div>
          <div className="form-group">
            <select className="form-control" name="permissions" onChange={(event)=>this.isChange(event)}>
              <option value>chọn quyền nhân viên</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className="form-group">
            <input type="reset" className="btn btn-primary btn-block" onClick = {(name,tel,permissions)=>this.props.add(this.state.name,this.state.tel,this.state.permissions)} value="Thêm" />
          </div>
          
        </div>
      </div>
      </form>
      </div>
            )
        }
    }
    render() {
        
        return (
           <div>
            {this.hienThiForm()}
            </div>
        );
    }
}

export default AddUser;