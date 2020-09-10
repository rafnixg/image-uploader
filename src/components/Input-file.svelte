<script>
  const handleInput = (e) => {
    const file = getFileFromInput(e);
    uploadFile(file);
  };
</script>

<style>
  label {
    background-color: #2f80ed;
    border-radius: 8px;
    color: #fff;
    padding: 10px 20px;
    font-weight: 500;
  }
</style>

<form>
  <input
    id="file-input"
    hidden
    type="file"
    on:input={handleInput}
    accept="image/*" />
  <label for="file-input" class="btn">Choose a file</label>
</form>
