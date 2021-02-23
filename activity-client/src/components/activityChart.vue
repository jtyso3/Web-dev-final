
<script>
import {Doughnut} from 'vue-chartjs'


export default {
    extends: Doughnut,
    name: "activityChart",
    props:{
      totalHours: Object
    },
    data(){
        return {
        chartOptions: {
            hoverBorderWidth: 20, 
            responsive: true,
            maintainAspectRatio: false
        },
        chartData: {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels: ["Painting", "Drawing", "Sketching"],
            datasets: [
                {
                data: [this.totalHours.paint, this.totalHours.draw, this.totalHours.sketch], // need to add total hours of each category
                label: " Total Hours",
                backgroundColor: ["#41B883", "#E46651", "#00D8FF"]
                }
            ]
        },
      }
    },
    mounted(){
      this.renderChart(this.chartData, this.chartOptions)
    },   
}
</script>

