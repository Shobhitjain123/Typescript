import React, { useState } from "react";

function Form(): React.ReactElement {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e);
    
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Input"
          onChange={handleInputChange}
          value={value}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{value}</h1>
      <h2></h2>
    </div>
  );
}

export default Form;
