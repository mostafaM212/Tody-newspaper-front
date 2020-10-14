<template>
  <div class=" flex-col select-none mb-6 ">
    <div class=" bg-red-800 flex lg:h-48 h-64 pt-24 pl-5 lg:flex-row flex-col pt-20">
      <div class="text-4xl text-red-200 ">Create Category</div>
      <div class="text-xl text-red-100 ml-6 pt-5">
        You will create new category that will contain many of different news.
      </div>
    </div>
    <div class=" h-64 flex justify-center  mt-3 items-center">
      <div class="border-2 border-dashed border-red-200 w-1/3 h-full rounded-lg flex-col">
        <div class="flex justify-center items-center h-20 bg-red-800 rounded-lg text-red-200 text-xl">
          Create Category
        </div>
        <div class="h-48 pt-4 pl-1 flex flex-col items-between w-full">
          <form action="">
            <label for="name" class="text-red-400 text-lg mb-8">Category Name :</label>
            <div class="w-full pt-2">
              <input type="text" class=" px-1 w-full h-12 pl-2 border-2 border-dashed border-red-200" v-model="form.name">
            </div>
           <div class="flex justify-center mt-5  rounded-lg text-red-200">
             <button type="submit" class="bg-red-800 p-2 rounded-lg "
                  :class="{
                    'cursor-not-allowed opacity-75' : allowed
                  }"
                     v-on:click.prevent="create"
             >create</button>
           </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      allowed : true,
      form : {
        name : null
      }
    }
  },
  watch : {
    'form.name'(value){

      if (value == null){
        this.allowed = true
      }else {
        this.allowed =false
      }
    }
  },
  methods : {
    async create(){

       await this.$axios.$post('/categories',this.form).then(res =>{
         window.alert('the Category '+ this.form.name + ' is created successfully.')
       }).catch(e => {
        console.log(e.response.data)
      })

    }
  },
  middleware : ['myAuth'],
  head(){
    return {
      title : 'Create Category | Today'
    }
  }
}
</script>

<style scoped>

</style>
