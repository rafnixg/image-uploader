<script>
  import { getFileFromDrop, isImage } from "../utils";
  import { uploadFile } from "../services";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let over = false;
  let overClass;

  $: overClass = over ? "over" : "";

  const startOver = () => (over = true);
  const endOver = () => (over = false);

  const handleDragEnter = (e) => startOver();
  const handleDragLeave = (e) => endOver();
  const handleDragOver = (e) => startOver();
  const handleDragDrop = async (e) => {
    const file = getFileFromDrop(e);
    endOver();
    if (!isImage(file)) return;

    dispatch("upload", "uploading");
    await uploadFile(file);
    dispatch("upload", "upload");
  };
</script>

<style>
  div {
    margin-top: 20px;
    background: #f6f8fb;
    border: 2px dashed #97bef4;
    border-radius: 12px;
    padding: 40px 0;
  }
  .over {
    border-color: peru;
  }
  p {
    margin-top: 40px;
    color: #bdbdbd;
  }
</style>

<div
  class={overClass}
  on:dragleave|preventDefault|stopPropagation={handleDragLeave}
  on:dragover|preventDefault|stopPropagation={handleDragOver}
  on:dragenter|preventDefault|stopPropagation={handleDragEnter}
  on:drop|preventDefault|stopPropagation={handleDragDrop}>
  <img src="./image.svg" alt="Drag and Drop" />
  <p>Drag & Drop your image here</p>
</div>
