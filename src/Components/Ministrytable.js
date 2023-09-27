import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

import { faEye, faSquarePlus, faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import HoverableButton from './HoverableButton';

 const Ministrytable = () => {
    const columns = [
        {
            name: 'Ministry Name',
            selector: row => row.ministryname,
            sortable: true
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
        "ministryname": "a",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },
    {
        "id": 2,
        "ministryname": "b",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    }, {
        "id": 3,
        "ministryname": "f",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 4,
        "ministryname": "e",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 5,
        "ministryname": "d",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 6,
        "ministryname": "c",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 7,
        "ministryname": "n",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 8,
        "ministryname": "o",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 9,
        "ministryname": "m",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 10,
        "ministryname": "k",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 11,
        "ministryname": "l",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 12,
        "ministryname": "j",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 13,
        "ministryname": "h",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 14,
        "ministryname": "i",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },{
        "id": 15,
        "ministryname": "g",
        "created_at": "2023-08-29T09:01:54.414Z",
        "updated_at": "2023-08-29T09:01:54.414Z"
    },]
    
    const[search, setSearch]=useState("");
    const[filterResult, setFilterResult]=useState(data);

    useEffect(()=>{
       const result = data.filter(x => {
        return x.ministryname.toLowerCase().match(search.toLowerCase());
       });
       setFilterResult(result);
    },[search]);

    console.log("data ",data)
   
    return (
        <div className="container">
            <DataTable
                className="custom-data-table" // Add this className
                title="Ministry Table"
                columns={columns}
                data={filterResult}
                pagination
                paginationComponentOptions={{
                    selectAllRowsItem: true,
                    selectAllRowsItemText: 'Show All',
                }}
                fixedHeader
                highlightOnHover
                pointerOnHover
                subHeader
                subHeaderComponent={
                  <input 
                    type='text' 
                    placeholder='Search Here' 
                    className='w-25 form-control'
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    />}
                defaultSortFieldId={1}

            />
        </div>
    )
}

export default Ministrytable
