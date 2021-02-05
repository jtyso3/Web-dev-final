<template>
    <div>
        <tr>
            <td>{{records.dateString}}</td>
            <td>{{records.hours}}</td>
            <td>{{records.type}}</td>
            <td>{{records.media}}</td>
            <td>{{records.status}}</td>
            <td>{{records.additional_comment}}</td>
        </tr>
    </div>
</template>

<script>
export default {
    name: 'activityRecordRow',
    data(){
        return{
            records: ''
        }
        
    },
    methods: {
        showRecord (record) {
            this.records = record
        }
    }
    
}
</script>

<style>

</style>