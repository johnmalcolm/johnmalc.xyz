import React from 'react';


class Placeholder extends React.Component {
    constructor(){
        super()
        this.state = {
            zayusha: "Alexander Kondakov"
        };
    }

    placeholder(){
        console.log(this.state.zayusha)
    }

    render(){
        return <div className="placeholder"></div>
    }

}

export default Placeholder