<script>
  import DropZone from "./Drop-zone.svelte";
  import InputFile from "./Input-file.svelte";
</script>

<style>
  section {
    text-align: center;
    font-size: 12px;
    min-width: 300px;
    max-width: 400px;
    margin: 0 auto;
    padding: 40px 40px;
    font-weight: 500;
    background: #fafafb;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  h1 {
    font-size: 18px;
    color: #4f4f4f;
  }
  h3 {
    font-size: 10px;
    color: #828282;
  }
  p {
    font-size: 18px;
    color: #bdbdbd;
  }
</style>

<section>
  <h1>Upload your image</h1>
  <h3>File should be JPEG, PNG, ...</h3>
  <DropZone on:upload />
  <p>Or</p>
  <InputFile on:upload />
</section>
