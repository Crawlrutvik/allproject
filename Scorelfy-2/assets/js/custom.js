var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Series 1',
            data: [5, 3, 6, 5, 4.6],
            fill: false,
            borderColor: '#ff0000',
            backgroundColor: '#2196f3',
            borderWidth: 1
        },{
            data: [3,7,2,5,6,4,2],
            borderColor: "blue",
            fill: false
          }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});