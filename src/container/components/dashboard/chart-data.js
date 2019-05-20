var barChartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      borderSkipped: 50,
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#f49c11",
        "#f49c11",
        "#f49c11",
        "#f49c11",
        "#f49c11",
        "#f49c11"
      ],

      borderWidth: 1
    },
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#5f48b6 ",
        "#5f48b6 ",
        "#5f48b6 ",
        "#5f48b6 ",
        "#5f48b6 ",
        "#5f48b6 "
      ],
      borderWidth: 1
    }
  ]
};

var barChartOption = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        display: true,
        // ticks: {
        //   beginAtZero: true
        // },
        gridLines: {
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: true,
        gridLines: {
          drawBorder: false,
          drawOnChartArea: false
        }
      }
    ]
  },
  legend: {
    display: false
  }
};
var lineChartData = {
  labels: ["January", "February", "April", "June", "August", "October"],
  datasets: [
    {
      pointBackgroundColor: "rgba(255,255,255,0)",
      pointBorderColor: "rgba(255,255,255,0)",
      pointHoverBackgroundColor: "rgba(255,255,255,1)",
      label: "# of Votes",
      data: [0, 5, 2, 7, 4, 10],
      backgroundColor: ["rgba(255, 255, 255, 0.2)"],
      borderColor: ["rgba(255, 255, 255, 0.5)"],
      borderWidth: 2
    }
  ]
};
var lineChartOption = {
  responsive: true,
  // maintainAspectRatio: false,
  tooltips: {
    xPadding: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    bodyFontColor: "#333",
    titleFontColor: "#333",
    callbacks: {
      label: function(tooltipItem) {
        return Number(tooltipItem.yLabel) + "%";
      }
    }
  },
  legend: false,

  scales: {
    yAxes: [
      {
        display: false,
        // ticks: {
        //   beginAtZero: true
        // },
        gridLines: {
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: false,
        gridLines: {
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  }
};

const lineChartDoubleData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      pointBackgroundColor: "rgba(255,255,255,0)",
      pointBorderColor: "rgba(255,255,255,0)",
      pointHoverBackgroundColor: "rgba(255,255,255,1)",
      label: "product",
      data: [2, 4, 8, 4, 1, 2, 4],
      backgroundColor: ["rgba(255,255,255,0)"],
      borderColor: ["#00bd12"],
      borderWidth: 5
    },
    {
      pointBackgroundColor: "rgba(255,255,255,0)",
      pointBorderColor: "rgba(255,255,255,0)",
      pointHoverBackgroundColor: "#00d8ff",
      label: "Stock",
      data: [0, 5, 2, 3, 6, 2, 1],
      backgroundColor: ["rgba(255,255,255,0)"],
      borderColor: ["#0084ea"],
      borderWidth: 5
    }
  ]
};

const lineChartDoubleOption = {
  legend: false,
  legendCallback: function(chart) {
    var text = [];
    text.push('<ul className="' + chart.id + '-legend" style="list-style-type: none;">');
    for (var i = 0; i < chart.data.datasets.length; i++) {
      text.push(
        `<li style=" margin: 10px;    display: inline;"><span style="background: 
            ${chart.data.datasets[i].borderColor[0]}; width: 8px; height: 12px " className="badge"> </span>
            <span>${chart.data.datasets[i].label}</span></li>`
      );
      // if (chart.data.datasets[i].label) {
      //   text.push(chart.data.datasets[i].label);
      // }
      // text.push("</span></li>");
    }
    text.push("</ul>");
    return text.join("");
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};
export {
  lineChartData,
  lineChartOption,
  barChartData,
  barChartOption,
  lineChartDoubleData,
  lineChartDoubleOption
};
