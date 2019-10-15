<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-card class="col-8">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="orange"
        >
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item key="0">
            <v-card flat color="basil">
              <Activity></Activity>
            </v-card>
          </v-tab-item>
          <v-tab-item key="1">
            <v-card flat color="basil">
              <MyList></MyList>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Activity from '@/components/Activity.vue';
import MyList from '@/components/MyList.vue';

export default Vue.extend({
  components: {
    Activity,
    MyList
  },
  data: () => {
    return {
      tab: null,
      items: [
        'Activities', 'My list',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
});
</script>
