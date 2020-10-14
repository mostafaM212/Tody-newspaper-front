<template>
  <div class="flex justify-center items-center lg:flex-row flex-col ml-24 w-full mb-2">
    <div class="lg:w-2/3 w-full border-2 rounded-lg border-dashed border-red-800 mt-10 flex flex-col">
      <div class="w-full bg-blue-800 h-20 rounded-lg flex justify-between border-b-2 rounded-lg border-dashed border-red-800">
        <div class="mx-2 flex flex-col">
          <div class="text-red-500 text-4xl italic">Today</div>
          <div class="text-green-500 text-sm">newspaper</div>
        </div>
        <div class="text-green-500 lg:text-3xl text-xl mr-2 flex items-center">
          All Articles
        </div>
      </div>
      <div class="content-between flex flex-wrap w-full ">
        <div class="bg-red-800 lg:mx-8 mx-2 h-32 m-2 flex border-2 border-dashed border-red-500 rounded-lg"
             v-for="( article , index) in articles">
          <div class="lg:w-32 lg:h-32 w-24 h-24 flex justify-center items-center lg:p-2 p-0 lg:mt-0 mt-4">
            <img :src="article.owner.photo" alt="" class="rounded-full w-24 h-24">
          </div>
          <div class="lg:w-48 w-32 flex flex-col justify-between">
            <div class="text-sm text-yellow-500">
              {{article.created_at}}
            </div>
            <div class="text-red-200 text-lg">
              <nuxt-link :to="{name : 'articles-id' , params : { id : article.uuid }}" class="hover:text-yellow-500"
              >{{article.title}}</nuxt-link>
            </div>
            <div class="text-red-200 text-sm flex">
              <nuxt-link :to="{name : 'articles-id-user' , params : { id : article.owner.id }}" class="hover:text-yellow-500"
              >Published By :{{article.owner.name}}</nuxt-link>
            </div>
            <div class=" flex text-lg">
              <nuxt-link :to="{ name : 'admin-articles-id' , params : { id : article.uuid }}" class="hover:text-yellow-500">
                <i class="far fa-edit"></i>
              </nuxt-link>
              <button class="ml-8 hover:text-red-500" v-on:click="deleteArt(article , index)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full mb-2">
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
    </div>
    <div class=" lg:w-1/3 w-full flex flex-col items-start h-full">
     <div class=" mt-5 mx-2">
       <create-news-button class="mb-2" />
       <advertisment/>
     </div>

    </div>

  </div>
</template>

<script>
import Article from "@/components/Articles/Article";
import createNewsButton from "@/components/News/createNewsButton";
import Advertisment from "@/components/Advertisment/Advertisment";
export default {
name: "index",
  layout : 'admin',
  middleware : ['admin'] ,
  head(){
    return {
      title : 'Articles | Today'
    }
  },
  data(){
    return {
      articles : [],
      page : {
        current_page : 0 ,
        last_page : null
      }
    }
  },
  async asyncData(context){
    let res = await context.$axios.$get('/admin/articles')

    return {
      articles : res.data ,
      page : {
        current_page : res.meta.current_page ,
        last_page : res.meta.last_page
      }
    }
  },
  components : {
   Article ,
    Advertisment ,
    createNewsButton
  },
  methods : {
    async deleteArt(article , index){
      if (window.confirm('do you want to delete ' + article.title + ' Article ?')){
        let res = await this.$axios.$delete('/articles/'+ article.uuid).then(res => {
          window.alert(article.title + ' is deleted successfully')
          this.articles = this.articles.filter(function (value , ind) {
            return ind != index
          })
        }).catch(e => {
          console.log(e.response.data)
        })

      }
    },
    go(index){
      console.log(this.$route.query.page)
      let url = '/admin/articles?page='+index
      this.$router.push(url)
      let res = this.$axios.$get(url).then(res => {
        this.articles = res.data
        this.page.current_page = res.meta.current_page
      })
    },
    next(){
      if (this.page.current_page < this.page.last_page){
        this.go(this.page.current_page + 1)
      }
    },
    prev(){
      if (this.page.current_page >= 1){
        this.go(this.page.current_page - 1)
      }
    }
  }
}
</script>

<style scoped>

</style>
