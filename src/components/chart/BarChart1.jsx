import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const BarChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    const chart = am4core.create("scopeChart1", am4charts.XYChart);
    chart.padding(0, 0, 0, 0);

    chart.data = [{
        "scope": "Label1",
        "income": 13600,
        "color": am4core.color("#A080FF"),
    }, {
        "scope": "Label2",
        "income": 13600,
        "color": am4core.color("#0068E6"),
    }, {
        "scope": "Label3",
        "income": 11800,
        "color": am4core.color("#00B8E6"),
    }, {
        "scope": "Label4",
        "income": 8000,
        "color": am4core.color("#77E5CB"),
    }];

    // Create axes
    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());

    categoryAxis.dataFields.category = "scope";
    categoryAxis.marginRight = 10;
    categoryAxis.renderer.grid.template.location = 0;
    //categoryAxis.dataFields.category = category;
    categoryAxis.renderer.minGridDistance = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.cellStartLocation = 0;
    categoryAxis.renderer.cellEndLocation = 0.8;

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.minGridDistance = 100;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.line.strokeOpacity = 0;
    valueAxis.renderer.baseGrid.disabled = true;

    // Create series
    function createSeries(field, name) {

        const series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "scope";
        series.name = name;
        series.columns.template.tooltipText = "{name} [bold]{valueX}[/]";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.height = am4core.percent(90);
        series.columns.template.propertyFields.fill = "color";

        // column corner radius 설정
        series.columns.template.column.cornerRadiusBottomRight = 4;
        series.columns.template.column.cornerRadiusBottomLeft = 4;
        series.columns.template.column.cornerRadiusTopRight = 4;
        series.columns.template.column.cornerRadiusTopLeft = 4;

        // 시리즈의 색상과 배경색상 적용
        series.columns.template.column.padding(4, 4, 4, 4);
        series.columns.template.background.fill = am4core.color("#F0F2F5");
        series.columns.template.background.minWidth = 20000;
        series.columns.template.background.minHeight = 25;

        // valueLabel
        const valueLabel = series.bullets.push(new am4charts.LabelBullet());
        valueLabel.label.text = "{valueX}";
        valueLabel.label.horizontalCenter = "left";
        valueLabel.label.dx = 2;
        valueLabel.label.hideOversized = false;
        valueLabel.label.truncate = false;
    }

    createSeries("income");

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'scopeChart1'} style={{ width: "100%", height: "100%", fontSize:"0.75rem"}}/>
  );
}

export default BarChart1;