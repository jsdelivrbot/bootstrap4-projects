$(document).ready(function(){

    // when page is loaded, remove the loading
    $('.loading').remove();

    $('[data-toggle="tooltip"]').tooltip();

    $('.round-chart').easyPieChart({
        'scaleColor': false,
        'lineWidth': 20,
        'lineCap': 'butt',
        'barColor': '#6d5cae',
        'trackColor': '#e5e9ec',
        'size': 190
    });

    $('#performance-eval .spider-chart').highcharts({
        chart: {
            polar: true,
            type: 'area'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Taming', 'Acessory', 'Development', 'Grooming', 'Awareness', 'Ration'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },
        series: [
            {
            name: 'Allocated resources',
            data: [45000, 39000, 58000, 63000, 38000, 93000],
            pointPlacement: 'on',
            color: '#676F84'
            },
            {
            name: 'Spent resources',
            data: [83000, 49000, 60000, 35000, 77000, 90000],
            pointPlacement: 'on',
            color: '#f35958'
        }]
    });

    // switchery plugin loading
    var elems, switcheryOpts;
    elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));
    switcheryOpts = {
        color: '#1bc98e'
    };
    elems.forEach(function(e){
        var switchery = new Switchery(e, switcheryOpts);
    });

    // real-time 
    changeMultiplier = 0.2;
    window.setInterval(function() {
        var freeSpacePercentage;
        freeSpacePercentage = $('#free-space').text();
        freeSpacePercentage = parseFloat(freeSpacePercentage);

        delta = changeMultiplier * (Math.random() < 0.5 ? -1.0 : 1.0);

        freeSpacePercentage = freeSpacePercentage + freeSpacePercentage * delta;
        freeSpacePercentage = parseFloat(freeSpacePercentage);

        $('#free-space').text(freeSpacePercentage + '%');
    }, 2000);

    // daily-usage
    $('#daily-usage .area-chart').highcharts({
        title: {text: ''},
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions : {
            pie: {
                dataLabels: {
                    enabled: true,
                    style: {fontWeight: '300'}
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Time share',
            data: [
            ['Front yard', 10.38],
            ['Closet', 26.33],
            ['Swim pool', 51.03],
            ['Like a boss', 4.77],
            ['Barking', 3.93]
            ]
        }]
    });
});
