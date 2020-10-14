<template>
  <div class=" flex flex-col select-none lg:mt-16 mt-56">
    <div class=" lg:w-11/12 w-full flex   mx-5 my-5">
      <div class=" ml-2 h-48 w-48 flex justify-center items-center">
        <img :src="article.owner.photo" class="h-48 w-48 p-2 rounded-full" :title="article.owner.name"  alt="">
      </div>
      <div class="flex flex-col ml-2 justify-around">
        <div class="text-red-800 text-4xl">{{article.title}}</div>
        <div class="text-red-800 text-lg">Name : {{ article.owner.name}}</div>
        <div class="text-red-800 text-lg">Number Of Articles  {{ article.owner.articles_count}}</div>
        <div class=" text-red-800 text-lg">Published From {{ article.created_at }}</div>
      </div>
    </div>
    <div class="rounded-lg border-2 border-red-800 p-2 border-dashed rounded-lg lg:w-11/12 w-full flex mx-5 flex flex-col">
      <div class="text-red-800 text-4xl">Subject</div>
      <div class="text-xl">{{article.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      article : null
    }
  },
  async asyncData(context){

    let res = await context.$axios.$get('/articles/'+ context.params.id )

    return {
      article : res.data
    }
  },
  head(){
    return {
      title : this.article.title + ' | Today'
    }
  }
}
</script>

<style scoped>

</style>
