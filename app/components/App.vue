<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <Label text="hello" />
    <BottomNavigation>
      <TabStrip>
        <TabStripItem class="first">
          <Image src="~/assets/images/icon-star-white.png" />
          <Label text="BotNav 1" />
        </TabStripItem>
        <TabStripItem class="second">
          <Image src="~/assets/images/icon-star-white.png" />
          <Label text="BotNav 2" />
        </TabStripItem>
        <TabStripItem class="third">
          <Image src="~/assets/images/icon-star-white.png" />
          <Label text="BotNav 3" />
        </TabStripItem>
        <TabStripItem class="fourth">
          <Image src="~/assets/images/icon-star-white.png" />
          <Label text="BotNav 4" />
        </TabStripItem>
        <TabStripItem class="fifth">
          <Image src="~/assets/images/icon-star-white.png" />
          <Label text="BotNav 5" />
        </TabStripItem>
      </TabStrip>

      <TabContentItem class="first">
        <StackLayout>
          <Label text="Bottom Nav Content 1" class="h1 text-center p-t-20" />
        </StackLayout>
      </TabContentItem>

      <TabContentItem class="second">
        <StackLayout>
          <Label text="Bottom Nav Content 2" class="h1 text-center p-t-20" />
        </StackLayout>
      </TabContentItem>

      <TabContentItem class="third">
        <StackLayout>
          <Label text="Bottom Nav Content 3" class="h1 text-center p-t-20" />
        </StackLayout>
      </TabContentItem>

      <TabContentItem class="fourth">
        <StackLayout>
          <Label text="Bottom Nav Content 4" class="h1 text-center p-t-20" />
        </StackLayout>
      </TabContentItem>

      <TabContentItem class="fifth">
        <StackLayout>
          <Label text="Bottom Nav Content 5" class="h1 text-center p-t-20" />
        </StackLayout>
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>

<script>
const { openUrl } = require('tns-core-modules/utils/utils');
// import { Counter, Modal, List, Geo, Api, Phone } from '@/components';

export default {
  data() {
    return {
      msg: 'Hello World!',
      showImage: false,
      openUrl,
    };
  },

  methods: {
    showPic() {
      this.showImage = !this.showImage;
    },
  },
};
</script>

<style lang="scss" scoped>
TabStrip {
  font-size: 12;
}

TabStripItem, TabContentItem .h1 {
  color: #FFFFFF;
}

TabStripItem:active {
  color: #000000;
}

TabStripItem.first {
  background-color: #AC92EB;
}

TabStripItem.first:active, TabContentItem.first {
  background-color: #6D00F1;
}

TabStripItem.second {
  background-color: #4FC1E8;
}

TabStripItem.second:active, TabContentItem.second {
  background-color: #007EFE;
}

TabStripItem.third {
  background-color: #A0D568;
}

TabStripItem.third:active, TabContentItem.third {
  background-color: #00BB00;
}

TabStripItem.fourth {
  background-color: #FFCE54;
}

TabStripItem.fourth:active, TabContentItem.fourth {
  background-color: #FEF601;
}

TabStripItem.fifth {
  background-color: #ED5564;
}

TabStripItem.fifth:active, TabContentItem.fifth {
  background-color: #DD0000;
}
</style>
