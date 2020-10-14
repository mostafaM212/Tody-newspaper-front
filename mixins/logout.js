

export default {

  methods : {
    async logout(){
      let res = this.$auth.logout().then(res =>{
        this.$router.push('/')
      }).catch(e => {
        console.log(e.response)
      })
    }
  }
}
