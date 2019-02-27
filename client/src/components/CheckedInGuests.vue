<template lang="html">
  <div id="CheckedInGuests">
    <div class="guests" v-for="guest in guests">
      <h3>{{guest.name}}</h3>
      <h4>{{guest.email}}</h4>
      <p>{{guest.checkedin}}</p>
      <!-- <button v-on:click="handleDelete(guest._id)">Delete Guest</button> -->
    </div>

  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  name: "CheckedinGuests"
  props: ["guests"]
}
</script>

<style lang="css" scoped>
</style>
