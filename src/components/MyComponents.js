

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./Display";

class Mycomponent extends React.Component{
    state={
   listUsers: [  {id:1,name:"Nguyễn",tuoi:13},
        {id:2,name:"Hòa",tuoi:23},
        {id:3,name:"Lợi",tuoi:33}  ]
    }
    render(){
        return(
            <div>
                <UserInfo/>
                <hr/>
                <DisplayInfo listUsers={this.state.listUsers} />
                
                
            </div>
        );
    }
}
export default Mycomponent;



