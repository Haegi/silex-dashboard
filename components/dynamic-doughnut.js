import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DynDoughnout = props => {

  const {title = string } = props;
  const donutTitle = {
    fontSize: '30px',
    textAlign: 'center',
    color: 'red',
    padding: { top: 25, bottom: 75, left: 75, right: 75 },
    fontColor: '#677'
  };
  const options = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#CCC',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};

return (
  <div>
    <h2 style={donutTitle}>{title}</h2>
    <Doughnut data={options} />
  </div>
);
};

export default DynDoughnout;