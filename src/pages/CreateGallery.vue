<template>
  <div>

    <form>
      <div class="form-group row">
        <label for="text" class="col-4 col-form-label">Gallery title:</label>
        <div class="col-8">
          <input id="text" name="text" placeholder="Gallery title..." type="text" class="form-control here">
        </div>
      </div>
      <div class="form-group row">
        <label for="textarea" class="col-4 col-form-label">Gallery description:</label>
        <div class="col-8">
          <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="text1" class="col-4 col-form-label">Picture URL:</label>
        <div class="col-8">
          <input id="text1" name="text1" type="text" class="form-control here">
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div class="offset-4 col-8">
          <button name="submit" type="button" class="btn btn-warning">Cancel</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
