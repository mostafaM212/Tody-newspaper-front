<template>
  <div class="h-full  flex justify-between lg:flex-row flex-col items-center w-full mt-5 ml-16 mb-8 select-none">
    <div class="flex flex-col mx-8 w-full h-full  rounded-lg border-dashed border-red-200 border-2 ">
      <div class="flex justify-center items-center h-12 bg-blue-800 rounded-lg text-xl text-red-200">
        Update Article
      </div>
      <div class="flex flex-col mt-4 ml-4">
        <form enctype="multipart/form-data" v-on:submit.prevent="create">
          <div class="flex flex-col ">
            <label for="title" class="text-xl ml-4 text-gray-700"
                   :class="{
                    'text-red-700' : this.errors['title']
                  }"
            >title :</label>
            <input type="text" name="title" id="title"
                   v-model="form.title"
                   placeholder="write title"
                   class=" ml-4 mt-2 p-3 w-11/12 rounded-lg border-dashed border-red-200 border-2"
                   :class="{
                    'border-red-700 border-dotted' : this.errors['title']
                  }"
            >
            <p v-if="errors['title']" class="text-sm text-red-700 ml-5">{{ errors['title'][0]}}</p>
          </div>
          <div class="flex flex-col mt-4">
            <label for="body" class="text-xl ml-4 text-gray-700"
                   :class="{
                        'text-red-700' : this.errors['body']
                  }"
            >body :</label>
            <textarea  name="body" id="body"
                       placeholder="write body"
                       v-model="form.body"
                       class=" ml-4 mt-2 p-3 w-11/12 rounded-lg border-dashed border-red-200 border-2 h-32"
                       :class="{
                        'border-red-700 border-dotted' : this.errors['body']
                  }"
            ></textarea>
            <p v-if="errors['body']" class="text-sm text-red-700 ml-5">{{ errors['body'][0]}}</p>
          </div>
          <div class="flex justify-center items-center m-4 ">
            <button type="submit" class="hover:bg-blue-600 bg-blue-800 p-2  text-red-200 rounded-lg text-xl">Edit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex flex-col justify-end mr-2 ">
      <create-news-button class="mb-4" />
      <Advertisment />
    </div>
  </div>
</template>

<script>
import createNewsButton from "@/components/News/createNewsButton";
import Advertisment from "@/components/Advertisment/Advertisment";
export default {
name: "index",
  layout : 'admin',
  middleware : ['myAuth','admin'],
  head(){
    return {
      title : this.form.title +' | Today'
    }
  },
  data(){
    return {
      form : {
        title : null ,
        body : null ,
      },
      errors : []
    }
  },
  methods : {
    async create(){

      let res = await this.$axios.$put('/articles/'+this.$route.params.id , this.form).then(res =>{
        window.alert('your Article is updated successfully.')

        this.$router.push({name : 'articles-id',params : {id : this.$route.params.id}})

      }).catch(e => {
        this.errors = e.response.data
      })
    }
  },
  async asyncData(context){

  let res = await context.$axios.$get('/articles/'+ context.params.id)

    return {
      form : {
        title : res.data.title ,
        body : res.data.body
      }
    }
  },
  components : {
    Advertisment ,
    createNewsButton
  }
}
</script>

<style scoped>

</style>
