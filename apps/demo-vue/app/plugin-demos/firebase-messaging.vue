<template>
  <Page>
    <ActionBar>
      <Label text="firebase-messaging"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedFirebaseMessaging } from '@demo/shared';
  import { } from '@nativescript/firebase-messaging';

  export default Vue.extend({
    computed: {
      message() {
        return "Test firebase-messaging";
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
