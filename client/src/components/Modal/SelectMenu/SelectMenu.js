import React from 'react';






export default function SelectMenu() {

  const [jobType, setJobType] = React.useState('');


  function handleChange(event) {
    // setJobType(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div >
      <select className="browser-default" name='jobType' value={jobType} onChange={handleChange}>
        <option value="job" disabled />
        <option value="hourly">Hourly Rate</option>
        <option value="salary">Salary/Day Rate</option>
        <option value="fixed">Fixed Project Rate</option>
      </select>
    </div>

  );
}