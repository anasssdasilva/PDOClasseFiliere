
var ctx = document.getElementById('mycanvas').getContext('2d');

$.ajax({

    url: 'http://localhost/gestionpointage50/controller/gestionclasses.php',
    data: {op: 'hrap'},
    type: 'POST',
    success: function (data, textStatus, jqXHR) {
        var x = Array();
        var y = Array();
        data.forEach(function (e) {
            x.push(e.code);
            y.push(e.compte);
        });
        //alert(JSON.stringify(data));
        showGraph(x, y);
    },
    error: function (jqXHR, textStatus, errorThrown) {

    }
});
function showGraph(x, y) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: x,
            datasets: [{

                    data: y,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        generateLabels: function (chart) {
                            return chart.data.labels.map(function (label, i) {
                                return {
                                    text: label,
                                    fillStyle: chart.data.datasets[0].backgroundColor
                                };
                            });
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Nombres de classes par fili??res (graphe1):'
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Nombres de classes '}
                },
                x: {
                    title: {
                        display: true,
                        text: 'Fili??res '}
                }
            }
        }
    });
}
                     