import React from 'react';
import { Link } from 'react-router-dom'

class AddNewItem extends React.Component{
    constructor(props){
        super()
        
    }
    render(){
            return(
                <div className="single-item--container">
                    <ul className="single-item">
                        <li><input className="input" type="text" placeholder="Make"/></li>
                        <li><input className="input" type="text" placeholder="Model"/></li>
                        <li><input className="input" type="text" placeholder="Abbreviation (Max. 3 Chars)"/></li>
                        <button className="input">Confirm</button>
                        <Link className="input" to="/">Close</Link>
                    </ul>
                </div>
            )

    }
}
export default AddNewItem