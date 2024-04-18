
import React from "react";
import './Display.scss';
import logo from './../logo.svg';


class Display extends React.Component{
    state={
        isShowhide: true
    }
    handleShowhide=(event)=>{
        // alert("me")
        this.setState(
            {
                isShowhide:!this.state.isShowhide
            }
        )
        
    }
    render(){
        const {listUsers}=this.props;
        // let listUsers=this.props;
        // let {listUsers}=this.props;
        // let mang=this.props;
        
        return(
            <div className="Display-container">
                    {/* <img src={logo} /> */}
                    <div>
                        <span onClick={(event)=>{this.handleShowhide(event)}}>{this.state.isShowhide===false ? "Show list user" : "Hide list user" }</span>
                    </div>

                    { this.state.isShowhide &&
                    <>
                        {
                            listUsers.map(
                                
                                (user)=>{
                                    return (
                                        <div key={user.id} className={+user.tuoi > 18 ? "green" : "red"}>
                                                    <div >Tôi tên {user.name}</div>
                                                    <div>Tuổi: {user.tuoi}</div>
                                                   
                                                    <div>
                                                        <button onClick={()=>{this.props.handleDele(user.id)}}>Delete</button>
                                                        
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
}
export default Display;

