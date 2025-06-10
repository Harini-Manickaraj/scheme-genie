import React from 'react';

export default function UserInputForm({ field, data, setField, setData }) {
  return (
    <div className="input-form">
      <h2>Enter Your Details</h2>
      <label>
        Select Field:
        <select value={field} onChange={(e) => setField(e.target.value)}>
          <option value="">--Choose--</option>
          <option value="agriculture">Agriculture</option>
          <option value="education">Education</option>
          <option value="healthcare">Healthcare</option>
        </select>
      </label>
      <label>
        Enter Data:
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </label>
    </div>
  );
}
