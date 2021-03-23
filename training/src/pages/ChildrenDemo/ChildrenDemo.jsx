import { Typography } from '@material-ui/core';
import React from 'react';
import { Math } from '../../components';

function ChildrenDemo() {
  return (
    <div>
      <Math first={5} second={10} operator="+" />
      <Math first={5} second={10} operator="-" />
      <Math first={5} second={10} operator="*" />
      <Math first={5} second={10} operator="/" />
      <Math first={5} second={0} operator="/" />
      <Math first={5} second={10} operator="+">
        {
          (({ first, second, result }) => (
            <Typography variant="h5">
              {`Sum of ${first} and ${second} is ${result}`}
            </Typography>
          ))
        }
      </Math>

    </div>
  );
}

export default ChildrenDemo;
