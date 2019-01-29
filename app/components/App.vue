<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />

    <ScrollView>
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

        <Button
          class="btn"
          text="Hit an API"
          @tap="$navigateTo(apiPage)"
        />

        <Button
          class="btn"
          text="Tap for a surprise"
          @tap="showPic"
        />

        <Image
          v-show="showImage"
          src="~/assets/images/NativeScript-Vue.png"
          stretch="none"
          horizontal-align="center"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const utilsModule = require('tns-core-modules/utils/utils');
import { Counter, Modal, List, Geo, Api } from '~/components';

export default {
  data() {
    return {
      msg: 'Hello World!',
      showImage: false,
      counterPage: Counter,
      modalPage: Modal,
      listPage: List,
      geoPage: Geo,
      apiPage: Api,
    };
  },
  methods: {
    launchURL(url) {
      utilsModule.openUrl(url);
    },
    showPic() {
      this.showImage = !this.showImage;
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
