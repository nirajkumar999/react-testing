import React from 'react'
import DataTable from 'react-data-table-component'

import { faEye, faSquarePlus, faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import HoverableButton from './HoverableButton';




const Ministrytable = () => {
    const columns = [
        {
            name: 'Ministry Name',
            selector: row => row.ministryname,
        },
        {
            name: 'Action',
            cell: row => <div>
                <HoverableButton text="View" icon={faEye} variant="info"/>
                <HoverableButton text="Add" icon={faSquarePlus} variant="primary"/>
                <HoverableButton text="Edit" icon={faPenToSquare} variant="success" />
                <HoverableButton text="Delete" icon={faTrashCan} variant="danger"/>
            </div>
        }
    ];
    
    const data = [{
        "id": 1,
        "ministryname": "test",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },
    {
        "id": 2,
        "ministryname": "test2",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    }, {
        "id": 3,
        "ministryname": "test3",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    }]

    console.log("data ",data)
    return (
        <div className="container">
            <DataTable
                title="Ministry Table"
                columns={columns}
                data={data}
                pagination
                fixedHeader
                highlightOnHover
            />
        </div>
    )
}

export default Ministrytable
