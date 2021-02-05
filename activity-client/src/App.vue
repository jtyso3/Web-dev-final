<template>
  <div id='app'>
    
    <activityInputs v-on:activity-added="newActivityAdded"> </activityInputs>

    <activityTable></activityTable>
  </div> 
</template>

<script>

import activityInputs from './components/activityInputs'
import activityTable from './components/activityTable'

export default {
  name: 'app',
  components: {
    activityInputs,
    activityTable,
  },
  data (){
    return{
        records: [],
    }
  },
  mounted(){
    this.updateActivites()
  },
  methods:{
    
    newActivityAdded(record){
      this.$activity_api.addActivity(record).then((record)=>{
        this.updateActivites()
      }).catch( (err) =>{
        let msg=err.response.data.join(', ')
        alert('Error adding student. \n' + msg)
      })
    },
    updateActivites(){
      this.$activity_api.getAllActivities().then( records =>{
      this.records = records
      })
    }

  }
}
</script>

<style>

</style>
