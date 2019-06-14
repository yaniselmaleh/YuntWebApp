import React, { Component } from 'react'
import '../sass/components/_cards.scss'

class Cards extends Component{

    render(props){
        return(
            <React.Fragment>
                <img src={this.props.src} alt={this.props.title} />
                <h3>{this.props.title}</h3>
                <p>{this.props.description} </p>
            </React.Fragment>
        )
    }
}

export default Cards