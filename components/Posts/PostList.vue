<template>
    <section class="featured-posts">
    <PostPreview 
        v-for="post in posts" :key="post.id" :id="post.id" :is-admin="isAdmin" :thumbnail="post.thumbnaillink"
        :title="post.title" :previewText="post.previewText"></PostPreview>
      
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

        },
        posts:{
            type: Array,
            required: true,
        },
    }
}
</script>

<style scoped>

</style>


