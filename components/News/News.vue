<template>
  <div class="h-64  lg:w-40 w-full  flex rounded-lg
    lg:mb-0 mb-2 mx-8"
  >
    <nuxt-link :to="{ name : 'news-id' , params : { id : news.uuid}}"
               class="flex flex-col bg-red-800 rounded-lg
               hover:bg-green-500 hover:text-black w-48 h-58 border-2 border-dashed border-red-500"
               v-if="news.photo !== 'http://127.0.0.1:8000/'">
      <div class="h-full w-full flex flex-col"
      >
        <img :src="news.photo" alt="" :title="news.title" class="w-48 h-32 rounded-lg">
        <p class="text-sm text-yellow-200 p-1" >{{news.created_at}}</p>
        <p class="p-1 text-sm text-red-200 hover:text-red-500 p-1">{{news.title}}</p>
      </div>
    </nuxt-link>
    <div
      class="bg-red-800 h-64 w-40 flex justify-center border-2 border-dashed border-red-500 text-3xl text-red-200 rounded-lg hover:bg-green-500 hover:text-red-400" v-else>
      <nuxt-link :to="{ name : 'news-id' , params : { id : news.uuid}}" class="flex flex flex-col ">
        <div class="">
          Today Post
        </div>
        <div class="">
          <p class="text-sm text-yellow-200">{{news.created_at}}</p>
          <p class="text-sm">{{news.title}}</p>
        </div>

      </nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "News",
  props : {
    news : {
      required : true ,
      type : Object
    }
  }
}
</script>

<style scoped>

</style>
