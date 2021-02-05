<template>
    <div>
        <div>
                  <!--display name of activity in the label -->
                <label class="label" for="date">What date did you practice art?</label>
                  <!-- use v-model to connect this input to dateString data -->
                <input id="date" class="date" type="date" v-model='dateString'>
                <small id="date-help" class="form-text text-muted">
                   Date must be today or in the past.
                </small>
        </div>
        <div class="form-group">
            <label class="form-label" for="hours">How many hours did you practice for?</label>
            <!--  use v-model to connect this input to hours data -->
            <input id="hours" class="form-control" type="number" min="0" max="24" v-model.number='hours'>
            <small id="hours-help" class="form-text text-muted">
                Enter a number of hours, more than 0, up to a maximum of 24
            </small>
        </div>
        <div class="form-group">
            <label class="form-label" for="type">What type?</label>

            <select class="form-control" v-model='type' name="">
                <option v-bind:key="type" v-for='type in types'>{{type}}</option>
            </select>
                    <!-- element use v-model to connect to the types -->
                    <!--  v-for to create option elements, one for each type -->
        </div>
        <div>
            <div class="form-label pb-2">What media?</div>

                <div class="form-check-inline">
                    <!--  v-model and v-bind media -->
                    <input id="media1" class="form-check-input" type="radio" v-bind:value='media_type.traditional' v-model='media'>
                    <label class="form-check-label" for="media1">{{media_type.traditional}} </label>
                </div>        
                <div class="form-check-inline">
                <!--  v-model and v-bind media -->
                    <input id="media2" class="form-check-input" type="radio" v-bind:value='media_type.digital' v-model='media'>
                    <label class="form-check-label" for="media2">{{media_type.digital}} </label>
                </div> <br>
        </div>
        <div>
            <div class="form-label pb-2">Status report?</div>
            <div class="form-check-inline">
                      <!-- v-model and v-bind media -->
                <input id='status1'  class="form-check-input" type="radio" v-model='status' v-bind:value= 'status_choice.completed'>
                <label class="form-check-label" for="status1">Completed</label>

                <input id='status1'  class="form-check-input" type="radio" v-model='status' v-bind:value= 'status_choice.notCompleted'>
                <label class="form-check-label" for="status2">Completed</label>
            </div>    
        </div>
        <div class="form-group">
            <label for="additional-input">Note: (Optional)</label>
            <input type="text" name="Additional-input" value="" class="form-control" rows="5"  v-model='additional_comment'>
        </div>
        <div>
            <button class="btn btn-primary mt-2" type="button" v-on:click='submit'>Add record</button>
        </div>



    </div>
  
</template>

<script>
export default {
    name: 'activityInputs',
    data(){
        return {
            dateString: '',
            hours: '',
            type: '',
            media: '',
            status: '',
            additional_comment: '',
            testvar: '',
            testvar1: '',
        
            

            
            types: ['Sketching', 'Drawing', 'Painting'],
            media_type: {
                traditional: 'Traditional',
                digital: 'Digital'
                },
            status_choice: {
                completed: 'Completed',
                notCompleted: 'Not Completed'
            }
        }
    },
    methods: {
        submit() {

            let date = new Date(this.dateString)
            console.log(date)
            this.error = []

            if(!this.dateString){
              return this.error.push('Please select valid Date.')
            }

            if(this.hours <= 0 || this.hours > 24 ){
              this.error.push('The number of hours must be greater than 0 and less than 24.')
            }

            if(!this.type){
              this.error.push('Select a type')
            }

            if(!this.media){
              this.error.push('Select a media.')
            }
            if(this.error.length == 0){

                let record = {
                    date: this.dateString,
                    hours: this.hours,
                    type: this.type,
                    media: this.media,
                    status: this.status,
                    additional_comments: this.additional_comment,
                }
                // on submit() activity record is activated, as with value of record.
                this.$emit('activity-added', record)

                this.hours = ''
                this.type = ''
                this.media= ''
                this.status = ''
                this.additional_comments = ''
                this.dateString = ''
              }
            }
        }
    }
        

</script>

<style>

</style>