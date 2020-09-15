<script>
  import Uploader from "./components/Uploader.svelte";
  import ImageUpload from "./components/ImageUpload.svelte";
  import Loading from "./components/Loading.svelte";

  let state = "initial";
  console.log(state);
  function handleUpload(e) {
    if (e.detail === "uploading") {
      state = "loading";
    } else if (e.detail === "upload") {
      state = "upload";
    } else {
      state = "initial";
    }

    console.log(e.detail);
  }
</script>

{#if state === 'initial'}
  <Uploader on:upload={handleUpload} />
{:else if state === 'loading'}
  <Loading />
{:else if state === 'upload'}
  <ImageUpload />
{/if}
