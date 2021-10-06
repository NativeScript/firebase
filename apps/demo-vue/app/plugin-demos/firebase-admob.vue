<template>
  <Page>
    <ActionBar>
      <Label text="firebase-admob"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedFirebaseAdmob } from '@demo/shared';
  import { } from '@nativescript/firebase-admob';

  export default Vue.extend({
    computed: {
      message() {
        return "Test firebase-admob";
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
