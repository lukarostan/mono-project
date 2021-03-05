import React from 'react'
import SingleItem from '../components/SingleItem'
import models from '../stores/Models'

class PageContent extends React.Component {
    render(){
        const modelComponents = models.map((car)=>{
            return(
                <SingleItem key={car.id} id={car.id} makeId={car.makeId} name={car.name} abrv={car.abrv}/>
            )
        })
        const listViewActive = true
        const ListLegend = <SingleItem makeId="Make ID" name="Model Name" abrv="Abbreviation"/>

        return(
            <div className="page-content">
                <h1>Cars</h1>
                <a href="w.w">Add new car</a>
                <span>Filter by name: <input type="text" placeholder="e.g. Passat" className="text-input" ></input></span>
                { listViewActive ? ListLegend : null}
                {modelComponents}
            </div>  
        )
    }
}

export default PageContent