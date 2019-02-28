import React from 'react';
import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './bootStrap.css'

const techCompanies = [
  { label: "1 day", value: 1 },
  { label: "1 week", value: 2 },
  { label: "1 month", value: 3 },

];

const Bootstrap = () => (
  <div className='dropdown'>
    <div>
      
        <Select  options={ techCompanies } />
     
      
    </div>
  </div>
);

export default Bootstrap;