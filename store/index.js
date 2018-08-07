import Vuex from "vuex";


const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post){
          state.loadedPosts.push(post);
      },
      editPost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        console.log(context)
        return context.app.$axios.$get('/posts.json')
        .then(data => {
            const postsArray = [];
            for(const key in data){
                postsArray.push({...data[key], id:key})
            }
            vuexContext.commit('setPosts', postsArray);
        })
        .catch(e => context.error(e));
      },
      addPost(vuexContext, post){
        const crearedPost = {
            ...post,
            updatedDate: new Date(),
        };
        return this.$axios.$post('https://nuxt-blog-556f3.firebaseio.com/posts.json', {...post, updatedDate: new Date()})
        .then(data => {
            vuexContext.commit('addPost', {...crearedPost, id: data.name});
            
        })
        .catch(e => console.log(e));
      },
      editedPost(vuexContext, editedPost){
        this.$axios.$put('https://nuxt-blog-556f3.firebaseio.com/posts/' + editedPost.id + '.json', editedPost)
        .then(res => {
            vuexContext.commit('editPost', editedPost)
        })
        .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;