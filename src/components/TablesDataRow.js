import React, { Component } from 'react';

class TablesDataRow extends Component {
    permissions = ()=>{
        if(this.props.per === 1)
        {
            return "Admin"
        }else if(this.props.per === 2)
        {
            return "Editor"
        }else{
            return "User"
        }
    }
    editClick  = ()=>{
        this.props.editFun()
        this.props.changeEdit()
    }
    deleteButtonClick = (idUser)=>{
       this.props.deleteButtonClick(idUser)
    }
    render() {
        return (
            <tr>
            <th >{this.props.stt}</th>
            <td>{this.props.username}</td>
            <td>{this.props.tel}</td>
            <td>{this.permissions()}</td>
            <td>
                <div className="btn-group">
                    <div className="btn btn-warning" onClick={()=>this.editClick()}><i className="fa fa-edit">Sửa</i></div>
                    <div className="btn btn-danger" onClick={()=>this.deleteButtonClick(this.props.id)}><i className="fa fa-delete">Xóa</i></div>
                </div>


            </td>
        </tr>
        );
    }
}

export default TablesDataRow;