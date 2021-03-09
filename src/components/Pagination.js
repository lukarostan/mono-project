import React from 'react'

class Pagination extends React.Component{
    /* constructor(){
        super()
    } */
    render(){
        return(
            <div className="pagination-container">
                <p className="page-current">Page 1 of 3</p>
                <div className="page-control-container">
                    <button className="page-control">1</button>
                    <button className="page-control">2</button>
                    <button className="page-control">3</button>
                </div>
            </div>
        )
    }
}
export default Pagination