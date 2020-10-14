<template>
  <div class="w-full lg:pt-4 pt-40 mb-10 flex justify-center items-center">
    <div class="border-2 lg:w-2/3 w-2/3 shadow-xl border-dashed border-red-200 rounded-lg bg-red-100">
      <div
        class="flex justify-center items-center border-b-2
              rounded-lg lg:h-20 h-12 text-red-200 bg-red-800 lg:text-4xl text-xl border-red-200"
      >
        login
      </div>
      <div class="my-5 mx-3 h-44">
        <form v-on:submit.prevent="login">
          <div class="">
            <label for="email" class="text-xl text-red-500">Email Address :</label>
            <input type="email" name="email" id="email" class="border-dashed border-2 w-full p-2
             border-red-200 rounded-lg"
                   :class="{
                      'border-dotted border-red-800' : errors.email
                   }"
            v-model="form.email"
            >
            <p class="text-sm text-red-500" v-if="errors.email">{{errors.email[0]}}</p>
          </div>
          <div class="mt-2 flex flex-col">
            <label for="password" class="text-xl text-red-500">Password :</label>
            <input type="password" name="password" id="password" class="border-dashed border-2 w-full p-2
            border-red-200 rounded-lg"
            v-model="form.password"
           :class="{
              'border-dotted border-red-800' : errors.password
           }"
            >
            <p class="text-sm text-red-500" v-if="errors.email">{{errors.password[0]}}</p>

          </div>
          <div class="flex justify-center">
            <button type="submit" class="mt-3 bg-red-800 w-24 p-2 rounded-lg text-red-200 hover:text-yellow-500">login</button>
          </div>
        </form>
        <div class="flex justify-between">
          <div class="text-red-500">
            <p>Have no account ? <nuxt-link :to="{name : 'auth-register'}" class="hover:text-blue-500">Register</nuxt-link></p>
          </div>
          <div class="text-red-500">
             <nuxt-link :to="{name : 'auth-forget'}" class="hover:text-blue-500">Forget password ?</nuxt-link>
          </div>
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
      form : {
        email : null ,
        password : null
      },
      errors : []
    }
  },
  methods : {
    async login(){
       let res =this.$auth.loginWith('local',{
         data : this.form
       }).then(res =>{
          this.$router.push({name : 'auth-dashboard'})
       }).catch(e => {

         this.errors = e.response.data
       })
    }
  },
  head(){
    return {
      title : 'Login | Today'
    }
  }
}
</script>

<style scoped>

</style>
