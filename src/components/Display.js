


import React from "react";

class DisplayInfo extends React.Component{
   
    render(){
        const {listUsers}=this.props;
        // console.log(listUsers);
        // const {name, tuoi}=this.props
        return(
            <div>
                
                {
                  listUsers.map((duLieuTungDong,index)=>{
                
                    return (<div key={duLieuTungDong.id}>
                            
                            Tôi tên: {duLieuTungDong.name} <br />
                            Tuổi tôi là: {duLieuTungDong.tuoi} <br />
                            <hr/>
                            </div>) 

                    
                    
                  })  
                }
                
            </div>
        );
    }
}
export default DisplayInfo;

