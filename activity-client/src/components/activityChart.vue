<template>
    
</template>

<script>
import {Doughnut } from 'vue-chartjs'
export default {
    data() {
        return {
        chartOptions: {
            hoverBorderWidth: 20
        },
        chartData: {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels: ["Green", "Red", "Blue"],
            datasets: [
                {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                data: [1, 10, 5]
                }
            ]
        }
    };
  }    
}
</script>

import { Doughnut, mixins } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["data", "options"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px"
    });
  }
};