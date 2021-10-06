<template>
  <Page>
    <ActionBar>
      <Label text="firebase-performance"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedFirebasePerformance } from '@demo/shared';
  import { } from '@nativescript/firebase-performance';

  export default Vue.extend({
    computed: {
      message() {
        return "Test firebase-performance";
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
