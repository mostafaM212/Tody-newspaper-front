<template>
 <div class=" ">
   <div class="flex justify-between  select-none">
     <div class="ml-5 flex flex-col justify-center  items-center lg:mt-0 mb-4 text-red-800 ">
       <div class="text-4xl flex  flex-col">
         Dashboard
         <p class="text-xl mt-5 text-red-500">You Find all news that your are published here.</p>
       </div>
     </div>
     <div class="w-1/5 mr-8 lg:mt-0 mt-40">
       <create-news-button />
     </div>
   </div>
   <div class=" flex justify-between lg:flex-row flex-col items-center ">
     <div class=" mx-2 my-2 h-full flex justify-between lg:flex-no-wrap flex-wrap overflow-x-auto">
      <news v-for="post in posts" :key="post.uuid"
            :news="post"
            v-if="posts"

      />
       <div class="flex justify-center items center text-gray-300 text-3xl" v-else>
         No Posts Yet Please Create Some .
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import Advertisment from "../../../components/Advertisment/Advertisment";
import News from "~/components/News/News";
import createNewsButton from "@/components/News/createNewsButton";
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
      title : 'Dashboard | Today'
    }
  },
  components : {
    News,
    createNewsButton
  },
  async asyncData(context){
    let res = await context.$axios.$get('me/news')

    return {
      posts : res.data
    }
  }
}
</script>

<style scoped>

</style>
