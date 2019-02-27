<template lang="html">
  <form id="booking-form" v-on:submit="handleSubmit">
		<h2>Add a new booking</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" required />
		</div>
		<div class="formWrap">
			<label for="email">E-Mail:</label>
			<input type="text" id="email" v-model="email" required />
		</div>
		<div class="formWrap">
      <label for="checkedIn">Checked In:</label>
      <input type="checkbox" v-model="checkedIn">
    </div>

		<input type="submit" value="Add" id="Add"/>
	</form>
</template>

<script>
import { eventBus } from '../main';
export default {
  name: "BookingForm",
  data(){
  return {
    name: "",
    email: "",
    checkedIn: false
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
    })
    .then(res => res.json())
		.then(res => eventBus.$emit('guest-added', res))
  }
 }
}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>
