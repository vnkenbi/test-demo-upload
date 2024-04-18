

import React from "react";
import AddUserInfo from "./AddUserInfo";
import Display from "./Display";

class Mycomponent extends React.Component{
//    Đây la biến state

    state={
   listUsers: [  
        {id:1,name:"Nguyễn",tuoi:"13"},
        {id:2,name:"Hòa",tuoi:"23"},
        {id:3,name:"Lợi",tuoi:"33"}  
    ]
    }
    
    //Đây là hàm
    handleAddsubmit=(obuser)=>{
        // alert("me");
        console.log(">>>>>>>",obuser)
        // Cập nhật lại biến state : thêm vào 1 phẩn tử mới
        this.setState(
            {
                listUsers: [obuser,...this.state.listUsers]
            }
        )
    }
    render(){
        return(
            <>
                <div className="a">
                <AddUserInfo handleAddsubmit= {this.handleAddsubmit} />
                
                <hr/>
                <Display listUsers={this.state.listUsers} />
                </div>
                <div className="b">

                </div>

                
            </>
        );
    }
}
export default Mycomponent;



