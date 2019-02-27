import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import { string } from 'prop-types';
import DynDoughnout from './dynamic-doughnut';

const Stats = props => {

	const { labels = [], value = {}, titleUp = string, titleDown = string, UpData= {}, urlImage = string } = props;
	const counts = labels.map(label => value[label].value || 0);
    
    const chartDataDown = {
		labels: labels,
		datasets: [
			{
				lineTension: 0,
				backgroundColor: 'rgba(68, 204, 153, 0.05)',
				borderColor: 'rgba(68, 204, 153, 0.9)',
				borderWidth: 2,
				borderJoinStyle: 'round',
				pointRadius: 5,
				pointBorderColor: '#fff',
				pointBackgroundColor: 'rgba(68, 204, 153, 0.9)',
				pointBorderWidth: 3,
				data: counts
			}
		]
	};
    
    const chartOptionsDown = {
		layout: { padding: { top: 25, bottom: 75, left: 75, right: 75 } },
		maintainAspectRatio: false,
		scales: {
			yAxes: [{
				ticks: { beginAtZero: true, display: false }
			}]
		},
		legend: { display: false },
		title: {
			display: true,
			text: titleDown,
			padding: 10,
			lineHeight: 4,
			fontSize: 20,
			fontColor: '#677'
		}
	};

  return (
    <Fragment>
      <div className="position-relative h-50 w-100 d-flex border-bottom border-gray" style={{marginTop: '20px'}}>
			<span className="d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary" style={{ fontSize: '1.25rem', textAlign: 'center' }}>
			{titleUp}
			<span className="d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary" style={{ fontSize: '1.25rem', textAlign: 'center', paddingTop: '30px' }}>
			<p>{UpData.up.icon} {UpData.up.value}</p>
			</span>
			<span className="d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary" style={{ fontSize: '1.25rem', textAlign: 'center', paddingTop: '20px' }}>
			<img src={urlImage}></img>
			<p>{UpData.middle.icon} {UpData.middle.value}</p>
			</span>
			<span className="d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary" style={{ fontSize: '1.25rem', textAlign: 'center', paddingTop: '20px' }}>
			<p>{UpData.down.icon} {UpData.down.value}</p>
			</span>
			</span>
      </div>

        <div className="position-relative h-50 w-100 d-flex align-items-center border-bottom border-gray">
        <Line data={chartDataDown} width={100} height={50} options={chartOptionsDown} />
        </div>

				<div className="position-relative h-50 w-100 d-flex align-items-center border-bottom border-gray">
				<DynDoughnout title="TEST" />
				</div>

    </Fragment>
  );
};

export default Stats;