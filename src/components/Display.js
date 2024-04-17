


import React from "react";

class DisplayInfo extends React.Component{
    render(){
        const {name, tuoi}=this.props
        return(
            <div>
                Tôi tên {name} <br/>
                Tuổi là: {tuoi}
            </div>
        );
    }
}
export default DisplayInfo;

