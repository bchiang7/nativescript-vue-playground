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
        text="Launch a website"
        @tap="launchURL('https://upstatement.com/')"
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

      <Button
        class="btn"
        text="Go to list view"
        @tap="$navigateTo(listPage)"
      />

      <Button
        class="btn"
        text="Geolocation!"
        @tap="$navigateTo(geoPage)"
      />
    </StackLayout>
  </Page>
</template>

<script>
import Counter from './Counter';
import Modal from './Modal';
import List from './List';
import Geo from './Geo';
import utils from 'tns-core-modules/utils/utils';

export default {
  data() {
    return {
      msg: 'Hello World!',
      counterPage: Counter,
      modalPage: Modal,
      listPage: List,
      geoPage: Geo,
    };
  },
  methods: {
    launchURL(url) {
      utils.openUrl(url);
    },
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
