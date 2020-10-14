<template>
  <div class="flex justify-center items-center h-64 my-32">
    <div class="flex border-r-2 border-gray-400 border-dashed p-2">
      <div class="text-6xl text-red-800">
        <i class="fas fa-exclamation-triangle"></i>
      </div>
    </div>
    <div class="text-3xl p-2 text-red-500 flex flex-col">
      <div class="">
        This Action is not Available for now.
      </div>
      <div class="text-2xl text-blue-500">
        <nuxt-link :to="{name : 'index'}">Go to save</nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>

</style>
