<template lang="html">
  <div id="app">
    <booking-form></booking-form>
    <checked-in-guests :guests="guests"></checked-in-guests>
  </div>
</template>

<script>
import BookingForm from './components/BookingForm';
import CheckedInGuests from './components/CheckedInGuests';
import { eventBus } from './main';
export default {
  name: 'app',
  data () {
    return {
      guests: []
    }
  },
  components: {
    CheckedInGuests,
    BookingForm
  },
  mounted(){
    this.fetchData();
    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    })
    eventBus.$on('delete_guest', (id) => {
      this.guests = this.guests.filter(guest => guest._id !== id)
    })
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(guests => this.guests = guests);
    }
  }
}
</script>
<style lang="css">
  body {

  }
</style>

<style>
html {
  height: 100%;
}

body {
  /* background: url('./assets/images.jpeg') no-repeat; */
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
