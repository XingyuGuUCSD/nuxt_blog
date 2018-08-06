<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadPosts"/>

  </div>
</template>

<script>
    import PostList from '@/components/Posts/PostList.vue'
    export default{
        components:{
            PostList,
        },
        asyncData(context, callback){
          //verify that asyncData is running on the server side
          console.log(context);
          console.log("asyncData executed...");
          setTimeout(() => {
            callback(null, {loadPosts: [
              {
                id:'1',
                author: 'Alee GU',
                title: '0My blog',
                previewText: 'balabala',
                thumbnail: 'https://res.cloudinary.com/cmgverticals/image/upload/c_crop,g_north_west,h_2377,w_4509,x_0,y_200/c_fill,h_628,q_80,w_1200/e_sharpen,f_auto,fl_lossy,q_auto/v1523999146/GettyImages-916732976_s6udvr.jpg'
              },
              {
                id:'2',
                author: 'Alee GU',
                title: '1My blog',
                previewText: 'balabala',
                thumbnail: 'https://res.cloudinary.com/cmgverticals/image/upload/c_crop,g_north_west,h_2377,w_4509,x_0,y_200/c_fill,h_628,q_80,w_1200/e_sharpen,f_auto,fl_lossy,q_auto/v1523999146/GettyImages-916732976_s6udvr.jpg'
              },
              {
                id:'3',
                author: 'Alee GU',
                title: '2My blog',
                previewText: 'balabala',
                thumbnail: 'https://res.cloudinary.com/cmgverticals/image/upload/c_crop,g_north_west,h_2377,w_4509,x_0,y_200/c_fill,h_628,q_80,w_1200/e_sharpen,f_auto,fl_lossy,q_auto/v1523999146/GettyImages-916732976_s6udvr.jpg'
              }
              ] 
            })
          },1500);
        },
    }
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>



