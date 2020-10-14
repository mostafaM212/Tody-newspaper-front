<template>
  <div class="flex justify-between lg:flex-row flex-col w-full">
    <div class="ml-24 flex flex-col lg:w-7/12 w-8/12 mt-5 border-2 border-red-500 border-dashed rounded-lg">
      <div class="flex justify-between border-b-2 border-red-500 border-dashed bg-blue-800 rounded-lg">
        <div class="text-2xl text-red-300 flex flex-col ml-2 ">
          <div class="text-4xl text-red-600 italic">Today</div>
          <div class="text-sm text-green-300 ">newspaper</div>
        </div>
        <div class="lg:text-2xl text-sm text-green-300 mr-2 mt-4">Latest news</div>
      </div>
      <div class=" flex flex-between flex-wrap w-full " v-if="news.length > 0">
        <News v-for="post in news"
              :key="post.uuid"
              :news="post"
              class="mt-2  "
              />
        <div class="flex justify-center w-full my-2">
          <button class="bg-blue-800 rounded-lg mx-2 p-2" title="previous" v-on:click="prev"
                  :class="{'cursor-not-allowed' : this.page.current_page == 1 }"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <button class="bg-blue-800 rounded-lg mx-2 p-2"
                  v-for="index in page.last_page"
                  v-on:click="go(index)"
                  :class="{'px-4 bg-green-400' : $route.query.page == index}"
          >{{index}}</button>
          <button class="bg-blue-800 rounded-lg mx-2 p-2"
                  title="next" v-on:click="next"
                  :class="{'cursor-not-allowed' : this.page.current_page >= this.page.last_page}"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="text-4xl text-gray-500 flex justify-center items-center" v-else>
        There are no Posts yet.
      </div>
    </div>
    <div class="flex flex-col p-2 lg:ml-2 ml-24 lg:w-4/12 w-64">
      <create-news-button />
      <CategoriesList />
    </div>
  </div>
</template>

<script>
import News from "@/components/News/News";
import createNewsButton from "@/components/News/createNewsButton";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
export default {
name: "index",
  layout : 'admin',
  middleware : ['myAuth','admin'],
  data(){
    return {
      news : [],
      page : {
        current_page : 0 ,
        last_page : null
      }
    }
  },
  async asyncData(context){
    let res = await context.$axios.get('/news')

    return {
      news : res.data.data,
      page : {
        current_page : res.data.meta.current_page ,
        last_page : res.data.meta.last_page
      }
    }
  },
  head(){
    return {
      title : 'News | Today'
    }
  },
  components : {
    News ,
    CategoriesList,
    createNewsButton
  },
  methods : {
    go(index) {

      let url = '/news?page=' + index
      this.$router.push('/admin/news?page=' + index)
      let res = this.$axios.$get(url).then(res => {
        this.news = res.data
        this.page.current_page = res.meta.current_page
      })
    },
    next() {
      if (this.page.current_page < this.page.last_page) {
        this.go(this.page.current_page + 1)
      }
    },
    prev() {
      if (this.page.current_page >= 1) {
        this.go(this.page.current_page - 1)
      }
    }
  }
}
</script>

<style scoped>

</style>
