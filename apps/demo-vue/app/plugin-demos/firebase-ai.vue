<template>
  <Page>
    <ActionBar>
      <Label text="firebase-ai"/>
    </ActionBar>

    <StackLayout class="p-20">
      <Button class="btn btn-primary" text="Generate content" @tap="demo.testIt()"/>
      <Button class="btn btn-primary" text="Stream content" @tap="demo.testStream()"/>
      <Button class="btn btn-primary" text="Chat" @tap="demo.testChat()"/>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedFirebaseAi } from '@demo/shared';

  export default Vue.extend({
    data() {
      return {
        demo: new DemoSharedFirebaseAi(),
      };
    }
  });
</script>
