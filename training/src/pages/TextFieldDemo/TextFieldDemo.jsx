import React, { useState } from 'react';
import {
  TextField,
  RadioGroup,
  SelectField,
  Button,
} from '../../components';
import { CRICKET, FOOTBALL } from '../../configs/Constants';
import { buttonContainerStyle, buttonStyle } from './style';

function TextFieldDemo() {
  const [name, setName] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [sport, setSport] = useState('');
  const selectOptions = [
    {
      key: 'Select',
      value: 'Select',
    },
    {
      key: CRICKET,
      value: CRICKET,
    },
    {
      key: FOOTBALL,
      value: FOOTBALL,
    },
  ];

  const radioCricketOptions = [
    {
      key: 'Wicket Keeper',
      value: 'Wicket Keeper',
    },
    {
      key: 'Bowler',
      value: 'Bowler',
    },
    {
      key: 'Batsmen',
      value: 'Batsmen',
    },
  ];

  const radioFootballOptions = [
    {
      key: 'Defender',
      value: 'Defender',
    },
    {
      key: 'Striker',
      value: 'Striker',
    },
  ];

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSportChange = (event) => {
    setSport(event.target.value === 'Select' ? '' : event.target.value);
    setRadioValue('');
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    setName('');
    setRadioValue('');
    setSport('');
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    console.log({ name, radioValue, sport }); //eslint-disable-line
  };

  return (
    <div>
      <h4>Name</h4>
      <TextField value={name} handleNameChange={handleNameChange} />
      <h4>What do you play ?</h4>
      <SelectField
        value={sport}
        handleSportChange={handleSportChange}
        options={selectOptions}
      />

      {sport && (
        <>
          <h4>What do you do ?</h4>
          <RadioGroup
            value={sport}
            handleRadioChange={handleRadioChange}
            options={sport === CRICKET ? radioCricketOptions : radioFootballOptions}
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

export default TextFieldDemo;
