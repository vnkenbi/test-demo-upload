import React from "react";

class UserInfo extends React.Component{
    //tạo biến ob state
    state={
        name:"Hòa Lợi",
        tuoi:43,
        diachi:"Châu Phong"
    }
    handleOnchangName=(event)=>{
        this.setState(
            {
                name:event.target.value
            }
        )
        // console.log(event.target.value)
    }


    handleOnsubmit=(event)=>{
        // event.preventdefaut();
        // event.preventDefault();

        // event.preventDefaut();
        // alert("me")
        event.preventDefault();
        console.log(this.state)

    }

    handleOnchangAge=(event)=>{
        this.setState(
            {
                tuoi:event.target.value
            }
        )
    }
    render(){
        return (
            <div>
                  Tôi tên là  {this.state.name}  <br/>
                  Tuổi là:  {this.state.tuoi}
                  <form onSubmit={ (event)=>this.handleOnsubmit(event) }>
                    <label>Your name: </label>
                    <input type="text" 
                    onChange={ (event)=>this.handleOnchangName(event) }
                    />
                    <br/>
                    <label>Tuổi: </label>
                    <input type="text"
                    onChange={(event)=>this.handleOnchangAge(event)}
                    />

                    <button>Submit</button>
                  </form>
            </div>
        );
    }


}
export default UserInfo;







