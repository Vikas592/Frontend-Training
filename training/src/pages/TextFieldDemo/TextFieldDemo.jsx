import React, { useState } from 'react';
import { TextField, RadioGroup, SelectField } from '../../components';
import { CRICKET, FOOTBALL } from '../../configs/Constants';

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
    console.log({ name, sport, radioValue }); //eslint-disable-line
  };

  const handleSportChange = (event) => {
    setSport(event.target.value === 'Select' ? '' : event.target.value);
    setRadioValue('');
    console.log({ name, sport, radioValue }); //eslint-disable-line
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
    console.log({ name, sport, radioValue }); //eslint-disable-line

  };

  return (
    <div>
      <h4>Name</h4>
      <TextField value={name} handleNameChange={handleNameChange} />
      <SelectField
        value={sport}
        handleSportChange={handleSportChange}
        options={selectOptions}
      />
      {sport && (
        <RadioGroup
          value={sport}
          handleRadioChange={handleRadioChange}
          options={sport === CRICKET ? radioCricketOptions : radioFootballOptions}
        />
      )}
    </div>
  );
}

export default TextFieldDemo;
