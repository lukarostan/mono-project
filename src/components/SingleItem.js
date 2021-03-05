import React from 'react'


class SingleItem extends React.Component{
    render(){

        return(
            <div className= {"single-item--container"} >
                <ul className="single-item">
                    <li className="single-item--value">{this.props.makeId}</li>
                    <li className="single-item--value">{this.props.name}</li>
                    <li className="single-item--value">{this.props.abrv}</li>
                </ul>
            </div>

        )
    }
}

export default SingleItem