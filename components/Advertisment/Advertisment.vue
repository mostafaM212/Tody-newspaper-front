<template>
  <div class="w-full h-full flex justify-center items-center
   border-red-200 border-dashed border-2 shadow-lg rounded-lg">
    <nuxt-link :to="{name : 'index'}"
               class="lg:text-3xl text-sm p-1 w-full h-full flex justify-center items-center text-yellow-600 hover:bg-yellow-300"
    >
      <i class="fa fa-plus"></i>Add Advertisement Here
    </nuxt-link>
  </div>
</template>

<script>
export default {
name: "Advertisment"
}
</script>

<style scoped>

</style>
