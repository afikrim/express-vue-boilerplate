<template>
  <div class="container vh-100">
    <div class="row h-100 align-items-center">
      <div class="col-12">
        <div id="title">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: {
      type: String,
      default: 'Express Vue',
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

#title {
  color: var(--secondary);
  text-align: center;
  font-size: 84px;
  font-weight: 200 !important;
}
</style>
