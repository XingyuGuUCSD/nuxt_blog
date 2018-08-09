import Vuex from "vuex";


const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      setToken(state, token){
        state.token = token;
      }
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
        return this.$axios.$post('https://nuxt-blog-556f3.firebaseio.com/posts.json?auth=' + vuexContent.state.token, crearedPost)
        .then(data => {
            vuexContext.commit('addPost', {...crearedPost, id: data.name});
            
        })
        .catch(e => console.log(e));
      },
      editPost(vuexContext, editedPost){
        this.$axios.$put('https://nuxt-blog-556f3.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContent.state.token, editedPost)
        .then(res => {
            vuexContext.commit('editPost', editedPost)
        })
        .catch(e => consolqqe.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      authenticateUser(vuexContext, authData){
          let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbAPIKey;
          if(!authData.isLogin){
            authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.fbAPIKey;
          }
          return this.$axios.$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then(result => {
            vuexContext.commit('setToken', result.idToken);
          })
          .catch(e => console.log(e));
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