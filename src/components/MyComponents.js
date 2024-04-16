
//
import React from 'react';

class MyComponent  extends React.Component {
    state ={
        name:"Hòa Lợi",
        tuoi:43,
        diachi:"Châu Phong"
    }
    handleClick=(event)=>{
        // console.log("Xin chào")
        // console.log("Bạn đã click vào tôi");
        console.log("Tên tôi là ", this.state.name)
        this.setState(
            {
                name:"Hưng",
                tuoi:Math.floor(Math.random() *100 +1)
            }
        )
    }
    handleOnmouseOver=(event)=>{
        console.log("Bạn vừa rê chuột vào")
    }
    

    render(){
        return (
           <div>
            Tôi tên {this.state.name} và đang ở {this.state.tuoi}
            <button onClick={(event)=>{this.handleClick(event)} }>Click Me</button>
            <button onMouseOver={(event)=>{this.handleOnmouseOver(event)} }>rê chuột vào tôi</button>
           </div>
        );
    }
}

export default MyComponent;