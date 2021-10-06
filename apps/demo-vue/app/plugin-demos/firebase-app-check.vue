<template>
  <Page>
    <ActionBar>
      <Label text="firebase-app-check"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedFirebaseAppCheck } from '@demo/shared';
  import { } from '@nativescript/firebase-app-check';

  export default Vue.extend({
    computed: {
      message() {
        return "Test firebase-app-check";
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
