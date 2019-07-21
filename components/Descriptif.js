import React, { Component } from 'react'
import '../sass/components/_descriptif.scss'

class Descriptif extends Component {
    render(){
        return(
            <React.Fragment>
                <h2>{this.props.title}</h2>
                <hr></hr>
                <p>{this.props.description}</p>
            </React.Fragment>
        )
    }
}

export default Descriptif