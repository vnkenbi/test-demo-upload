
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
    handleOnchang=(event)=>{
        // alert("Me")
    //    console.log(event,event.target.value);
       this.setState(
        {
            name:event.target.value,
        }
       )
      
        
    }
    handleOnsubmit=(event)=>{
        event.preventDefault();
        // alert("me")
        // in ra state
        console.log(this.state)
        // console.log(this.state.name);
        // console.log(this.state.tuoi);
        // console.log(this.state.diachi);
    }
    render(){
        return (
           <div>
            Tôi tên {this.state.name} và tuổi tôi là {this.state.tuoi}
            <form onSubmit={(event)=>{this.handleOnsubmit(event)}}>
                <input type="text"
                onChange={(event)=>{this.handleOnchang(event) } }
                />
                <button>Submit</button>
            </form>
           </div>
        );
    }
}

export default MyComponent;