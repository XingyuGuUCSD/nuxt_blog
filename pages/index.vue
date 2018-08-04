<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <!-- nuxt-link works like a href -->
      <PostPreview
      id="1"
      thumbnail="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1"
      title="Post 1"
      previewText="Pist preiew text 1"
      />
      <PostPreview
      id="2"
      thumbnail="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&w=1000&q=80"
      title="Post 2"
      previewText="Pist preiew text 2"
      />
      <PostPreview
      id="3"
      thumbnail="https://cdn.static-economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
      title="Post 3"
      previewText="Pist preiew text 3"
      />
    </section>
  </div>
</template>

<script>
    import PostPreview from '@/components/Posts/PostPreview.vue'
    export default{
        components:{
            PostPreview
        }
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



