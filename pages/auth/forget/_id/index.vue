<template>
  <div class="flex justify-center items-center  ">
    <div class="lg:w-1/2 w-full mx-5 lg:mt-2 mt-40 my-12 border-dashed border-2 rounded-lg border-red-200 flex flex-col">
      <div class="flex justify-center items-center lg:h-20 h-12 bg-red-800 rounded-lg text-red-200 text-xl">
        Forget Your Password
      </div>
      <div class="p-4 flex flex-col ">
        <div class="text-red-500 text-xl border-b-2 border-dashed border-red-200 pb-5">
         the password will be sent to that email Make sure  that email
          <span class="text-green-500">{{ this.$route.params.id }}</span> that you have written
          is an correct email to send your password to there.
        </div>
        <div class="flex justify-around items-center mt-4">
          <button v-on:click="send" class="bg-red-800 p-2 rounded-lg " >Send</button>
          <span class="text-sm text-red-700" v-if="error">{{this.error['email'][0]}}</span>
          <nuxt-link :to="{ name : 'auth-forget'}" class="bg-red-800 p-2 rounded-lg " >Back</nuxt-link>

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
      error : null
    }
  },
  methods : {
    async send(){
      let res = await this.$axios.post('/auth/forget',{
        email : this.$route.params.id
      }).then(res =>{
        window.alert('wait at most 5 minutes to get your message. ')
      }).catch(e => {
        this.error = e.response.data
      })
    }
  },
  head(){
    return {
      title : 'Send Password | Toady'
    }
  }
}
</script>

<style scoped>

</style>
