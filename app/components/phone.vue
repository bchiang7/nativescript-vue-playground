<template>
  <Page>
    <ActionBar title="Let's do phone things">
      <NavigationButton
        text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>
    <StackLayout>
      <Button
        class="btn"
        text="Call Me Beep Me"
        @tap="call"
      />

      <Button
        class="btn"
        text="Text Me"
        @tap="text"
      />
    </StackLayout>
    <!-- <Gradient direction="to right" colors="#FF0077, red, #FF00FF">
      <Label
        text="Here is a gradient"
        horizontalAlignment="center"
        style="color: white; padding: 20"
      />
    </Gradient> -->
  </Page>
</template>

<script>
const phone = require('nativescript-phone');

export default {
  data() {
    return {

    };
  },
  created() {

  },
  // https://github.com/msywensky/nativescript-phone
  methods: {
    call() {
      phone.dial('212-555-1234', true);
    },
    text() {
      phone.sms('212-555-1234', 'My Message')
        .then(args => {
          // args.reponse: "success", "cancelled", "failed"
          console.warn(JSON.stringify(args));
        }, err => {
          console.error(`Error: ${err}`);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
