<template>
  <div class="h-full flex justify-center items-center lg:mt-24 mt-56 mb-8 select-none">
    <div class="flex flex-col mx-8 w-full h-full rounded-lg border-dashed border-red-200 border-2 ">
      <div class="flex justify-center items-center h-12 bg-red-800 rounded-lg text-xl text-red-200">
        New Article
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
            <button type="submit" class="bg-red-800 p-2  text-red-200 rounded-lg text-xl">create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  head(){
    return {
      title : 'Your Article | Today'
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
      let formData = new FormData()

      formData.append('title',this.form.title)
      formData.append('body',this.form.body)

      let res = await this.$axios.post('/articles',formData).then(res =>{
        window.alert('your Article is posted successfully.')

        this.$router.push({name : 'articles-id',params : {id : res.data.data.uuid}})

      }).catch(e => {
        this.errors = e.response.data
      })
    }
  },
  middleware : ['myAuth']
}
</script>

<style scoped>

</style>
