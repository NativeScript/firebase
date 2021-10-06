<template>
  <Page>
    <ActionBar>
      <Label text="firebase-auth"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedFirebaseAuth } from '@demo/shared';
  import { } from '@nativescript/firebase-auth';

  export default Vue.extend({
    computed: {
      message() {
        return "Test firebase-auth";
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
