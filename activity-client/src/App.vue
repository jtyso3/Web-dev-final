<template>
  <div id='app'>
    
    <activityInputs v-on:activity-added="newActivityAdded"> </activityInputs>

    <!--  activity table uses activityRecordRow as component-->
    <activityTable 
    v-bind:records="records"
    v-bind:record="record"
    v-on:delete-activity='recordDeleted'
    ></activityTable>
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
        records: [], // used to create table data. 
        record: ''  
    }
  },
  mounted(){
    // update activity table on start up. 
    this.updateActivities()
  },
  methods:{
    
    newActivityAdded(record){
      this.$activity_api.addActivity(record).then((record)=>{
<<<<<<< HEAD
        this.updateActivities()
=======
        this.updateActivites()
      }).catch( (err) =>{
        let msg=err.response.data.join(', ')
        alert('Error adding student. \n' + msg)
>>>>>>> 11e3ba504e505b0eb81d7887326ace748da222ff
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
    updateActivities(){
      this.$activity_api.getAllActivities().then( records =>{
      this.records = records
      })
    }

  }
}
</script>

<style>

</style>
