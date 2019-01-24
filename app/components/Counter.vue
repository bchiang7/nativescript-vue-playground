<template>
  <Page>
    <ActionBar title="Counter">
      <NavigationButton
        text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>
    <FlexboxLayout>
      <Button
        text="-"
        class="btn"
        @tap="decrement"
      />
      <Label :text="count" class="counter" />
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

  .counter {
    font-size: 70;
    width: 30%;
    text-align: center;
  }

  .btn {
    font-size: 30;
  }
}
</style>
