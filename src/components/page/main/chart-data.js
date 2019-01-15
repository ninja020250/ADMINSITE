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
export {lineChartData, lineChartOption};