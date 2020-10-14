<template>
  <div class="flex flex-col  w-full lg:ml-0 ml-16 " >
    <div class="flex justify-center text-4xl text-blue-800">
      All Users
    </div>
    <div class="flex justify-center rounded-lg">
      <input type="text" name="search" id="search" class="rounded-lg p-2 border-2 border-dashed border-blue-800"
             v-model.lazy="search"  v-on:change="searchMe"
             placeholder="search">
    </div>

    <div class="flex flex-col items-center  justify-between mt-5 rounded-lg lg:mr-0 mr-12 "
         v-for="user in posts">
      <div  class="bg-white lg:h-24 h-28 bg-blue-800 lg:w-8/12 w-11/12 cursor-pointer
              hover:bg-green-200 mt-12 flex lg:ml-0 ml-12 justify-between items-center rounded-lg"

      >
        <div class="flex  lg:w-9/12 w-11/12 lg:flex-wrap flex-no-wrap lg:flex-row
                    flex-col items-center rounded-lg lg:text-xl text-sm "
                    v-on:click="go(user)"
        >
          <div class="ml-2 h-12 w-12">
            <img :src="user.photo" alt="" :title="user.name" class="h-12 w-12 rounded-full">
          </div>
          <div class="ml-8 ">
            {{user.name}}
          </div>
          <div class="ml-8 overflow-x-auto lg:w-auto w-16">
            {{user.email}}
          </div>

        </div>
        <div class="flex rounded-lg lg:flex-row flex-col">
          <div class="ml-2 flex justify-end mr-2 rounded-lg " v-if="! user.is_admin">
            <button class="bg-green-500 lg:p-2 text-xl rounded-lg p-1 hover:bg-green-400"
                    v-on:click="Admin(user)" title="make admin">
              <i class="fas fa-user-shield"></i>
            </button>
          </div>
          <div class="ml-2 flex justify-end mr-2 rounded-lg" >
            <button class="bg-red-500 lg:p-2 p-1 text-xl rounded-lg hover:bg-red-300"
                    title="delete"
                    v-on:click="del(user)"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "index",
  layout : 'admin',
  middleware : ['myAuth','admin'],
  data(){
    return {
      users : [] ,
      search : this.$route.query.search ? this.$route.query.search : null  ,
      result : []
    }
  },
  async asyncData(context){
    let res = await context.$axios.$get('/admin/users').catch(e =>{
      console.log(e.response.data)
    })

    return {
      users : res.data
    }
  },
  computed : {
    posts(){
      if (this.result.length ===0){
        return this.users
      }
      return this.result
    },

  },
  methods : {
    searchMe(){
      this.$router.push('/admin/users?search='+this.search)
      this.users.filter(user =>{
         if (user.name === this.search){
           this.result.push(user)
         }else if(this.search ===''){
           this.result = []
         }
      })
    },
    async Admin(user){
      if(window.confirm('Do you want to add ' + user.name + ' to Admins list ?')) {
        let res = await this.$axios.$put('/admin/users/' + user.id).then(res => {
          window.alert('You have set an ' + user.name + ' is an admin successfully.')
          this.users.push(res.data)
        }).catch(e => {
          console.log(e.response.data)
        })
      }
    },
    async del(user){
      if(window.confirm('Do you want to delete ' + user.name + ' from users list ?')){
        let res = await this.$axios.$delete('/admin/users/'+user.id).then(res =>{
          window.alert( 'You have delete an '+user.name +' successfully.')
          this.users = this.users.filter(us => {
            return us.id !== user.id
          })
        }).catch(e => {
          console.log(e.response.data)
        })
      }

    },
    go(user){
      this.$router.push({name : 'auth-profile-id', params : {id : user.id }})
    }
  },
  head(){
    return {
      title : 'Users | Today'
    }
  }
}
</script>

<style scoped>

</style>
