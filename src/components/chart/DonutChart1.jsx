import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const DonutChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    const chart = am4core.create("chartDonut1", am4charts.PieChart);

    chart.y = 0;
    chart.x = 0;
    chart.hiddenState.properties.opacity = 0;
    //chart.data = data;
    chart.width = am4core.percent(90);
    chart.height = am4core.percent(110);
    chart.innerRadius = am4core.percent(40);

    chart.legend = new am4charts.Legend();
    chart.legend.markers.template.width = 14;
    chart.legend.markers.template.height = 14;
    chart.legend.itemContainers.template.paddingTop = 5;
    chart.legend.itemContainers.template.paddingBottom = 5;
    chart.legend.fontSize = 12;
    chart.legend.position = "right";
    chart.legend.valign = "middle";
    chart.legend.valueLabels.template.disabled = true;

    // Add pieSeries
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = false;

    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 0;
    pieSeries.slices.template.strokeOpacity = 0;
    pieSeries.slices.template.cursorOverStyle = [
      {
        "property": "cursor",
        "value": "pointer"
      }
    ];

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover");

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    chart.data = [{
      "country": "Label",
      "litres": 130.9,
      "color": am4core.color("#A080FF")
    }, {
      "country": "Label",
      "litres": 150.8,
      "color": am4core.color("#0068E6")
    }, {
      "country": "Label",
      "litres": 50.0,
      "color": am4core.color("#00B8E6")
    }, {
      "country": "Label",
      "litres": 20.0,
      "color": am4core.color("#77E5CB")
    }];

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'chartDonut1'} style={{ fontSize:"0.75rem" }} />
  );
}

export default DonutChart1;