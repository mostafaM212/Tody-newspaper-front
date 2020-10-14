<template>
  <div class="h-full flex justify-center items-center lg:mt-24 mt-56 mb-8 select-none">
    <div class="flex flex-col mx-8 w-full h-full  rounded-lg border-dashed border-red-200 border-2 ">
      <div class="flex justify-center items-center h-12 bg-red-800 rounded-lg text-xl text-red-200">
        New Post
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
          <div class="flex lg:flex-row flex-col justify-between  mt-4 ml-4 w-11/12">
           <div class="justify-start lg:w-2/3 w-full">
             <label for="category" class="text-xl text-gray-700"
                    :class="{
                    'text-red-700' : this.errors['title']
                  }"
             >category :</label>
             <select name="category" id="category" class="mt-2 p-3 rounded-lg w-56 border-dashed border-2 border-red-200"
                     v-model="form.category_id"
                     :class="{
                    'border-red-700 border-dotted' : this.errors['category_id']
                  }"
             >
               <option v-for="category in categories" :value="category.id" class="option">{{category.name}}</option>
             </select>
             <p v-if="errors['category_id']" class="text-sm text-red-700 ">{{ errors['category_id'][0]}}</p>
           </div>
            <div class="flex flex-col lg:flex-row  w-1/2 justify-start lg:items-center">
              <label for="see_first" class="text-xl text-gray-700">see first :</label>
              <input type="checkbox" v-model="form.see_first" class="rounded-full m-2">
            </div>
          </div>
          <div class="flex flex-col mt-4">
            <label for="image" class="text-xl ml-4 text-gray-700"
                   :class="{
                    'text-red-700' : this.errors['photo']
                  }"
            >image :</label>
            <input type="file" name="image" id="image" ref="image"
                   class=" ml-4 mt-2 p-3 w-11/12 rounded-lg border-dashed border-red-200 border-2"
                   v-on:change="select"
                   :class="{
                    'border-red-700 border-dotted' : this.errors['photo']
                  }"
            >
            <p v-if="errors['photo']" class="text-sm text-red-700 ml-5">{{ errors['photo'][0] +' '+ errors['photo'][1]}}</p>

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
      title : 'Create News | Today'
    }
  },
  data(){
    return {
      form : {
        title : null ,
        body : null ,
        category_id : null ,
        photo : null,
        see_first : false
      },
      categories : [],
      errors : []
    }
  },
  async asyncData(context){
    let res = await context.$axios.$get('/categories')

    return{
      categories : res.data
    }
  },
  methods : {
    select(event){
      this.form.photo = event.target.files[0]
    },

    async create(){
      let formData = new FormData()

      formData.append('title',this.form.title)
      formData.append('body',this.form.body)
      formData.append('category_id',this.form.category_id)
      formData.append('photo',this.form.photo)
      formData.append('see_first',this.form.see_first)

      let res = await this.$axios.post('/news',formData).then(res =>{
        window.alert('the post is created successfully.')
        this.$router.push({name : 'news-id',params : {id : res.data.data.uuid}})

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
