<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />

    <ScrollView>
      <StackLayout>
        <Label
          :text="msg"
          class="message"
          col="0"
          row="0"
        />

        <Button
          @tap="launchURL('https://upstatement.com/')"
          class="btn"
          text="Launch a website"
        />

        <Button
          @tap="$navigateTo(counterPage)"
          class="btn"
          text="Go to Counter"
        />

        <Button
          @tap="$showModal(modalPage)"
          class="btn"
          text="Show Modal"
        />

        <Button
          @tap="showPic"
          class="btn"
          text="Tap for a surprise"
        />

        <Image
          v-show="showImage"
          src="~/assets/images/NativeScript-Vue.png"
          stretch="none"
          horizontalAlign="center"
        />

        <Button
          @tap="$navigateTo(listPage)"
          class="btn"
          text="Go to list view"
        />

        <Button
          @tap="$navigateTo(geoPage)"
          class="btn"
          text="Geolocation!"
        />

        <Button
          @tap="$navigateTo(apiPage)"
          class="btn"
          text="Hit an API"
        />

        <Button
          @tap="$navigateTo(phonePage)"
          class="btn"
          text="Phone Things"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const utilsModule = require('tns-core-modules/utils/utils');
import { Counter, Modal, List, Geo, Api, Phone } from '@/components';

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
      phonePage: Phone,
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
