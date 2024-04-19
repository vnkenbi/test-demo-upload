

import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import Display from "./Display";

const Mycomponent=(props)=>{
    const [listUsers,setlistUsers]=useState(
        [
        {id:1,name:"Hòa",tuoi:13},
        {id:2,name:"Nguyễn",tuoi:23},
        {id:3,name:"Lợi",tuoi:33}
        ]
    )
    const handleAddsubmit=(user)=>{
        setlistUsers([user,...listUsers])
    }
    const handleDele=(userId)=>{
                    let listuserClone=listUsers ;
                     listuserClone=listuserClone.filter(
                        (duLieuTungDong)=>{
                            return duLieuTungDong.id !==userId
                        }
                    )
                    setlistUsers(listuserClone)

                  
                }

        return (
            <>
                <div>
                    
                    <AddUserInfo handleAddsubmit={handleAddsubmit}
                    
                    />
                    <Display handleDele={handleDele}
                    listUsers={listUsers}
                    
                    />
                  
                </div>
            </>
        );
}

// class Mycomponent extends React.Component{
//     //    Đây la biến state
    
//         state={
//        listUsers: [  
//             {id:1,name:"Nguyễn",tuoi:"13"},
//             {id:2,name:"Hòa",tuoi:"23"},
//             {id:3,name:"Lợi",tuoi:"33"}  
//         ]
//         }
        
//         //Đây là hàm
//         handleAddsubmit=(obuser)=>{
//             // alert("me");
//             console.log(">>>>>>>",obuser)
//             // Cập nhật lại biến state : thêm vào 1 phẩn tử mới
//             this.setState(
//                 {
//                     listUsers: [obuser,...this.state.listUsers]
//                 }
//             )
//         }
//         handleDele=(userId)=>{
//             let listuserClone=this.state.listUsers ;
//              listuserClone=listuserClone.filter(
//                 (duLieuTungDong)=>{
//                     return duLieuTungDong.id !==userId
//                 }
//             )
//             this.setState(
//                 {
//                     listUsers:listuserClone
//                 }
//             )
//         }
//         //JSX
//             render(){
//             // const test="Hà Nội";
//             // const tist=56;
//             // const tys=[1,2,3]
//             // const tus={name:"Hà", diachi:"Vĩnh Lộc"}
//             return(
//                 <>
//                     {/* {test}<br/>
//                     {tist}<br/>
//                     {tys}<br/>
//                     { JSON.stringify(tus)} */}
    
//                     <div className="a">
//                     <AddUserInfo handleAddsubmit= {this.handleAddsubmit} />
    
//                     {/* <Display handleDele={this.handleDele}/> */}
                    
//                     <hr/>
//                     <Display 
//                     listUsers={this.state.listUsers} 
//                     handleDele={this.handleDele}
                    
//                     />
                   
//                     </div>
//                     <div className="b">
    
//                     </div>
    
                    
//                 </>
//             );
//         }
//     }
export default Mycomponent;



