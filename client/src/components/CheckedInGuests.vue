<template lang="html">
  <div id="CheckedInGuests">
    <div class="guests" v-for="(guest, index) in guests" index="id">
      <h3>Guest Namae: {{guest.name}}</h3>
      <h4>Guest E-mail: {{guest.email}}</h4>
      <p>Status: {{guest.checkedIn ? "Checked In":"Not Checked in"}}</p>
      <button type="button" v-on:click="guestDelete(guest._id)">Delete Guest</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  name: "CheckedinGuests",
  props: ["guests"],
  methods: {
    guestDelete(id){
      fetch('http://localhost:3000/api/bookings/' + id, {
        method: "DELETE"
      })
      .then(() => eventBus.$emit('delete_guest', id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
