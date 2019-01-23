<template>
  <Page>
    <ActionBar title="Counter">
      <NavigationButton
        text="Go Back"
        android-system-icon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>
    <FlexboxLayout>
      <Button
        text="-"
        class="btn"
        @tap="decrement"
      />
      <Label :text="count" />
      <Button
        text="+"
        class="btn"
        @tap="increment"
      />
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    decrement() {
      this.$store.dispatch('decrement');
    },
    increment() {
      this.$store.dispatch('increment');
    },

  },
};
</script>

<style lang="scss" scoped>
FlexboxLayout {
  justify-content: center;
  align-items: center;

  Label {
    font-size: 70;
    width: 30%;
    text-align: center;
  }

  .btn {
    font-size: 40;
    border-radius: 10;
    width: 50;
    height: 50;
  }
}
</style>
