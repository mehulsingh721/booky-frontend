<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  name: "CustomQuill",
  components: {
    QuillEditor
  },
}
</script>

<template>
  <div id="custom-toolbar">
    <!-- <div class="ql-formats"> -->
    <!--   <button class="ql-undo" aria-label="Undo" type="button"></button> -->
    <!--   <button class="ql-redo" aria-label="Redo" type="button"></button> -->
    <!-- </div> -->

    <div class="ql-formats">
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
    </div>
    <div class="ql-formats">
      <button class="ql-list" value="bullet"></button>
      <button class="ql-list" value="ordered"></button>
    </div>
    <div class="ql-formats">
      <button class="ql-link"></button>
    </div>
  </div>
  <QuillEditor toolbar="#custom-toolbar" theme="snow"/>
</template>

<style scoped>
#custom-toolbar{
  border-bottom: none;
  height: max-content;
}
.ql-toolbar.ql-snow{
  border: none;
}
</style>
