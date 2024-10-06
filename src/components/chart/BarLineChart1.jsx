import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


const BarLineChart1 = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    const chart = am4core.create("barlineChart1", am4charts.XYChart);

    // Add data
    chart.data = [{
        "country": "00",
        "litres": 8000.9,
        "units": 6000
    }, {
        "country": "01",
        "litres": 12000.0,
        "units": 5000
    }, {
        "country": "02",
        "litres": 7000.9,
        "units": 2000
    }, {
        "country": "03",
        "litres": 3000.0,
        "units": 1000
    }, {
        "country": "04",
        "litres": 10000.0,
        "units": 5000
    }, {
        "country": "05",
        "litres": 7000.0,
        "units": 2000
    }, {
        "country": "06",
        "litres": 5000.9,
        "units": 1000
    }, {
        "country": "07",
        "litres": 8000.9,
        "units": 6000
    }, {
        "country": "08",
        "litres": 12000.0,
        "units": 4000
    }, {
        "country": "09",
        "litres": 8000.9,
        "units": 6000
    }, {
        "country": "10",
        "litres": 10000.0,
        "units": 5000
    }, {
        "country": "11",
        "litres": 8000.9,
        "units": 6000
    }, {
        "country": "12",
        "litres": 8000.9,
        "units": 6000
    }, {
        "country": "13",
        "litres": 10000.0,
        "units": 2000
    }, {
        "country": "14",
        "litres": 8000.9,
        "units": 6000
    }, {
        "country": "15",
        "litres": 12000.0,
        "units": 3000
    }, {
        "country": "16",
        "litres": 10000.0,
        "units": 5000
    }, {
        "country": "17",
        "litres": 10000.0,
        "units": 3000
    }, {
        "country": "18",
        "litres": 17000.0,
        "units": 8000
    }, {
        "country": "19",
        "litres": 8000.9,
        "units": 6000
    }, {
        "country": "20",
        "litres": 10000.0,
        "units": 5000
    }, {
        "country": "21",
        "litres": 8000.0,
        "units": 4000
    }, {
        "country": "22",
        "litres": 3000.0,
        "units": 800
    }, {
        "country": "23",
        "litres": 8000.0,
        "units": 2000
    }];

    chart.width = am4core.percent(100);
    chart.height = am4core.percent(115);
    chart.paddingLeft = -10;
    chart.paddingRight = 0;
        
    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.grid.template.disabled = true;
    //categoryAxis.dataFields.category = category;
    categoryAxis.renderer.labels.template.fontSize = 12;
    categoryAxis.renderer.fullWidthTooltip = false;
    categoryAxis.adapter.add("getTooltipText", undefined);
    categoryAxis.dataFields.max = 11000;
    
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 12000;
    valueAxis.renderer.labels.template.fontSize = 12;
    valueAxis.min = 0;
    //valueAxis.max = maxDataValue;
    valueAxis.strictMinMax = true;
    valueAxis.adapter.add("getTooltipText", undefined);
    
    // Create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "Income(PHP)";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.fill = am4core.color("#0068E6");
    series.columns.template.width = am4core.percent(70);
    
    const series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "units";
    series2.dataFields.categoryX = "country";
    series2.name = "Last week's Income(PHP)";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    series2.columns.template.fill = am4core.color("#00B8E6");
    series2.columns.template.width = am4core.percent(70);


    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true; // X축 커서 선 비활성화
    chart.cursor.lineY.disabled = true; // Y축 커서 선 비활성화

    chart.cursor.tooltipText = "";
    chart.cursor.tooltip.disabled = true;
    chart.cursor.visible = false; // XYCursor의 가시성을 false로 설정
    
    chart.legend = new am4charts.Legend();
    chart.legend.markers.template.width = 10;
    chart.legend.markers.template.height = 10;
    chart.legend.labels.template.fontSize = 12;
    chart.legend.itemContainers.template.paddingTop = 0;
    chart.legend.itemContainers.template.paddingBottom = 5;
    chart.legend.itemContainers.template.paddingLeft = 0;
    chart.legend.itemContainers.template.paddingRight = 0;

    //@ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'barlineChart1'} style={{ width: "100%", height: "100%", fontSize:"0.75rem"}}/>
  );
}

export default BarLineChart1;

