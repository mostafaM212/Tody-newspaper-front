<template>
  <div class="flex lg:justify-between justify-center lg:flex-row flex-col select-none">
    <div class=" lg:w-11/12 my-5 mx-5 w-full lg:mx-5 mb-4 flex flex-col border-dashed border-2 border-red-500 rounded-lg">
      <div class=" lg:h-64 flex lg:flex-row flex-col border-b  border-red-500">
        <img :src="news.photo" alt="" :title="news.title" class="h-64 lg:w-64 w-full rounded-lg">
        <div class="text-2xl m-5 flex flex-col">
          <div class="w-32">
            <p class="text-sm  rounded-full bg-gray-300 lg:w-auto p-2 flex justify-center" > {{news.created_at}}</p>
          </div>
          <div class="">
            <p class="mt-5 text-xl bg-gray-300 rounded-full p-2 lg:w-auto flex justify-center">Category {{news.category}}</p>
          </div>
          <div class="">
            <p class="mt-5">{{news.title}}</p>
          </div>
        </div>
      </div>
      <div class="p-2">
          <div class="flex flex-col">
            <div class="text-3xl">
              Subject
            </div>
            <div class="text-xl ">
              {{news.body}}
            </div>
            <div class="mt-5">
              Published By {{news.owner.name }}
            </div>
            <div class="mt-5 flex justify-center"
                 v-if="news.owner.id === this.$auth.user.id || this.$auth.user.is_admin">
              <nuxt-link :to="{name : 'news-id-update' , params : { id : this.news.uuid}}"
                         class="bg-red-800 py-2 px-4 text-xl rounded-lg hover:bg-red-500 text-red-200"
                         title="edit"
              >
                <i class="fas fa-edit"></i>
              </nuxt-link>
              <button   v-on:click="deleteNews "
                         class="bg-red-800 py-2 ml-4 px-4 text-xl rounded-lg hover:bg-red-500 text-red-200"
                         title="delete"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import Advertisment from "@/components/Advertisment/Advertisment";
export default {
name: "index",
  head(){
    return {
      title : this.news.category + ' | Today'
    }
  },
  data(){
    return {
      news : null
    }
  },
  async asyncData(context){

   let res = await context.$axios.$get('/news/'+context.params.id )
    let res2 = await context.$axios.$get('/categories')

    context.store.dispatch('setCategories',res2.data)
    return {
      news : res.data
    }
  },
  components : {
    CategoriesList,
    Advertisment
  },
  methods : {
    async deleteNews(){
      let res = await this.$axios.$delete('/news/'+this.news.uuid).then(res =>{
        window.alert(this.news.title + ' post is deleted successfully.')
        this.$router.back()
      }).catch(e =>{
        console.log(e.response.data)
      })

    }
  }
}
</script>

<style scoped>

</style>
