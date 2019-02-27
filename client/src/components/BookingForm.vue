<template lang="html">
  <form id="booking-form" v-on:submit="handleSubmit">
		<h2>Add a new booking</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div class="formWrap">
			<label for="email">E-Mail:</label>
			<input type="text" id="email" v-model="email" />
		</div>
		<div class="formWrap">
			<label for="checkedIn">Checked In:</label>
			<input type="check-box" id="checkedIn" v-model="checkedIn" />
		</div>

		<input type="submit" value="Add" id="Add"/>
	</form>
</template>

<script>
import { eventBus } from '../main';
export default {
  name: "BookingForm"
  data(){
  return {
    name: "",
    email: "",
    checkedIn: true
  }
},
methods: {
  handleSubmit(event){
    event.preventDefault();

    const payload = {
      name: this.name,
      email: this.email,
      checkedIn: this.checkedIn
    };

    fetch("http://localhost:3000/api/bookings", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    }).then(response => {
        eventBus.$emit('guest-added');
    });
  }
}
}
</script>

<style lang="css" scoped>
</style>
