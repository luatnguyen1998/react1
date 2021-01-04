import React, { Component } from 'react';
import TablesDataRow from './TablesDataRow';

class Tables extends Component {
    deleteButtonClick = (idUser)=>{
        this.props.deleteUser(idUser);
    }

    mappingUser = ()=>
        this.props.DataUser.map((value,key)=>(
           <TablesDataRow  deleteButtonClick = {(idUser)=>this.deleteButtonClick(idUser)} editFun = {(user)=>this.props.editUser(value)} 
           username = {value.name} 
           key={key} 
           stt={key+1} per={value.permissions} 
           id = {value.id}
           tel ={value.tel} changeEdit ={this.props.ChangeStatusEdituSer}/>
          
        ))
    
    
    render() {
        
        return (
            <div className="col">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th >STT</th>
                        <th >Tên</th>
                        <th >Điện Thoại</th>
                        <th >Quyền</th>
                        <th >Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                {this.mappingUser()}

                </tbody>
            </table>
        </div>
        );
    }
}

export default Tables;