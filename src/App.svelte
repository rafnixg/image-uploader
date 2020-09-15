<script>
  import Uploader from "./components/Uploader.svelte"
  function handleUpload(e){
    console.log(e.detail)
  }
</script>
<Uploader on:upload={handleUpload}/>