import React, { useState } from "react";

// class AddUserInfo extends React.Component{
//     //tạo biến ob state
//     state={
//         name:"Hòa Lợi",
//         tuoi:43,
//         diachi:"Châu Phong"
//     }
//     handleOnchangName=(event)=>{
//         this.setState(
//             {
//                 name:event.target.value
//             }
//         )
//         // console.log(event.target.value)
//     }


//     handleOnsubmit=(event)=>{
//         // event.preventdefaut();
//         // event.preventDefault();

//         // event.preventDefaut();
//         // alert("me")
//         event.preventDefault();
//         console.log(this.state)
//         this.props.handleAddsubmit({
//             id: Math.floor(Math.random()*100+1) + "-rsandom",
//             name:this.state.name,
//             tuoi:this.state.tuoi
            
        
//         });

//     }

//     handleOnchangAge=(event)=>{
//         this.setState(
//             {
//                 tuoi:event.target.value
//             }
//         )
//     }
    
//     render(){
//         return (
//             <div>
//                   Tôi tên là  {this.state.name}  <br/>
//                   Tuổi là:  {this.state.tuoi}
//                   <form onSubmit={ (event)=>this.handleOnsubmit(event) }>
//                     <label>Your name: </label>
//                     <input type="text" 
//                     onChange={ (event)=>this.handleOnchangName(event) }
//                     />
//                     <br/>
//                     <label>Tuổi: </label>
//                     <input type="text"
//                     onChange={(event)=>this.handleOnchangAge(event)}
//                     />

//                     <button >Submit</button>
//                   </form>
//             </div>
//         );
//     }


// }




    const AddUserInfo=(props)=>{
        const [name,setName]=useState('');
        const [tuoi,setTuoi]=useState('');
        const [diachi,setdiachi]=useState('Châu Phong')
        //
        const handleOnchangeName=(event)=>{
            setName(event.target.value)
        }
        //
        const handleOnchangeAge=(event)=>{
            setTuoi(event.target.value)
        }    
        const handleOnsubmit=(event)=>{
            event.preventDefault();
            // alert("me")
            props.handleAddsubmit(
                {
                id: Math.floor(Math.random()*100+1) + '-random',
                name: name,
                tuoi: tuoi
                }
                                )
                            }
                
           
        return (
            <>
                <div>Tôi tên: {name}</div> <br/>
                <div>Tuổi tôi: {tuoi}</div> <br/>
                <hr/>

                <form onSubmit={(event)=>handleOnsubmit(event) }>
                    <label>Your Name: </label>
                    <input onChange={(event)=>{handleOnchangeName(event)}}/>
                    <br/>
                    <label>Your Age: </label>
                    <input onChange={(event)=>{handleOnchangeAge(event)}}/>
                    <br/>
                    <button>Submit</button>
                    <hr />

                </form>
            </>
        );

    }


    


    

export default AddUserInfo;







