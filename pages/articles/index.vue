<template>
  <div class="lg:mx-5 flex justify-center h-full">
    <div class="flex flex-col rounded-lg border-2 border-dashed border-red-200 w-11/12 mt-12 mb-16   rounded-lg">
      <div class="bg-red-800 flex justify-center items-center text-red-200 rounded-lg text-2xl p-2">
        New Articles
      </div>
      <div class="flex h-auto justify-center my-5  flex-wrap content-start" v-if="users.length > 0">
        <Article v-for="users in users"
          :user="users"
          :key="users.article.uuid"
        />

      </div>
    </div>
  </div>
</template>

<script>
import Article from "@/components/Articles/Article";
export default {
  name: "index",
  components : {
    Article
  },
  head(){
    return {
      title : 'Articles | Today'
    }
  },
  data(){
    return {
      users : []
    }
  },
  async asyncData(context){
    let res = await context.$axios.$get('/users/article')

    if (context.store.getters['getCategories'].length === 0){
      let res2 = await context.$axios.$get('/categories')
      context.store.dispatch('setCategories',res2.data)
    }
    return {
      users : res.data
    }
  }
}
</script>

<style scoped>

</style>
