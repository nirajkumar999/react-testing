import React, { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'

import { faEye, faSquarePlus, faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import HoverableButton from './HoverableButton';
import Manage from './Manage';

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
                <HoverableButton text="View" icon={faEye} variant="info" body={<Manage/>}/>
                <HoverableButton text="Add" icon={faSquarePlus} variant="primary"/>
                <HoverableButton text="Edit" icon={faPenToSquare} variant="success" />
                <HoverableButton text="Delete" icon={faTrashCan} variant="danger"/>
            </div>
        }
    ];
    
    const data = useMemo(() => [
        {
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
        },
        {
          "id": 3,
          "ministryname": "v",
          "created_at": "2023-08-29T09:01:54.414Z",
          "updated_at": "2023-08-29T09:01:54.414Z"
        },
      ], []);
    
    const[search, setSearch]=useState("");
    const[filterResult, setFilterResult]=useState(data);

    useEffect(()=>{
       const result = data.filter(x => {
        return x.ministryname.toLowerCase().includes(search.toLowerCase());
       });
       setFilterResult(result);
    },[search, data]);

    console.log("data ",data)
  
    return (
        <div className="container">
            <DataTable

                // className="custom-data-table" // Add this className
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
                  <div style={{display:'flex'}}>
                    <input 
                    type='text' 
                    placeholder='Search Here' 
                    className='w-200 form-control'
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    />
                  
                  </div>
                }
                defaultSortFieldId={1}
                customStyles={{
                  rows: {
                    style: {
                      minHeight: '70px', // Set the row height to 70px
                    },
                  },
                }}

            />
        </div>
    )
}

export default Ministrytable
