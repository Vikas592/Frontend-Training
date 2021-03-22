import React, { useState } from 'react';
import {
  TextField,
  RadioGroup,
  SelectField,
  Button,
} from '../../components';
import { CRICKET } from '../../configs/constants';
import { cricketOptions, footballOptions, sportOptions } from '../../lib';
import { buttonContainerStyle, buttonStyle } from './style';
import schema from '../../Validations';

function InputDemo() {
  const [inputs, setInputs] = useState({ name: '', sport: '', part: '' });

  const handleNameChange = (event) => {
    setInputs((prev) => ({ ...prev, name: event.target.value }));
  };

  const handleSportChange = (event) => {
    setInputs((prev) => ({ ...prev, sport: (event.target.value === 'Select' ? '' : event.target.value), part: '' }));
  };

  const handleRadioChange = (event) => {
    setInputs((prev) => ({ ...prev, part: event.target.value }));
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    setInputs({ name: '', sport: '', part: '' });
  };

  const hasErrors = async () => {
    const result = await schema.isValid(inputs);
    return !result;
  };

  const handleSubmitClick = async (event) => {
    event.preventDefault();
    const result = await hasErrors();
    console.log(result ? `error` : inputs); //eslint-disable-line
  };

  return (
    <div>
      <h4>Name</h4>
      <TextField value={inputs.name} handleNameChange={handleNameChange} />
      <h4>What do you play ?</h4>
      <SelectField
        value={inputs.sport}
        handleSportChange={handleSportChange}
        options={sportOptions}
      />

      {inputs.sport && (
        <>
          <h4>What do you do ?</h4>
          <RadioGroup
            value={inputs.sport}
            handleRadioChange={handleRadioChange}
            options={inputs.sport === CRICKET ? cricketOptions : footballOptions}
          />
        </>
      )}
      <div style={buttonContainerStyle}>
        <Button value="Cancel" handleClick={handleCancelClick} style={buttonStyle} color="danger" />
        <Button value="Submit" handleClick={handleSubmitClick} style={buttonStyle} color="primary" />
      </div>

    </div>
  );
}

export default InputDemo;
