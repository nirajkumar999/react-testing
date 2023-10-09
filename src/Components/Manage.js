import React from 'react'
import {
  faTrashCan
} from "@fortawesome/free-regular-svg-icons";
import DataTable from 'react-data-table-component';
import HoverableButton2 from './HoverableButton2';

export default function Manage() {

  const organization_names  = [
    {
      "id": 1,
      "organizationname": "org1",
      "created_at": "2023-08-29T09:01:54.414Z",
      "updated_at": "2023-08-29T09:01:54.414Z"
    },
    {
      "id": 2,
      "organizationname": "org2",
      "created_at": "2023-08-29T09:01:54.414Z",
      "updated_at": "2023-08-29T09:01:54.414Z"
    },
    {
      "id": 3,
      "organizationname": "org3",
      "created_at": "2023-08-29T09:01:54.414Z",
      "updated_at": "2023-08-29T09:01:54.414Z"
    }];

  const columns = [
    {
      name: "Name",
      selector: (organization) => organization.organizationname,
    },
    {
      name: "Action",
      cell: (organization) => (
        <div>
          <HoverableButton2
            variant="danger"
            text="delete"
            icon={faTrashCan}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable
        title="organization table"
        columns={columns}
        data={organization_names}
        highlightOnHover
        fixedHeader
        pagination
        paginationComponentOptions={{
          selectAllRowsItem: true,
          selectAllRowsItemText: 'Show All',
        }}
        pointerOnHover/>
    </>
  )
}
