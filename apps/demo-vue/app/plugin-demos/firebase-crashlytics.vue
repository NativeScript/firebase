<template>
  <Page>
    <ActionBar>
      <Label text="firebase-crashlytics"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedFirebaseCrashlytics } from '@demo/shared';
  import { } from '@nativescript/firebase-crashlytics';

  export default Vue.extend({
    computed: {
      message() {
        return "Test firebase-crashlytics";
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
