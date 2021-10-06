<template>
  <Page>
    <ActionBar>
      <Label text="firebase-firestore"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedFirebaseFirestore } from '@demo/shared';
  import { } from '@nativescript/firebase-firestore';

  export default Vue.extend({
    computed: {
      message() {
        return "Test firebase-firestore";
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
