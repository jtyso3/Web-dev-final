<template>
  <div id='app'>
    
    <activityInputs v-on:activity-added="newActivityAdded"> </activityInputs>

    <!--  activity table uses activityRecordRow as component-->
    <activityTable 
    v-bind:records="records"
    v-bind:record="record"
    v-on:delete-activity='recordDeleted'
    ></activityTable>

    <activityChart 
      v-bind:records="records"
      v-bind:totalHours="totalHours"
    ></activityChart>
  </div> 
</template>

<script>

import activityInputs from './components/activityInputs'
import activityTable from './components/activityTable'
import activityChart from './components/activityChart'

export default {
  name: 'app',
  components: {
    activityInputs,
    activityTable,
    activityChart
  },
  data (){
    return{
        records: [], // used to create table data. 
        record: '' ,
        totalHours: {}
    }
  },
  mounted(){
    // update activity table on start up. 
    this.updateActivities()
  },
  methods:{
    newActivityAdded(record){
      this.$activity_api.addActivity(record).then((record)=>{
        this.updateActivities()
      })
    },
    recordDeleted(record) {
      // record.id is parameter used the specify the unique entry to be deleted. 
      this.$activity_api.deleteActivity( record.id ).then( () => {
        // clears record var to stop it from builing up 
        this.record = ''
        // updates table with del activity selected gone.
        this.updateActivities()  
      })
    },
    
    totalSketchHours(records){
          let sketchingHours = 0
          records.forEach( activityObject => {
            if (activityObject.activityType == "Sketching") {
              sketchingHours += activityObject.hours
              this.totalHours.sketch = sketchingHours
            }
          })
      },
      totalPaintHours(records){
        let paintingHours = 0
        records.forEach( activityObject =>{
          if (activityObject.activityType == "Painting"){
            paintingHours += activityObject.hours
            this.totalHours.paint = paintingHours 
          }
        })
      },
      totalDrawHours(records){
        let drawingHours = 0
        records.forEach( activityObject =>{
          if (activityObject.activityType == "Drawing"){
            drawingHours += activityObject.hours
            this.totalHours.draw = drawingHours
            }
          })
        },
      updateActivities(){
        this.$activity_api.getAllActivities().then( records =>{
          this.records = records
          this.totalDrawHours(records)
          this.totalPaintHours(records)
          this.totalSketchHours(records)
      })
    }

  }
}
</script>

<style>

</style>
