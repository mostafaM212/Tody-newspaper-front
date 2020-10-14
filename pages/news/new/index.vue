<template>
  <div class="flex flex-col ">
    <div class=" h-40 flex items-center flex-col justify-center bg-red-800 rounded-lg mx-5 mb-2 lg:mt-2 mt-40">
      <div class="text-4xl text-red-200 ml-5">
        New News
      </div>
      <div class=" mt-4 text-xl text-red-300 ml-5">
        Here You will Find All New News in Different Categories.
      </div>
    </div>
    <div class="flex flex-col mt-4 lg:mx-5 mb-16 select-none flex-col">
      <div class="flex lg:justify-between lg:flex-row flex-col">
        <div class=" flex flex-col text-2xl lg:w-7/12 w-full">
          <div class="text-yellow-500 ">Important news</div>
          <div class=" border-2 border-dashed border-red-500 rounded-lg flex items-center h-48 flex overflow-x-auto">
            <div class="bg-red-800 flex w-9/12  my-2 rounded-lg hover:bg-red-700  mx-2 h-32 cursor-pointer"
                 v-on:click="go(post)"
                 v-for="post in posts"
                 :key="post.uuid"
                 v-if="post.see_first"
            >
              <div class=" w-64 mt-1 ml-1">
                <img :src="post.photo" alt="" :title="post.name" v-if="post.photo !== null">
              </div>
              <div class="ml-4 flex flex-col w-full justify-between">
                <div class="text-red-200 p-2 text-sm flex justify-between ">
                  <div class="">
                    {{post.created_at}}
                  </div>
                  <div class="">
                    {{post.category}}
                  </div>
                </div>
                <div class="lg:text-xl text-sm text-yellow-500">
                  {{post.title}}
                </div>

                <div class="text-xl flex lg:flex-row flex-col mt-0">
                  <div class="text-sm">written by :</div>
                  <div class="text-sm ml-2" > {{ post.owner.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start lg:w-5/12 w-full h-64  ml-2 ">
          <div class="text-2xl text-yellow-500">Photos</div>
          <div class="border-2 border-dashed border-red-500 rounded-lg mr-2">
            <div class="flex overflow-x-auto " v-if="$store.getters['getPhotos'].length > 0">
              <div class="">
                <button class="hover:bg-red-500 border-2 border-dashed border-red-500 rounded-lg p-12 rounded-full m-4" v-if="! show" v-on:click="show = !show">
                  <i class="fa fa-plus text-yellow-500 text-2xl"></i>
                </button>
                <form v-on:submit.prevent="add" enctype="multipart/form-data" v-if="show"
                      class="flex flex-col w-24 h-24 mt-12">
                  <input type="file" v-on:change="select">
                  <button class=" rounded-lg p-2 m-4" type="submit">
                    <i class="fa fa-plus text-red-500"></i>
                  </button>
                </form>
              </div>
              <div class="my-6 mx-1 " v-for="photo in photos">
                <nuxt-link :to="{name : 'photo-id' , params : {id : photo.uuid}}">
                  <img :src="photo.url" class="h-32 w-32 block" alt="">
                  <div class="w-40 w-40 text-center"></div>
                </nuxt-link>
              </div>
            </div>
            <div class="" v-else>
              <div class="">
                <button class="bg-red-500 hover:bg-yellow-300 rounded-lg p-12 rounded-full m-4" v-if="! show" v-on:click="show = !show">
                  <i class="fa fa-plus text-yellow-500 text-2xl"></i>
                </button>
                <form v-on:submit.prevent="add" enctype="multipart/form-data" v-if="show" class="flex flex-col w-24 h-24 mt-12">
                  <input type="file" name="p" id="p"  v-on:change="select">
                  <button class="bg-green-200 rounded-lg p-2 m-4" type="submit">
                    <i class="fa fa-plus text-red-500"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" flex flex-col text-2xl w-full">
        <div class="text-yellow-500 ">Recently news</div>
        <div class=" border-2 border-dashed border-red-500 rounded-lg flex items-center h-48 flex overflow-x-auto">

          <div class="bg-red-800 flex w-6/12  my-2 rounded-lg hover:bg-red-700  mx-2 h-32 cursor-pointer" v-on:click="go(post)"
               v-for="post in posts"
               :key="post.uuid"
          >
            <div class="h-full w-64 mt-1 ml-1">
              <img :src="post.photo" alt="" :title="post.name" v-if="post.photo !== null">

            </div>
            <div class="ml-4 flex flex-col w-full justify-between">
              <div class="text-red-200 p-2 text-sm flex justify-between ">
                <div class="">
                  {{post.created_at}}
                </div>
                <div class="">
                  {{post.category}}
                </div>
              </div>
              <div class="lg:text-xl text-sm text-yellow-500">
                {{post.title}}
              </div>

              <div class="text-xl flex lg:flex-row flex-col mt-0">
                <div class="text-sm">written by :</div>
                <div class="text-sm ml-2" > {{ post.owner.name }}</div>
              </div>
            </div>
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
      title : 'new News | Today'
    }
  },
  data(){
    return {
      posts : [],
      show : false,
      form : {
        photo : null
      }
    }
  },
  async asyncData(context){
    let res = await context.$axios.$get('/news')

    if (context.store.getters['getCategories'].length === 0){
      let res2 = await context.$axios.$get('/categories')
      context.store.dispatch('setCategories',res2.data)
    }

    return {
      posts : res.data
    }
  },
  methods : {
    go(post){
      this.$router.push({ name : 'news-id' , params : {id : post.uuid} })

    },
    select(event){
      this.form.photo = event.target.files[0]
    },
    async add(){
      let formData = new FormData()
      formData.append('photo',this.form.photo)
      let res = await this.$axios.$post('photos',formData).then(res =>{

        window.alert('the photo is added successfully.')
        this.$store.dispatch('addPhoto',res.data)
        this.show = false
      }).catch(e => {
        console.log(e.response.data)
      })
    }
  },
  computed : {
    photos(){
      return this.$store.getters['getPhotos']
    }
  },
  components : {
   CategoriesList ,
    Advertisment
  }
}
</script>

<style scoped>

</style>
