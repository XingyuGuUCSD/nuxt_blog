<template>
    <section class="featured-posts">
      <!-- nuxt-link works like a href -->
      <PostPreview
      id="1"
      :is-admin = "isAdmin"
      thumbnail="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1"
      title="Post 1"
      previewText="Pist preiew text 1"
      />
      <PostPreview
      id="2"
      :is-admin = "isAdmin"
      thumbnail="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&w=1000&q=80"
      title="Post 2"
      previewText="Pist preiew text 2"
      />
      <PostPreview
      id="3"
      :is-admin = "isAdmin"
      thumbnail="https://cdn.static-economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png"
      title="Post 3"
      previewText="Pist preiew text 3"
      />
    </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue"
export default {
    components:{
        PostPreview,
    },
    props:{
        isAdmin:{
            type: Boolean,
            default: false,

        }
    }
}
</script>

<style scoped>

</style>


