<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-12">
      <v-col class="col-12" sm="8">
        <v-card v-if="title" align="left" justify="center">
          <v-col class="d-flex" cols="12" sm="12">
            <v-card-text>
              <h2>You should:</h2>
            </v-card-text>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12">
            <v-textarea
              name="title"
              readonly
              v-model="title"
              :value="this.$store.state.activity"
              outlined
            ></v-textarea>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12">
            <v-btn color="red" class="white--text" block @click="SaveActivity">Save for later</v-btn>
          </v-col>
        </v-card>
        <v-card v-else>
          <v-card-text>
            <h2>Not results with your parameters.</h2>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="col-12" sm="4">
        <v-card>
          <h4>Activity details:</h4>
          <v-col class="d-flex" cols="12" sm="12">
            <v-select
              :items="types"
              v-model="type"
              label="Type"
              outlined
            ></v-select>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12">
            <v-text-field
              v-model="participants"
              label="Participants"
              type="number"
              outlined
            />
          </v-col>
          <v-subheader>Budget</v-subheader>
          <v-col class="d-flex" cols="12" sm="12">
            <v-slider
              :tick-labels="budgets"
              min="0"
              max="10"
              tick-size="1"
              v-model="budget"
            >
            </v-slider>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12" align="center" justify="center">
            <v-btn block color="primary" @click="fetchNewActivity">Hit me with a new one!</v-btn>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-textarea {
    font-size: 1.2em;
    font-weight: bold;
  }
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
  console.log(this.$store.state.activity)
    return {
      types: [
        "education",
        "recreational",
        "social",
        "diy",
        "charity",
        "cooking",
        "relaxation",
        "music",
        "busywork"
      ],
      budgets: [
        'cheap',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'expensive'
      ],
      type: this.$store.state.type,
      participants: this.$store.state.participants,
      budget: this.$store.state.budget,
    }
  },
  created() {
    this.fetchActivity()
  },
  computed: {
    title() {
      return this.$store.state.activity.activity
    }
  },
  methods: {
    SaveActivity() {
      this.$store.dispatch('saveActivity')
    },
    fetchActivity() {
      this.$store.dispatch('getActivity')
    },
    fetchNewActivity() {
      this.$store.dispatch('getNewActivity', {'type': this.type, 'participants': this.participants, 'budget': this.budget})
    }
  }
});
</script>
