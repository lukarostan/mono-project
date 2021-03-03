import React from 'react'


function ListViewItem(props) {
    return(
        <>
            <tr>
                <th>{props.id}</th>
                <th>{props.makeId}</th>
                <th>{props.name}</th>
                <th>{props.abrv}</th>
            </tr>
        </>
    )
}

export default ListViewItem