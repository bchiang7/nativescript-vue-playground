<template>
  <Page>
    <ActionBar title="Geolocation">
      <NavigationButton
        text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>

    <StackLayout>
      <Button
        class="btn"
        text="Get Current Location"
        @tap="getLocation"
      />

      <ActivityIndicator :busy="isBusy" />

      <StackLayout v-if="locationInfo.length > 0">
        <ListView for="item in locationInfo">
          <v-template>
            <FlexboxLayout class="info">
              <Label class="key" :text="item.key" />
              <Label class="value" :text="item.value" />
            </FlexboxLayout>
          </v-template>
        </ListView>
      </StackLayout>

      <StackLayout v-else>
        <Label text="Click the button for location info" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { objectToObjectArray } from '../utils';
import * as geolocation from 'nativescript-geolocation';
import { Accuracy } from 'tns-core-modules/ui/enums';

export default {
  data() {
    return {
      isBusy: false,
      locationInfo: [],
    };
  },
  methods: {
    getLocation() {
      this.isBusy = true;

      geolocation.getCurrentLocation({
        desiredAccuracy: Accuracy.high,
        updateDistance: 10,
        maximumAge: 20000,
        timeout: 20000,
      }).then(loc => {
        this.isBusy = false;

        if (loc) {
          this.locationInfo = objectToObjectArray(loc);
        }
      }, e => console.error(`Error: ${e.message}`));
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  justify-content: space-between;

  .key {
    text-transform: capitalize;
  }

  .value {
    color: #777777;
  }
}
StackLayout > StackLayout {
  margin: 0;
}
Label {
  font-size: 20;
  padding: 10 0;
}
</style>
