<template lang="html">
  <div id="CheckedInGuests">
    <div class="guests" v-for="(guest, index) in guests" index="id">
      <h3>Guest Name: {{guest.name}}</h3>
      <h3>Guest E-mail: {{guest.email}}</h3>
      <label>Checked in:</label>
      <p>Status: {{guest.checkedIn ? "Checked In":"Not Checked in"}}</p>
      <input type="checkbox"
             v-model="guest.checkedIn"
             v-on:change="changeCheckedIn(guest._id, guest.checkedIn)">
      <button v-on:click="guestDelete(guest._id)">Delete Guest</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  data () {
    return {
      guestsList: []
    }
  },
  name: "CheckedinGuests",
  props: ["guests"],
  methods: {
    guestDelete(id){
      fetch('http://localhost:3000/api/bookings/' + id, {
        method: "DELETE"
      })
      .then(() => eventBus.$emit('delete_guest', id))
    },
    changeCheckedIn(id, checkedStatus){

      const newData = {
        checkedIn: checkedStatus
      }

      fetch("http://localhost:3000/api/bookings/" + id, {
        method: 'PUT',
        body: JSON.stringify(newData),
        headers: { "Content-Type": "application/json" }
      })
    }
  }
}

</script>

<style lang="css" scoped>
#CheckedInGuests {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h3 {
	padding: 0;
	margin: 0;
}

.guests {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}
</style>
