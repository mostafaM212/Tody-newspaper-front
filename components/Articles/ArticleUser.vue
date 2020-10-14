<template>
  <div class="lg:w-5/12 p-2 w-full bg-red-800  border-2 list-inside hover:bg-red-700
              border-dashed border-red-200 h-32 rounded-lg m-4 flex flex-no-wra cursor-pointer"
              v-on:click="go"
  >
    <div class=" m-2 h-24 w-32 flex items-center justify-center">
      <img src="https://media3.s-nbcnews.com/i/newscms/2018_21/2442286/today-og-image_c986de7e1bb6ad2281723b692aa61990.png"
           class="h-24 w-24 rounded-full" :title="article.title">
    </div>
    <div class="flex flex-col justify-around text-xl w-full">
      <div class="text-lg flex text-red-200">
        <div class="">
         {{article.title}}
        </div>
      </div>
      <div class="text-yellow-500  text-sm">
        Published at : {{article.created_at}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  methods : {
    go(){
      this.$router.push({name : 'articles-id' , params : {id : this.article.uuid}})
    }
  },
  props : {
    article : {
      required : true ,
      type : Object
    }
  }
}
</script>

<style scoped>

</style>
