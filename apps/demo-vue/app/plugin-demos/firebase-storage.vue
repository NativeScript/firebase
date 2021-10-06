<template>
  <Page>
    <ActionBar>
      <Label text="firebase-storage"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedFirebaseStorage } from '@demo/shared';
  import { } from '@nativescript/firebase-storage';

  export default Vue.extend({
    computed: {
      message() {
        return "Test firebase-storage";
      }
    }
  });
</script>

<style scoped lang="scss">

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
