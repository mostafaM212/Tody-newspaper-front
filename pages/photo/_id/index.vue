<template>
  <div class=" p-5 w-full flex justify-center items-center h-full my" >
    <div class="absolute  opacity-25 hover:opacity-100  fixed" v-if="this.$auth.loggedIn && this.$auth.user.is_admin">
      <button class="bg-red-700 p-4 rounded-full text-4xl " title="delete" v-on:click="delPhoto">
        <i class="fas fa-trash-alt"></i></button>
    </div>
    <img :src="photo.url" alt="">

  </div>
</template>

<script>
export default {
name: "index",
  data(){
    return {
      photo : null
    }
  },
  async asyncData(context){
    let res = await context.$axios.get('/photos/'+ context.params.id)
    return {
      photo : res.data.data
    }
  },
  methods : {
    async delPhoto(){
      let res = await this.$axios.delete('/photos/'+this.$route.params.id ).then(res => {
        window.alert('the photo is deleted successfully.')
        this.$router.back()
      }).catch(e => {
        console.log(e.response.data)
      })
    }
  }
}
</script>

<style scoped>
  .my{

  }
</style>
