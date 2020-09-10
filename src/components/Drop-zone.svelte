<script>
    import {getFileFromDrop, isImage, uploadFile} from "../utils"
  let over = false;
  let overClass;

  $: overClass = over ? "over" : "";

  const startOver = () => (over = true);
  const endOver = () => (over = false);

  const handleDragEnter = (e) => startOver();
  const handleDragLeave = (e) => endOver();
  const handleDragOver = (e) => startOver();
  const handleDragDrop = (e) => {
    const file = getFileFromDrop(e);
    endOver();
    if (!isImage(file)) return;

    uploadFile(file);
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
