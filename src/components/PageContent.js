import React from 'react'
import SingleItem from '../components/SingleItem'
import AddNewItem from '../components/AddNewItem'
import models from '../Models'
import makes from '../Makes'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class PageContent extends React.Component {
    constructor(){
        super()
        this.state = {
            models: models,
            filter: '',
            filterBy: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({filter: event.target.value
        });
        }

    render(){
        const modelComponents = models.map((car)=>{
            makes.map((make) =>{
                if(car.makeId === make.id){
                    car.makeId = make.name
                }
                return car
            } )
            return(
                <SingleItem key={car.id} id={car.id} makeId={car.makeId} name={car.name} abrv={car.abrv}/>
                )
            })
            
            let listViewActive = true
            const ListLegend = <SingleItem makeId={<b>Make</b>} name={<b>Model Name</b>} abrv={<b>Abbrevation</b>}/>
            
            return(

            <Router >
            
                <div className="page-content">
                    <h1>Cars</h1>
                    <Link to="/add">Add New Car</Link>
                    <Switch>
                        <Route path="/add">
                            <AddNewItem />
                        </Route>
                    </Switch>
                    <span>Filter by 
                        <select className="input">
                            <option value="make">Make</option>
                            <option value="model">Model</option>
                        </select>:
                        <input type="search" placeholder="e.g. Passat" className="input" value={this.state.filter} onChange={this.handleChange}></input>
                    </span>
                    {listViewActive ? ListLegend : null}
                    {modelComponents }
                </div>
            </Router>  
        )
    }
}

export default PageContent