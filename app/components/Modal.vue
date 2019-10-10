<template>
  <Page>
    <ActionBar title="Modal" />

    <StackLayout>
      <Label text="Here is a modal" />

      <StackLayout>
        <Button @tap="$modal.close" text="Close Modal" />
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
