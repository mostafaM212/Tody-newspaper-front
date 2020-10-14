<template>
  <div class="lg:w-5/12 p-2 w-full bg-red-800  border-2 list-inside
              border-dashed border-red-200 h-32 rounded-lg m-4 flex  flex-no-wra"

  >
    <div class=" m-2 h-24 w-32 flex items-center justify-center">
      <img :src="user.photo"
           class="h-24 w-24 rounded-full" :title="user.name">
    </div>
    <div class="flex flex-col justify-around text-xl w-full">
      <div class="text-lg text-red-200">
        <nuxt-link :to="{name : 'articles-id-user' , params : {id : this.user.id }}" class="hover:text-yellow-500">{{user.name}}</nuxt-link>
      </div>
      <div class="text-yellow-500  text-sm">
        Last Article : {{user.article.created_at}}
      </div>
      <div class="text-lg flex text-red-200">
        <div class="">
          <nuxt-link :to="{name : 'articles-id' , params : {id : this.user.article.uuid}}" class="hover:text-yellow-500">{{user.article.title}}</nuxt-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Article",
  methods : {
    go(){
      // this.$router.push({name : 'article-id' , params : {id : this.article.uuid}})
    }
  },
  props : {
    user : {
      required : true ,
      type : Object
    }
  }
}
</script>

<style scoped>

</style>
