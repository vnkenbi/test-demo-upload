
import React, { useState } from "react";
import './Display.scss';
import logo from './../logo.svg';


// class Display extends React.Component{
   
//     render(){
//         const {listUsers}=this.props;   
//         return(
//             <div className="Display-container">
                   
                   

//                     { true &&
//                     <>
//                         {
//                             listUsers.map(
                                
//                                 (user)=>{
//                                     return (
//                                         <div key={user.id} className={+user.tuoi > 18 ? "green" : "red"}>
//                                                     <div >Tôi tên {user.name}</div>
//                                                     <div>Tuổi: {user.tuoi}</div>
                                                   
//                                                     <div>
//                                                         <button onClick={()=>{this.props.handleDele(user.id)}}>Delete</button>
                                                        
//                                                     </div>
//                                                     <hr/>
//                                         </div>
//                                     );
//                                 }
//                             )
//                         }
                        
                        
//                     </>
//                     }
//             </div>
//         );
//     }
// }


const Display =(props)=>{
    const {listUsers}=props;  
    const [isShowhide, setShowhide]=useState(true);
    const handleShowhide=()=>{
        setShowhide(!isShowhide)
    }
    
    return(
        <div className="Display-container">
               <div>
                <span onClick={ ()=>{handleShowhide()} }> {isShowhide===false ? "Show list user" : "Hide list user"}</span>
               </div>
               

                {/* { isshowhide && */}
                { isShowhide &&
                <>
                    {
                        listUsers.map(
                            
                            (user)=>{
                                return (
                                    <div key={user.id} className={+user.tuoi > 18 ? "green" : "red"}>
                                                <div >Tôi tên {user.name}</div>
                                                <div>Tuổi: {user.tuoi}</div>
                                               
                                                <div>
                                                    <button onClick={()=>{props.handleDele(user.id)}}>Delete</button>
                                                    
                                                </div>
                                                <hr/>
                                    </div>
                                );
                            }
                        )
                    }
                    
                    
                </>
                }
        </div>
    );
}



export default Display;

