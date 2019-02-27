<template lang="html">
  <div id="app">
    <h1>Hello World!</h1>
    <checked-in-guests :guests="guests"></checked-in-guests>
  </div>
</template>

<script>
export default {
  name: 'app'
  data () {
    return {
      guests: []
    }
  },
  components: {
    CheckedInGuests
  },
  mounted(){
    this.fetchData();
    eventBus.$on('guest-added', (guest) => {
      this.bookings.push(guest)
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

<style lang="css" scoped>
</style>
