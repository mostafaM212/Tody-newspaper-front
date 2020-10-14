<template>
<div class="flex justify-center items-center select-none">
  <div
    class="flex flex-col lg:w-2/3 lg:mt-2 mt-40  w-full mt-5 rounded-lg border-red-400 border-dashed border-2 lg:flex-no-wrap flex-wrap">
    <div class="flex justify-center items-center bg-red-800 text-red-200 rounded-lg text-xl p-2 w-full">
      Register
    </div>
    <div class="flex flex-col lg:m-5 lg:w-auto w-full">
      <form v-on:submit.prevent="register" enctype="multipart/form-data">
        <div class="flex flex-col ">
          <label for="Name" class="text-xl"
                 :class="{
                    'text-red-800':this.error['name']
                 }"
          >Name</label>
          <input type="text" id="Name"
                 class="p-2 rounded-lg border-dashed border-2 border-red-200"
                 placeholder="Write your name"
                 v-model="form.name"
                 :class="{
                   'border-red-800 border-dotted' : this.error['name']
                 }"
          >
          <p class="text-sm text-red-500" v-if="error['name']">{{ error['name'][0] }}</p>
        </div>
        <div class="flex flex-col mt-2">
          <label for="email" class="text-xl"
                 :class="{
                    'text-red-800':this.error['email']
                 }"
          >Email</label>
          <input type="email" id="email"
                 class="p-2 rounded-lg border-dashed border-2 border-red-200"
                 placeholder="Write your email"
                 v-model="form.email"
                 :class="{
                   'border-red-800 border-dotted' : this.error['email']
                 }"
          >
          <p class="text-sm text-red-500" v-if="error['email']">{{ error['email'][0] }}</p>
        </div>
        <div class="flex flex-col mt-2">
          <label for="password" class="text-xl"
                 :class="{
                    'text-red-800':this.error['email']
                 }"
          >Password</label>
          <input type="password" id="password"
                 class="p-2 rounded-lg border-dashed border-2 border-red-200"
                 placeholder="Write your password"
                 v-model="form.password"
                 :class="{
                   'border-red-800 border-dotted' : this.error['password']
                 }"
          >
          <p class="text-sm text-red-500" v-if="error['password']">{{ error['password'][0] }}</p>
        </div>
        <div class="flex justify-between mt-2">
         <div class="flex flex-col w-1/2">
           <label for="phone"
                  :class="{
                    'text-red-800':this.error['phone']
                 }"
                  class="text-xl">Phone</label>
           <input type="text" id="phone"
                  class="p-2 rounded-lg border-dashed border-2 border-red-200"
                  placeholder="Write your phone"
                  v-model="form.phone"
                  :class="{
                   'border-red-800 border-dotted' : this.error['phone']
                 }"
           >
           <p class="text-sm text-red-500" v-if="error['phone']">{{ error['phone'][0] }}</p>
         </div>
          <div class="flex flex-col w-1/2 ml-1">
            <label for="address"
                   :class="{
                    'text-red-800':this.error['address']
                 }"
                   class="text-xl">Address</label>
            <input type="text" id="address"
                   class="p-2 rounded-lg border-dashed border-2 border-red-200"
                   placeholder="Write your address"
                   v-model="form.address"
                   :class="{
                   'border-red-800 border-dotted' : this.error['address']
                 }"
            >
            <p class="text-sm text-red-500" v-if="error['address']">{{ error['address'][0] }}</p>
          </div>
        </div>
        <div class="flex flex-col mt-2">
          <label for="Profile"
                 :class="{
                    'text-red-800':this.error['photo']
                 }"
                 class="text-xl">Profile</label>
          <input type="file" id="Profile"
                 class="p-2 rounded-lg border-dashed border-2 border-red-200"
                 placeholder="Write your password"
                 v-on:change="setPhoto"
                 :class="{
                   'border-red-800 border-dotted' : this.error['photo']
                 }"
          >
          <p class="text-sm text-red-500" v-if="error['photo']">{{ error['phone'][0] }}</p>
        </div>
        <div class="flex justify-center  ">
          <button type="submit" class="p-2 bg-red-800 rounded-full mt-3" title="new user">
            <i class="fas fa-user-plus"></i>
          </button>
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
      title : 'Register | Today'
    }
  },
  data(){
    return {
      form : {
        name : null ,
        email : null ,
        password : null ,
        phone : null ,
        photo : null ,
        address : null
      },
      error : []
    }
  },
  methods : {
    async register(){
      let formData = new FormData()

      formData.append('name',this.form.name)
      formData.append('email',this.form.email)
      formData.append('password',this.form.password)
      formData.append('photo',this.form.photo)
      formData.append('address',this.form.address)
      formData.append('phone',this.form.phone)

      let res = await this.$axios.post('/auth/register',formData).catch(e => {
        this.error = e.response.data
      })
      await this.$auth.loginWith('local',{
        data : {
          email : this.form.email ,
          password : this.form.password
        }
      })
    },
    setPhoto(event){

      this.form.photo = event.target.files[0]
    }
  }
}
</script>

<style scoped>

</style>
