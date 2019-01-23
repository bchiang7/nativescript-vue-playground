<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />

    <StackLayout>
      <Label
        class="message"
        :text="msg"
        col="0"
        row="0"
      />

      <Button
        class="btn"
        text="Go to Counter"
        @tap="$navigateTo(counterPage)"
      />

      <Button
        class="btn"
        text="Show Modal"
        @tap="$showModal(modalPage)"
      />
    </StackLayout>
  </Page>
</template>

<script>
import Counter from './Counter';
import Modal from './Modal';

export default {
  data() {
    return {
      msg: 'Hello World!',
      counterPage: Counter,
      modalPage: Modal,
    };
  },
};
</script>

<style lang="scss" scoped>
.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
}
</style>
