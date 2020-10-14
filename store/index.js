
export const state = ()=>({
  categories : [],
  photos : []
})


export const getters = {

  getCategories(state){
    return state.categories
  },
  getPhotos(state){
    return state.photos
  },
}

export const mutations = {

  SET_CATEGORIES(state , categories){

     state.categories = categories
  },
  SET_PHOTOS(state , photos){

    state.photos = photos
  },
  ADD_PHOTO(state , photos){

    state.photos.add(photos)
  }
}

export const actions = {

  setCategories({commit},categories){

    commit("SET_CATEGORIES",categories) ;
  },
  async nuxtServerInit({commit}){

    let res = await this.$axios.$get('/photos')
    commit('SET_PHOTOS',res.data)
  },
  addPhoto({commit} , photo){

    commit('ADD_PHOTO',photo)
  }
}
