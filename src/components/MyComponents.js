
//
import React from 'react';

class MyComponent  extends React.Component {
    state ={
        name:"Hòa Lợi",
        tuoi:43,
        diachi:"Châu Phong"
    }

    render(){
        return (
           <div>
            Tôi tên {this.state.name} và đang ở {this.state.diachi}
           </div>
        );
    }
}

export default MyComponent;