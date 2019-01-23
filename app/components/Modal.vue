<template>
  <Page>
    <ActionBar title="Modal" />

    <StackLayout>
      <Label text="Here is a modal" />

      <StackLayout>
        <Button text="Close Modal" @tap="$modal.close" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

</style>
