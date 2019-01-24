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

var barChartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
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
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};
export { lineChartData, lineChartOption, barChartData, barChartOption };
