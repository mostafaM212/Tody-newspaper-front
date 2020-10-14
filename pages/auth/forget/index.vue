<template>
  <div class="flex justify-center items-center  ">
    <div class="lg:w-1/2 w-full mx-5 lg:mt-2 mt-40 my-5 border-dashed border-2 rounded-lg border-red-200 flex flex-col">
      <div class="flex justify-center items-center lg:h-20 h-12 bg-red-800 rounded-lg text-red-200 text-xl">
        Forget Your Password
      </div>
      <div class="p-4 flex flex-col ">
        <div class="text-red-500 text-xl border-b-2 border-dashed border-red-200 pb-5">
          write your correct email address to in email field to set new password and send it to that email.
        </div>
        <form v-on:submit.prevent="send">
          <div class="flex flex-col mt-2">
            <label for="email" class="text-red-500 text-xl">Email :</label>
            <input type="email" name="email" id="email"
                   class="p-2 rounded-lg border-dashed border-2 rounded-lg border-red-200"
                   placeholder="Write an Email "
                   v-model="email"
            >
          </div>
          <div class="flex justify-center items-center ">
            <button type="submit" class="bg-red-800 p-2 rounded-lg mt-1" >Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "index",
  data(){
    return {
      email : null
    }
  },
  methods : {
    send(){
      this.$router.push({ name : 'auth-forget-id' , params : {id : this.email}})
    }
  },
  head(){
    return {
      title : 'Forget Password | Toady'
    }
  }
}
</script>

<style scoped>

</style>
