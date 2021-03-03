import React from 'react'
import SingleCar from '../components/ListViewItem'
import models from '../stores/Models'
import './Table.sass'
/* import makes from '../stores/Makes' */

function ListView (){
    const carmodels = models.map((car)=>{
        return(
            <SingleCar key={car.id} id={car.id} makeId={car.makeId} name={car.name} abrv={car.abrv}/>
        )
    })


    return(
        <div className="list-view">
        <tr>
            <th>ID</th>
            <th>MAKE</th>
            <th>MODEL</th>
            <th>ABBREVIATION</th>
        </tr>
            {carmodels}
        </div>
    )
}
export default ListView