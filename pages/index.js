import React, { Component, Fragment } from 'react';
import Stats from '../components/Stats';
import Layout from '../components/Layout';


class IndexPage extends Component {

    state = { answers: {} };
    city = "Loading...";
    UpDataLeft = { up: {
                    icon: "",
                    value: "Loading..."
                  },
              middle: {
                    icon: "",
                    value: "Loading..."
                    },
              down: {
                icon: "",
                value: "Loading..."
              }};

    UpDataMiddle = { up: {
                    icon: "",
                    value: "Loading..."
                   },
            middle: {
                    icon: "",
                    value: "Loading..."
                    },
              down: {
                icon: "",
                value: "Loading..."
              }};

    UpDataRight = { up: {
                icon: "",
                value: "No upcoming events found."
               },
          middle: {
                icon: "",
                value: "No upcoming events found."
                },
          down: {
            icon: "",
            value: "No upcoming events found."
          }};

    charts = ["A", "B", "C"];
    length = {};
    labels = []
    data = { A: [],
            B: [],
            C: []
          };
    queue = { devices : {
      A: {
          values: []
      },
      B: {
          values: []
      },
      C: {
        values: []
      }
  
  }
  }
  ImageUrl = "";
  forecastTitle = "Loading...";

    
    componentDidMount() {
        this.interval = setInterval(() => this.fetchData(), 5 *1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    async fetchData() {

        let [IoTRespoonse, WeatherResponse, ForecastResponse, CalendarResponse] = await Promise.all([
          fetch('silex-dashboard:3001/queue'),
          fetch('http://api.openweathermap.org/data/2.5/weather?zip=69207,de&units=metric&appid=4e632b73bd506b85d6e8d3c892507a94'),
          fetch('http://api.openweathermap.org/data/2.5/forecast?zip=69207,de&units=metric&appid=4e632b73bd506b85d6e8d3c892507a94'),
          fetch('silex-dashboard:3001/calendar')
        ]);

        const data = await IoTRespoonse.json();
        const weather = await WeatherResponse.json();
        const forecast = await ForecastResponse.json();
        const calendar = await CalendarResponse.json();
        this.city = weather.name;

        this.UpDataLeft.up.value = weather.main.temp + " °C ";
        this.UpDataLeft.up.icon = "\ud83c\udfde\ufe0f";
        this.UpDataLeft.middle.icon = "\ud83c\udfe0";


        this.forecastTitle = forecast.list[5].dt_txt;
        this.UpDataMiddle.up.value = forecast.list[5].weather[0].description;
        this.ImageUrl = `http://openweathermap.org/img/w/${forecast.list[5].weather[0].icon}.png`;
        this.UpDataMiddle.middle.icon = "\ud83c\udf21\ufe0f";
        this.UpDataMiddle.middle.value = forecast.list[5].main.temp + " °C ";
        this.UpDataMiddle.down.icon = "	\ud83c\udf2b\ufe0f";
        this.UpDataMiddle.down.value = forecast.list[5].main.humidity + "% ";

        this.UpDataRight.up.value = calendar[0];
        this.UpDataRight.middle.value = calendar[1];
        this.UpDataRight.down.value = calendar[2];

        this.setState({ data });

        // Like For Loop 
        this.charts.map((chart) => {
          // ALgo which sends data if new data is in the queue, to the Stats Component
           const new_length = this.state.data.devices[chart].values.length;
           if (new_length > this.length[chart]) { 
            const value = this.state.data.devices[chart].values[new_length -1].data;
            this.UpDataLeft.middle.value = value + " °C ";
            const time = this.state.data.devices[chart].values[new_length -1].timestamp;
            this.queue.devices[chart].values.push(time);
            this.data[chart][time] = { value };
            let answers = this.data;
            this.setState({ answers });
           }
           this.length[chart] = new_length;

           // Deletes first element if array is bigger than 8
           // CAN BE BETTER!
           if (this.length[chart] === new_length && this.queue.devices[chart].values.length > 8) {
            console.log("DELETE");
            this.queue.devices[chart].values.shift();
          }
          /*if (this.length[chart] > 10) {
            console.log(new_length);
            this.queue.devices[chart].values.shift();
            this.state.data.devices[chart].values.shift();
            this.data[chart].shift();
            this.length[chart] = this.state.data.devices[chart].values.length;
            console.log("DELETE");
          }*/
        });

    }


    render() {

        return (
        <Layout pageTitle="&#x1F4C8; Realtime Data Visualization">
            <main className="container-fluid position-absolute h-100 bg-light">
            <div className="row position-absolute w-100 h-100">
                <section className="col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
                                <Stats labels={this.queue.devices["A"].values} value={this.state.answers["A"]} titleUp={this.city} UpData={this.UpDataLeft} titleDown="Device A"/>
                </section>
                <section className="col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
                                <Stats labels={this.queue.devices["B"].values} value={this.state.answers["B"]} titleUp={this.forecastTitle} UpData={this.UpDataMiddle} urlImage={this.ImageUrl} titleDown="Device B"/>
                </section>
                <section className="col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
                                <Stats labels={this.queue.devices["C"].values} value={this.state.answers["C"]} titleUp="Calendar" UpData={this.UpDataRight} titleDown="Device C" />
                </section>
            </div>
            </main>
        </Layout>
        );
    }

};

export default () => (
	<Fragment>
		<IndexPage />
		<style global jsx>{`
			.custom-control-label {
				background: transparent;
				color: #999;
				font-size: 2rem;
				font-weight: 500;
				cursor: pointer;
				line-height: 2.25rem;
			}
			.custom-control-label:before, .custom-control-label:after {
				top: 0;
				left: -10px;
				height: 2.25rem;
				width: 2.25rem;
				cursor: pointer;
				box-shadow: none !important;
			}
			.custom-control-label.checked {
				color: #007bff !important;
			}
			button.btn {
				letter-spacing: 1px;
				font-size: 1rem;
				font-weight: 600;
			}
		`}</style>
	</Fragment>
);