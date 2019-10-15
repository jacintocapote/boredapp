<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-12 col-12">

  <v-data-table
    :headers="headers"
    :items="activities"
    sort-by="key"
    class="elevation-1"
  >
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
  </v-data-table>

      <v-btn block color="red" class="white--text" @click="clearAll">Clear all</v-btn>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-data-table {
    width: 100%;
  }
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      singleSelect: true,
      selected: [],
      headers: [
        { text: '#', value: 'key', sortable: true },
        { text: 'Activity', value: 'activity', sortable: true },
        { text: 'Participants', value: 'participants', sortable: true },
        { text: 'Budget', value: 'budget' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
    }
  },
  computed: {
    activities() {
      return this.$store.state.activities
    }
  },
  methods: {
    clearAll() {
      this.$store.dispatch('clearActivities')
    },
    deleteItem(item) {
      this.$store.dispatch('deleteActivity', {activity: item})
    }
  }
});
</script>
