<template>
  <Page>
    <ActionBar title="List View">
      <NavigationButton
        @tap="$navigateBack"
        text="Go Back"
        android.systemIcon="ic_menu_back"
      />
    </ActionBar>

    <ListView @itemTap="onItemTap" for="item in items">
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
      alert({
        title: 'Item tapped!',
        message: 'This is an alert',
        okButtonText: 'OK',
      });
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
