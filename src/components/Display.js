import React from "react";

class DisplayInfo extends React.Component{
    render(){
        //props =>Viet tắt của property
        const {name , tuoi}=this.props;

        console.log(this.props)
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age is {tuoi}</div>
            </div>
        )
    }
}
export default DisplayInfo