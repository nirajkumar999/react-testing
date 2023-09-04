import React from 'react'
import DataTable from 'react-data-table-component'
import '../App.css'

import {
    EllipsisVerticalIcon,
    HomeIcon,
    PencilSquareIcon,
    TrashIcon,
    NoSymbolIcon,
    PlusSmallIcon
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSqaurePlus, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Button } from 'react-bootstrap';




const columns = [
    {
        name: 'Ministry Name',
        selector: row => row.ministryname,
    },
    {
        name: 'Action',
        cell: row => <div>
            <Button variant="outline-primary"><FontAwesomeIcon icon={faEye} className="hi-s me-2 mx-2" style={{ width: '21px', height: '21px'}}/></Button>&nbsp;
            <Button variant="outline-primary"><PlusSmallIcon className="hi-s me-2 mx-2" style={{ width: '20px', height: '20px' }} /></Button>&nbsp;
            <Button variant="outline-primary"><PencilSquareIcon className="hi-s me-2 mx-2" style={{ width: '20px', height: '20px' }} /></Button>&nbsp;
            <Button variant="outline-primary"><TrashIcon className="hi-s me-2 mx-2" style={{ width: '20px', height: '20px' }} /></Button>
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

const Ministrytable = () => {
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
