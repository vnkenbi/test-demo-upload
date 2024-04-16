
//
import React from 'react';
import UserInfo from './UserInfo'
import DisplayInfo from './Display';


class MyComponent  extends React.Component {
    
    render(){
            const myInfo=['a','b','c']
        return (
           <div>
            
           <UserInfo/>
           <br/><br/>
           <DisplayInfo name="Tên cha đây1" tuoi="19" />
           <hr/>
           <DisplayInfo name={"Annna"} tuoi={29}  myInfo={myInfo} />

           
           </div>
        );
    }
}

export default MyComponent;