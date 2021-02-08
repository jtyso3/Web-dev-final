import axios from 'axios'

const base_url = '/api/activity'

export default {

    // request to get activities api from sql database
    getAllActivities () {
        return axios.get(base_url).then(response =>{
            return response.data
        })
    },

    addActivity(record) {
        return axios.post(base_url, record).then(response =>{
            return response.data
        })
    },

    updateActivities(record) {
        return axios.patch(`${base_url}/${record.id}`, record).then( response =>{
            return response.data
        })
    },
    // deletes activity by id number. 
    deleteActivity(id) {
        return axios.delete(`${base_url}/${id}`).then( response => {
            return response.data
        })
    }
}