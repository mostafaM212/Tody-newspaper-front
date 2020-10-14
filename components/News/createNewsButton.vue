<template>
  <div class=" w-full mt-5 mr-5 rounded-lg">
    <div class="w-full border-red-200 border-2 h-16 rounded-lg border-dashed ">
      <nuxt-link :to="{name : 'Categories-create'}"
                 class="bg-red-200 w-full h-full flex justify-center items-center lg:text-xl
               italic hover:bg-yellow-400">
        Create Category
      </nuxt-link>
    </div>
    <div class="w-full border-red-200 border-2 h-16 rounded-lg border-dashed mt-5">
      <nuxt-link :to="{name : 'news-create'}"
                 class="bg-red-200 w-full h-full flex
                justify-center items-center lg:text-xl italic hover:bg-yellow-400">

        New News
      </nuxt-link>
    </div>
    <div class="w-full border-red-200 border-2 h-16 rounded-lg border-dashed mt-5">
      <nuxt-link :to="{name : 'articles-create'}"
                 class="bg-red-200 w-full h-full flex
                justify-center items-center lg:text-xl italic hover:bg-yellow-400">

        Add Article
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "createNewsButton"
}
</script>

<style scoped>

</style>
