<template>
        <tr>
            <td>{{record.id}}</td>
            <td>{{record.date}}</td>
            <td>{{record.hours}}</td>
            <td>{{record.activityType}}</td>
            <td>{{record.media}}</td>
            <td>{{record.status}}</td>
            <td>{{record.additional_Comments}}</td>
            <td>
                <img class="delete-icon" v-on:click="deleteActivity" src="@/assets/delete.png">
            </td>
        </tr>
</template>

<script>
export default {
    name: 'activityRecordRow',
    props: {
        record: Object
    },
    data (){
        return{
            hours: '',
        }
    },
    methods: {
        deleteActivity() {
            this.$emit('delete-activity', this.record)
            }
    }
}
</script>

<style>

</style>