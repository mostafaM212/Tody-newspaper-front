<template>
  <div class=" flex flex-col select-none lg:mt-16 mt-56">
    <div class=" lg:w-11/12 w-full flex   mx-5 my-5">
      <div class=" ml-2 h-48 w-48 flex justify-center items-center">
        <img :src="user.photo" class="h-48 w-48 p-2 rounded-full" :title="user.name"  alt="">
      </div>
      <div class="flex flex-col ml-2 justify-around">
        <div class="text-red-800 text-4xl">Name : {{user.name}}</div>
        <div class="text-red-800 text-lg">Number Of Articles  {{user.articles_count}}</div>
        <div class=" text-red-800 text-lg">Last Published Article : {{user.articles[0].created_at}} </div>
      </div>
    </div>
    <div class="rounded-lg border-2 border-red-800 mb-10 p-2 border-dashed rounded-lg lg:w-11/12 w-full flex mx-5 flex flex-col">
      <div class="text-red-800 text-2xl flex justify-center">All {{user.name}}'s Articles</div>
      <div class="flex h-auto justify-center my-5  flex-wrap content-start">
        <ArticleUser v-for="article in user.articles"
                 :article="article"
                 :key="article.uuid"
        />

      </div>
      <div class="text-xl"></div>
    </div>
  </div>
</template>

<script>
import ArticleUser from "@/components/Articles/ArticleUser";
export default {
name: "index",
  data(){
    return {
      user : null
    }
  },
  async asyncData(context){

  let res = await context.$axios.$get('/articles/'+ context.params.id +'/user')

    return {
      user : res.data
    }
  },
  components : {
  ArticleUser
  }
}
</script>

<style scoped>

</style>
