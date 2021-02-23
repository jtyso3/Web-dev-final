<template>
    <div>
        <div>
        <table class="table">
            <tr>
                <th>Record ID</th>
                <th>Date</th>
                <th>Hours</th>
                <th>Type</th>
                <th>Media</th>
                <th>Status</th>
                <th>Additional Comments</th>
                <th>Delete Entry</th>
            </tr>
            <activityRecordRow  
                v-bind:key="record.dateString" v-for="record in records"
                v-on:delete-activity="studentDeleted"
                v-bind:record="record"
            ></activityRecordRow>
          
        </table>
        </div>
    </div>


</template>

<script>
import activityRecordRow from './activityRecordRow'
export default {
    name: 'activityTable',
    components:{
        activityRecordRow
    },
    data(){
        return{
            test: '',
            record: '',
           
        }
    },
    props: {
        records: Array
    },
    methods: {
        studentDeleted(record) {
            this.test = record
            this.$emit('delete-activity', record)
        }
    }

}
</script>

<style>

</style>