<template>
  <div class="flex  h-screen w-full ml-24 justify-center ">
    <div class=" w-5/12 flex flex-col items-center">
      <div class="text-4xl mt-5 text-blue-800">
        Edit Category
      </div>
      <div class="mt-16  rounded-lg
            flex flex-col items-center w-full text-xl  border-2 border-dashed border-blue-600">
        <div class="bg-blue-600 rounded-lg p-4 flex justify-center w-full border-b-2 border-dashed border-blue-600">
          Edit
        </div>
        <div class="mt-5  w-11/12 mr-4 flex flex-col ml-3">
          <form v-on:submit.prevent="edit">
              <label for="" class="text-xl">Name :</label>
              <input type="text" class="p-2 rounded-lg w-full border-2 border-blue-300" v-model="category.name">
              <div class="flex justify-center   rounded-lg">
                <button type="submit" value="" class="hover:bg-blue-300 bg-blue-600 p-2 m-2 rounded-lg">edit</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "index" ,
  layout : 'admin',
  middleware : ['myAuth','admin'],
  head(){
  return {
    title : 'Edit | Today'
  }
  },
  data(){
    return {
     category : null
    }
  },
  async asyncData(context){

    let res = await context.$axios.$get('/categories/'+context.params.id)
    return {
      category : res.data
    }
  },
  methods : {
    async edit(){

      let res = await this.$axios.$put('/categories/'+this.category.uuid , {
        name : this.category.name
      }).then(res => {
        window.alert('the category '+ this.category.name + ' is updated successfully.')
        this.$router.push({ name : 'admin-categories'})
      })
    }
  }
}
</script>

<style scoped>

</style>
