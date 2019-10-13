<template>
  <Page>
    <ActionBar title="Counter">
      <NavigationButton
        @tap="$navigateBack"
        text="Go Back"
        android.systemIcon="ic_menu_back"
      />
    </ActionBar>
    <FlexboxLayout>
      <Button
        @tap="decrement"
        text="-"
        class="btn"
      />
      <Label :text="count" class="counter" />
      <Button
        @tap="increment"
        text="+"
        class="btn"
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
  @include flex-center;

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
