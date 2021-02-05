<template>
    <div>
        <table>
            <tr>
                <th>Date</th>
                <th>Hours</th>
                <th>Type</th>
                <th>Media</th>
                <th>Status</th>
                <th>Additional Comments</th>
            </tr>
            
            <activityRecordRow
            ></activityRecordRow>
          
        </table>
    </div>


</template>

<script>
import activityRecordRow from './activityRecordRow'
export default {
    name: 'activityTable',
    components:{
        activityRecordRow
    }

}
</script>

<style>

</style>