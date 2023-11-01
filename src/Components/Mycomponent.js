import React, { useEffect } from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';

const ministrylist = [
  { id: 1, name: 'm1' },
  { id: 2, name: 'm2' },
  { id: 3, name: 'm3' },
];
const organizationlist = [
  { id: 1, mid: 1, name: 'm1o1' },
  { id: 2, mid: 1, name: 'm1o2' },
  { id: 3, mid: 2, name: 'm2o1' },
  { id: 4, mid: 2, name: 'm2o2' }
];




export default function Mycomponent() {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState(null);
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  //console.log(option1[0].value[2]);

  useEffect(() => {
    // Set the default selected organization based on filteredOrganizations
    if (filteredOrganizations.length > 0) {
      setSelectedOrganization({
        value: filteredOrganizations[0].name,
        label: filteredOrganizations[0].name,
      });
    } else {
      setSelectedOrganization(null);
    }
  }, [filteredOrganizations]);


  const handleOrganizationChange = (newValue, actionMeta) => {
    if (actionMeta.action === 'create-option') {
      // Handle the creation of a new option
      const newOption = { value: newValue.value, label: newValue.label };
      // Handle the selected value (newOption)
      console.log('Selected newoption:', newOption);
      setSelectedOrganization(newOption);

    } else {
      // Handle the selected value (newValue)
      console.log('Selected in else newvalue:', newValue);
      setSelectedOrganization(newValue);
    }
  };

  const handleMinistryChange = (selectedOption) => {
    setIsLoading(true)
    if(selectedOption){
      setSelectedMinistry(selectedOption);
    // Filter organizations associated with the selected ministry
    const filteredOrgs = organizationlist.filter((org) => {
      return org.mid === selectedOption.value;
    });
    console.log("filteredOrgs : ", filteredOrgs);
    setFilteredOrganizations(filteredOrgs);
    setIsDisabled(false); // Enable the organization dropdown
    }
    else 
     { 
      setSelectedMinistry(null);
      console.log("setFilteredOrganizations([])")
      setFilteredOrganizations([]);
      setIsDisabled(true); // Disable the organization dropdown 
     }
     setTimeout(() => {
      
      // This code will run after 4 seconds
    }, 3000);
    setIsLoading(false)
    
  };

  return (
    <div style={{ width: '300px' }}>
      <Form>
        <Form.Group className="mb-3" controlId="selectMinstry">
          <Form.Label>Ministry</Form.Label>

          <Select
            className="basic-single"
            classNamePrefix="ministry-list"
            isClearable={isClearable}
            isSearchable={isSearchable}
            name="ministry_list"
            placeholder="Select Ministry"
            options={ministrylist.map((option) => ({
              label: option.name, // The label displayed in the dropdown
              value: option.id,   // The value associated with the selected option
            }))}
            onChange={handleMinistryChange}
            value={selectedMinistry}
          />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="selectOrganization">
          <Form.Label>Organization</Form.Label>
          <CreatableSelect
            className="basic-single"
            classNamePrefix="organization-list"
            isClearable
            isDisabled={isDisabled}
            name="organization_list"
            options={filteredOrganizations.map((option) => ({
              value: option.name,
              label: option.name,
            }))}
            placeholder="Select Organization"
            onChange={handleOrganizationChange}
            value={selectedOrganization} // Set the selected organization
            isLoading={isLoading}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
