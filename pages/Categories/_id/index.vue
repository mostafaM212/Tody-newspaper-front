<template>
  <div class="h-full ">
    <div class="flex justify-between">
      <div class="ml-5 flex flex-col justify-center mb-12 text-red-200 " >
        <div class="text-4xl flex lg:flex-row flex-col text-red-800" v-if="posts.length > 0">
          {{ posts[0]['category'] ? posts[0]['category'] : 'Empty Category'}}
          <p class="text-xl mt-5 ml-5 text-red-500">You can Find all news that related with {{ posts[0]['category']}} category here.</p>
        </div>
        <div class="text-4xl flex lg:flex-row flex-col" v-else>
          <p class="text-xl mt-5 ml-5 text-red-500">Please add some news to this category.</p>

        </div>
      </div>

      <div class=" w-1/5 h-64 mt-5 mr-5 rounded-lg">
        <div class="w-full border-red-200 border-2 h-20 rounded-lg border-dashed ">
          <nuxt-link :to="{name : 'Categories-create'}"
                     class="bg-red-200 w-full h-full flex justify-center items-center lg:text-xl  italic hover:bg-yellow-400">
            Create Category
          </nuxt-link>
        </div>
        <div class="w-full border-red-200 border-2 h-20 rounded-lg border-dashed mt-5">
          <nuxt-link :to="{name : 'news-create'}"
                     class="bg-red-200 w-full h-full flex justify-center items-center lg:text-xl italic hover:bg-yellow-400">

            New News
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class=" flex justify-between lg:flex-row flex-col items-center overflow-x-auto mr-5">
      <div class="lg:w-4/5 mx-2 my-2 h-full flex justify-between lg:flex-no-wrap flex-wrap"  v-if="posts.length > 0">
        <news v-for="post in posts" :key="post.uuid"
              :news="post"
              v-if="posts"
        />
      </div>
      <div class="flex justify-center items center mb-24 text-gray-400 text-3xl w-full" v-else>
        No Posts Yet Please Create Some .
      </div>
    </div>

  </div>
</template>

<script>
import Advertisment from "../../../components/Advertisment/Advertisment";
import News from "~/components/News/News";
export default {
  name: "index",
  data(){
    return {
      posts : []
    }
  },
  middleware : ['myAuth'],
  head(){
    return{
      title : this.posts.length > 0 ? posts[0]['category'] : 'Empty Category' +' | Today'
    }
  },
  components : {
    Advertisment,
    News
  },
  async asyncData(context){
    let res = await context.$axios.$get('categories/show/'+context.params.id)

    return {
      posts : res.data
    }
  }
}
</script>

<style scoped>

</style>
