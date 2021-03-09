import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect
} from "react-router-dom";

class SingleItem extends React.Component{
    render(){

        return(
            <Router>
            <div className="single-item--container">
                <ul className="single-item">
                        <Switch>
                            <Redirect exact from="/" to="/list" />
                            <Route path="/list">
                                <li className="single-item--value">{this.props.makeId}</li>
                                <li className="single-item--value">{this.props.name}</li>
                                <li className="single-item--value">{this.props.abrv}</li>
                                <li className="single-item--value">{this.props.id !== undefined && <Link to={"/edit/"+this.props.id}>Edit</Link>}</li>
                                <li className="single-item--value">{this.props.id !== undefined && <Link to={"/remove/"+this.props.id}>Remove</Link>}</li>
                            </Route>
                            
                            {this.props.id !== undefined && <Route path="/edit/">
                                <li><input name="make" placeholder="Make" value={this.props.makeId} type="text" className="input"></input></li>
                                <li><input name="name" placeholder="Name" value={this.props.name} type="text" className="input"></input></li>
                                <li><input name="abrv" placeholder="Abbrevation" value={this.props.abrv} type="text" className="input"></input></li>
                                <Link to="/list">Save</Link>
                                <Link to="/list">Cancel</Link>
                            </Route>}
                        </Switch>
                </ul>
            </div>
        </Router>
        )
    }
}

export default SingleItem