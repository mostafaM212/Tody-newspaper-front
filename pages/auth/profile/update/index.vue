<template>
  <div class="flex justify-center items-center">
    <div
      class="flex flex-col lg:w-1/2 w-full mt-5 rounded-lg border-red-400 border-dashed border-2 lg:flex-no-wrap flex-wrap">
      <div class="flex justify-center items-center bg-red-800 text-red-200 rounded-lg text-xl p-2 w-full">
        Update Your Information
      </div>
      <div class="flex flex-col lg:m-5 lg:w-auto w-full">
        <form v-on:submit.prevent="update" enctype="multipart/form-data">
          <div class="flex flex-col ">
            <label for="Name" class="text-xl"
                   :class="{
                      'text-red-500' : this.error.hasOwnProperty('name')
                   }"
            >Name</label>
            <input type="text" id="Name"
                   class="p-2 rounded-lg border-dashed border-2 border-red-200"
                   placeholder="Write your name"
                   v-model="form.name"
                   :class="{
                      'border-red-800 border-dotted' :  this.error.hasOwnProperty('name')
                   }"
            >
            <p class="text-red-500 text-sm" v-if=" this.error.hasOwnProperty('name')">{{ this.error.name[0]}}</p>
          </div>
          <div class="flex justify-between mt-2">
            <div class="flex flex-col w-1/2">
              <label for="phone" class="text-xl"
                     :class="{
                      'text-red-500' : this.error.hasOwnProperty('phone')
                   }"
              >Phone</label>
              <input type="text" id="phone"
                     class="p-2 rounded-lg border-dashed border-2 border-red-200"
                     placeholder="Write your phone"
                     v-model="form.phone"
                     :class="{
                      'border-red-800 border-dotted' :  this.error.hasOwnProperty('phone')
                   }"
              >
              <p class="text-red-500 text-sm" v-if=" this.error.hasOwnProperty('phone')">{{ this.error.phone[0] }}</p>
            </div>
            <div class="flex flex-col w-1/2 ml-1">
              <label for="address" class="text-xl"
                     :class="{
                      'text-red-500' :  this.error.hasOwnProperty('address')
                   }"
              >Address</label>
              <input type="text" id="address"
                     class="p-2 rounded-lg border-dashed border-2 border-red-200"
                     placeholder="Write your address"
                     v-model="form.address"
                     :class="{
                      'border-red-800 border-dotted' :  this.error.hasOwnProperty('address')
                   }"
              >
              <p class="text-red-500 text-sm" v-if="this.error.hasOwnProperty('address')">{{ this.error.address[0] }}</p>
            </div>
          </div>
          <div class="flex flex-col mt-2">
            <label for="Profile" class="text-xl"
                   :class="{
                      'text-red-500' : this.error
                   }"
            >Profile</label>
            <input type="file" id="Profile"
                   class="p-2 rounded-lg border-dashed border-2 border-red-200"
                   placeholder="Write your password"
                   v-on:change="setPhoto"
            >
          </div>
          <div class="flex justify-center  ">
            <button type="submit" class="p-2 bg-red-800 rounded-full mt-3 h-12 w-12" title="update">
              <i class="far fa-edit"></i>
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
      title : 'Update | Today'
    }
  },
  data(){
    return {
      form : {
        name : null ,
        phone : null ,
        photo : null ,
        address : null
      },
      error : {}
    }
  },
  async asyncData(context){
    let res = await context.$axios.$get('/profile').catch(e => {
      this.error = e.response.data
    })
    return {
      form : {
        name : res.data.name ,
        phone : res.data.phone ,
        address : res.data.address
      }
    }
  },
  methods : {
    async update(){
      let formData = new FormData()

      formData.append('name',this.form.name)
      formData.append('photo',this.form.photo)
      formData.append('address',this.form.address)
      formData.append('phone',this.form.phone)

      let res = await this.$axios.post('/profile',formData).then(res => {
        window.alert('your data is updated successfully.')
        this.form = res.data
      }).catch(e => {
        this.error= e.response.data
      })
    },
    setPhoto(event){

      this.form.photo = event.target.files[0]
    }
  },
  middleware : ['myAuth']
}
</script>

<style scoped>

</style>
