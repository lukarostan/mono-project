import React from 'react'
import SingleItem from '../components/SingleItem'
import AddNewItem from '../components/AddNewItem'
import Pagination from '../components/Pagination'
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
            filter: '',
            filterBy: 'make'
        }
        this.handleQueryChange = this.handleQueryChange.bind(this)
        this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this)
    }
    handleQueryChange(event) {
        this.setState({filter: event.target.value,
        });
        console.log(this.state.filter)
        }
    handleFilterTypeChange(event) {
        this.setState({filterBy: event.target.value,
        });
        console.log(this.state.filterBy)
        }

    render(){
        const modelComponents = this.props.AppState.models.map((car)=>{
            this.props.AppState.makes.map((make) =>{
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
            const ListLegend = <SingleItem makeId={<b>Make</b>} name={<b>Model Name</b>} abrv={<b>Abbreviation</b>}/>
            
            return(

            <Router >
            
                <div className="page-content">
                    <h1 className="title" onClick={()=> document.location.href="/"}>Cars</h1>
                    <div className="controls">
                        <Link to="/add">Add New Car</Link>
                        <button className="input" onClick={()=> document.location.href="/edit"}>Edit All</button>
                        <button className="input" onClick={()=> document.location.href="/list"}>Save All</button>
                        <button className="input">View as Grid</button>
                    </div>
                    <Switch>
                        <Route path="/add">
                            <AddNewItem />
                        </Route>
                    </Switch>
                    <span>Filter by 
                        <select className="input" value={this.state.filterBy} onChange={this.handleFilterTypeChange}>
                            <option value="make">Make</option>
                            <option value="model">Model</option>
                        </select>:
                        <input type="search" placeholder="e.g. Passat" className="input" value={this.state.filter} onChange={this.handleQueryChange}></input>
                    </span>
                    {listViewActive ? ListLegend : null}
                    {modelComponents }
                </div>
                <Pagination />
            </Router>  
        )
    }
}

export default PageContent