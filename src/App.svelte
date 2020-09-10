<script>
  import { getFileFromDrop, getFileFromInput, isImage } from "./utils.js";

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

    console.log(file);
  };
  const handleInput = (e) => console.log(getFileFromInput(e));

  const handleFile = (file) => {};
</script>

<style>
  .card {
    text-align: center;
    font-size: 12px;
    max-width: 400px;
    margin: 0 auto;
    padding: 40px 40px;
    font-weight: 500;
    background: #fafafb;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    margin-top: 40px;
  }
  h1 {
    font-size: 18px;
    color: #4f4f4f;
  }
  h3 {
    font-size: 10px;
    color: #828282;
  }
  .drop-zone {
    margin-top: 20px;
    background: #f6f8fb;
    border: 2px dashed #97bef4;
    border-radius: 12px;
    padding: 40px 0;
  }
  .drop-zone.over {
    border-color: peru;
  }
  .drop-zone__text {
    margin-top: 40px;
    color: #bdbdbd;
  }
  .card > p {
    font-size: 18px;
    color: #bdbdbd;
  }
  .btn {
    background-color: #2f80ed;
    border-radius: 8px;
    color: #fff;
    padding: 10px 20px;
    font-weight: 500;
  }
</style>

<div class="card">
  <h1>Upload your image</h1>
  <h3>File should be JPEG, PNG, ...</h3>
  <div
    class="drop-zone {overClass}"
    on:dragleave|preventDefault|stopPropagation={handleDragLeave}
    on:dragover|preventDefault|stopPropagation={handleDragOver}
    on:dragenter|preventDefault|stopPropagation={handleDragEnter}
    on:drop|preventDefault|stopPropagation={handleDragDrop}>
    <img src="./image.svg" alt="" class="drop-zone__img" />
    <p class="drop-zone__text">Drag & Drop your image here</p>
  </div>
  <p>Or</p>
  <form>
    <input
      id="file-input"
      hidden
      type="file"
      on:input={handleInput}
      accept="image/*" />
    <label for="file-input" class="btn">Choose a file</label>
  </form>
</div>
