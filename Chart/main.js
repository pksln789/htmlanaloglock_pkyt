// first chart circle over all single year 
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("over-all-year-chart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    var chart = root.container.children.push(am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        // wheelX: "panX",
        // wheelY: "zoomX",
        innerRadius: am5.percent(5),
        startAngle: -90,
        endAngle: 180,
    }));


    // Data
    var data = [{
        category: "January",
        value: 80,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(3)
        }
    }, {
        category: "February",
        value: 35,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(4)
        }
    }, {
        category: "March",
        value: 92,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(5)
        }
    }, {
        category: "April",
        value: 68,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(8)
        }
    }, {
        category: "May",
        value: 28,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(11)
        }
    }, {
        category: "Jun",
        value: 56,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(12)
        }
    }, {
        category: "Jul",
        value: 47,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(14)
        }
    }, {
        category: "August",
        value: 25,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(15)
        }
    }, {
        category: "September",
        value: 78,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(1)
        }
    }, {
        category: "October",
        value: 68,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(2)
        }
    }, {
        category: "November",
        value: 48,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(3)
        }
    }, {
        category: "December",
        value: 60,
        full: 100,
        columnSettings: {
            fill: chart.get("colors").getIndex(8)
        }
    }];

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor




    // Create axes and their renderers
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
    var xRenderer = am5radar.AxisRendererCircular.new(root, {
        //minGridDistance: 50
    });

    xRenderer.labels.template.setAll({
        radius: 10
    });

    xRenderer.grid.template.setAll({
        forceHidden: true
    });

    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        min: 0,
        max: 100,
        strictMinMax: false,
        numberFormat: "#'%'",
        tooltip: am5.Tooltip.new(root, {})
    }));


    var yRenderer = am5radar.AxisRendererRadial.new(root, {
        minGridDistance: 10
    });

    yRenderer.labels.template.setAll({
        centerX: am5.p100,
        fontSize: 10,

    });

    yRenderer.grid.template.setAll({
        forceHidden: true
    });

    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: yRenderer
    }));

    yAxis.data.setAll(data);


    // Create series
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
    var series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        clustered: false,
        valueXField: "full",
        categoryYField: "category",
        fill: root.interfaceColors.get("alternativeBackground")
    }));

    series1.columns.template.setAll({
        width: am5.p100,
        fillOpacity: 0.08,
        strokeOpacity: 0,
        cornerRadius: 20
    });

    series1.data.setAll(data);


    var series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        categoryYField: "category"
    }));

    series2.columns.template.setAll({
        width: am5.p100,
        strokeOpacity: 0,
        tooltipText: "{category}: {valueX}%",
        cornerRadius: 40,
        templateField: "columnSettings"
    });

    series2.data.setAll(data);

    // Animate chart and series in
    // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
    series1.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);

}); // end am5.ready()

// second chart over all month 
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("month-wise-chart");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
    }));
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
    }));

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
        am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50
        })
    );

    var data = [{
        "year": "January",
        "europe": 4.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 1,
        "meast": 0.8,
    }, {
        "year": "February",
        "europe": 4.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 1,

    }, {
        "year": "March",
        "europe": 4.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 1,
        "meast": 0.8,

    }, {
        "year": "April",
        "europe": 4.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 1,
        "meast": 0.8,

    }, {
        "year": "May",
        "europe": 4.5,
        "namerica": 2.5,
        "asia": 2.1,

    }, {
        "year": "June",
        "europe": 4.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 1,
        "meast": 0.8,
        "up": 0.8,
        "rp": 2.3,
        "cp": 1.3
    }, {
        "year": "July",
        "europe": 4.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 1,
        "meast": 0.8,

    }, {
        "year": "August",
        "europe": 4.5,
        "namerica": 2.5,

        "kp": 5.3,
        "rp": 2.3,
        "cp": 1.3
    }, {
        "year": "September",
        "europe": 4.5,
        "namerica": 2.5,
        "kp": 5.3,
        "rp": 2.3,
        "cp": 1.3
    }, {
        "year": "October",
        "europe": 4.5,
        "namerica": 2.5,
        "kp": 5.3,
        "rp": 2.3,
        "cp": 1.3
    }, {
        "year": "November",
        "europe": 4.5,
        "namerica": 2.5,
        "kp": 5.3,
        "rp": 2.3,
        "cp": 1.3
    }, {
        "year": "December",
        "europe": 4.5,
        "namerica": 2.5,
        "kp": 5.3,
        "rp": 2.3,
        "cp": 1.3
    }]


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
        cellStartLocation: 0.1,
        cellEndLocation: 0.9
    })

    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
        location: 1
    })

    xAxis.data.setAll(data);

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1
        })
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: fieldName,
            categoryXField: "year"
        }));

        series.columns.template.setAll({
            tooltipText: "{name}, {categoryX}:{valueY}",
            width: am5.percent(90),
            tooltipY: 0,
            strokeOpacity: 0
        });

        series.data.setAll(data);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();

        series.bullets.push(function() {
            return am5.Bullet.new(root, {
                locationY: 0,
                sprite: am5.Label.new(root, {
                    text: "{valueY}",
                    fill: root.interfaceColors.get("alternativeText"),
                    centerY: 0,
                    centerX: am5.p50,
                    populateText: true
                })
            });
        });

        // legend.data.push(series);
    }

    makeSeries("", "europe");
    makeSeries(" America", "namerica");
    makeSeries("", "asia");
    makeSeries("", "lamerica");
    makeSeries("Middle East", "meast");
    makeSeries("uttar Pradesh", "up");
    makeSeries("madhy Pradesh", "mp");
    makeSeries("", "dp");
    makeSeries("", "kp");
    makeSeries("", "rp");
    makeSeries("", "cp");
    makeSeries("Africa", "africa");


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

}); // end am5.ready(

// third chart about good-news-report
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("good-news-chart");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
        layout: root.verticalLayout
    }));


    // series.get("colors").set("colors", [
    //     am5.color(0x095256),
    //     am5.color(0x087f8c),
    //     am5.color(0x5aaa95),
    //     am5.color(0x86a873),
    //     am5.color(0xbb9f06)
    // ]);
    // series.get("fill", am5.color(0xff0000)); // set Series color to red


    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
        alignLabels: true,
        calculateAggregates: true,
        valueField: "value",
        categoryField: "category"
    }));

    series.slices.template.setAll({
        strokeWidth: 3,
        stroke: am5.color(0xffffff)
    });

    series.labelsContainer.set("paddingTop", 30)


    // Set up adapters for variable slice radius
    // https://www.amcharts.com/docs/v5/concepts/settings/adapters/
    series.slices.template.adapters.add("radius", function(radius, target) {
        var dataItem = target.dataItem;
        var high = series.getPrivate("valueHigh");

        if (dataItem) {
            var value = target.dataItem.get("valueWorking", 0);
            return radius * value / high
        }
        return radius;
    });


    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([{
        value: 15,
        category: "Jan"
    }, {
        value: 12,
        category: "Feb"
    }, {
        value: 12,
        category: "Mar"
    }, {
        value: 9,
        category: "Apr"
    }, {
        value: 13,
        category: "May"
    }, {
        value: 9,
        category: "Jun"
    }, {
        value: 11,
        category: "Jul"
    }, {
        value: 7,
        category: "Aug"
    }, {
        value: 14,
        category: "Sep"
    }, {
        value: 16,
        category: "Oct"
    }, {
        value: 8,
        category: "Nov"
    }, {
        value: 13,
        category: "Dec"
    }]);


    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        marginTop: 15,
        marginBottom: 15,
        layout: am5.GridLayout.new(root, {
            maxColumns: 4,
            fixedWidthGrid: true
        })
    }));

    legend.data.setAll(series.dataItems);


    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);

});

// change page

function showPage(pageID) {
    const page1 = document.getElementById("incident-page");
    const page2 = document.getElementById("good-news-page");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    if (pageID === 1) {
        page1.style.display = "block";
        page2.style.display = "none";
        button1.classList.add("active");
        button2.classList.remove("active");
    } else if (pageID === 2) {
        page1.style.display = "none";
        page2.style.display = "block";
        button1.classList.remove("active");
        button2.classList.add("active");
    }
}

// function showPage(buttonId) {
//     var x = document.getElementById("textreport");
//     if (buttonId === 1) {
//         x.innerHTML = "Incident Report";
//     } else if (buttonId === 2) {
//         x.innerHTML = "Good News Report";
//     }
// }