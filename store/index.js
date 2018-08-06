import Vuex from "vuex";
import axios from "axios";

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
        return axios.get('https://nuxt-blog-556f3.firebaseio.com/posts.json')
        .then(res => {
            const postsArray = [];
            for(const key in res.data){
                postsArray.push({...res.data[key], id:key})
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
        return axios.post('https://nuxt-blog-556f3.firebaseio.com/posts.json', {...post, updatedDate: new Date()})
        .then(res => {
            vuexContext.commit('addPost', {...crearedPost, id: res.data.name});
            
        })
        .catch(e => console.log(e));
      },
      editedPost(vuexContext, editedPost){},
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