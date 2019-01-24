<template>
  <Page>
    <ActionBar title="List View">
      <NavigationButton
        text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>

    <ListView for="item in items" @itemTap="onItemTap">
      <v-template>
        <Label :text="item.text" />
      </v-template>

      <v-template if="$odd">
        <!-- For items with an odd index, shows the label in red. -->
        <Label :text="item.text" color="red" />
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import * as Toast from 'nativescript-toast';
/* global action */

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          text: 'Click Me',
        },
        {
          id: 2,
          text: 'Click Me',
        },
        {
          id: 3,
          text: 'Click Me',
        },
        {
          id: 4,
          text: 'Click Me',
        },
      ],
    };
  },
  methods: {
    onItemTap() {
      action('This is a action dialog', 'Cancel', ['Option 1', 'Option 2'])
        .then(result => Toast.makeText(`You clicked ${result}`).show());
    },
  },
};
</script>

<style lang="scss" scoped>
ListView {
  margin: 30;
}
Label {
  padding: 10 0;
  font-size: 20;
}
</style>
