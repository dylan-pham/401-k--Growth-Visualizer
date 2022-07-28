import React, { useState } from "react";
import Chart from "react-apexcharts";

function App() {
  let [options, setOptions] = useState(
    {
      xaxis: {
        categories: []
      }
    },
  )

  let [series, setSeries] = useState(
    [
      {
        data: []
      }
    ]
  )

  let updateChart = (years) => {
    if (years == null) {
      return;
    }

    setOptions({xaxis: {categories: [...Array(parseInt(years) + 1).keys()]}});

    let series = [];

    let dividendsReinvestedList = [];
    let dividendsNotReinvestedList = [];
    for (let i = 0; i < parseInt(years) + 1; i++) {
      dividendsReinvestedList.push(parseInt(Math.round(20000 * (1.115)**i)));
      dividendsNotReinvestedList.push(parseInt(Math.round(20000 * 1.1**i)));
    }

    series.push({name: "dividends reinvested", data: dividendsReinvestedList});
    series.push({name: "dividends not reinvested", data: dividendsNotReinvestedList})

    setSeries(series);
  }

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="line"
            width="500"
          />
        </div>
      </div>
      <input id="years"></input>
      <button onClick={() => updateChart(document?.getElementById('years')?.value)}>submit</button>
    </div>
  );
}

export default App;