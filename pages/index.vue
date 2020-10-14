<template>
  <div class="h-auto">
    <div class=" lg:h-56 flex justify-center items-center flex-col select-none
                  lg:mx-5 mb-2 lg:mt-2 mt-40 lg:w-auto w-full  bg-red-800 rounded-lg ">
      <div class="flex flex-col lg:ml-24 lg:mr-8  justify-center items-center lg:mt-0 select-none ">
        <div class="italic text-6xl flex justify-center text-red-200">Today</div>
        <div class="text-red-300">Newspaper</div>
        <div class="text-red-300">Fastest news and trusted for you.</div>
        <div class="justify-start flex justify-center  rounded-full bg-red-200 py-1 px-2 mb-2">

          <input type="search" class="bg-red-200 lg:w-auto w-16" placeholder="search by category" v-model.lazy.trim="search">
          <i class="fas fa-search text-lg pt-1"></i>
        </div>
      </div>
    </div>
    <div class="flex flex-col h-auto">
      <div class="text-2xl ml-5 text-red-500">
        Categories List
      </div>
      <div class="lg:mx-5 mt-5 lg:mb-5 mb-20  flex flex-col " v-for="category in setCategories" :key="category.uuid" v-if="category.News.length > 0">
        <div class=" text-xl mt-2 flex justify-between italic">
          <div class="mb-3 hover:text-red-500">
            <nuxt-link :to="{name : 'Categories-id' , params : { id : category.uuid}}">{{ category.name }}</nuxt-link>
          </div>
          <div class="text-lg">
            New News
          </div>
        </div>
        <div class="  h-auto shadow-lg rounded-lg flex  overflow-x-scroll">
          <news v-for="post in category.News"
                :news="post"
                :key="post.uuid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import News from "@/components/News/News";
export default {
  components : {
    News
  },
  data(){
    return {
      categories : [],
      search : null,
      result : []
    }
  },
  async asyncData(context){
    let res = await context.$axios.$get('/category/news').catch(e => {
      console.log(e.response.data)
    })
    if (context.store.getters['getCategories'].length === 0){
      let res2 = await context.$axios.$get('/categories')
      context.store.dispatch('setCategories',res2.data)
    }
    return {
      categories : res.data
    }
  },
  computed : {
    setCategories(){
      if (this.result.length > 0){
        return this.result
      }
      return this.categories
    }
  },
  watch : {
    'search'(value){
      return  this.categories.filter(cat => {

        if (cat.name === value){
          this.result.push(cat)
        }else if (value === ''){
          this.result = []
        }
      })
    }
  }
}
</script>

<style>

</style>
