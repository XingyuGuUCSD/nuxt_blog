<template>
    <div class="posts-page">
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
            thumbnaillink: 'https://res.cloudinary.com/cmgverticals/image/upload/c_crop,g_north_west,h_2377,w_4509,x_0,y_200/c_fill,h_628,q_80,w_1200/e_sharpen,f_auto,fl_lossy,q_auto/v1523999146/GettyImages-916732976_s6udvr.jpg'
            },
            {
            id:'2',
            author: 'Alee GU',
            title: '1My blog',
            previewText: 'balabala',
            thumbnaillink: 'https://res.cloudinary.com/cmgverticals/image/upload/c_crop,g_north_west,h_2377,w_4509,x_0,y_200/c_fill,h_628,q_80,w_1200/e_sharpen,f_auto,fl_lossy,q_auto/v1523999146/GettyImages-916732976_s6udvr.jpg'
            },
            {
            id:'3',
            author: 'Alee GU',
            title: '2My blog',
            previewText: 'balabala',
            thumbnaillink: 'https://res.cloudinary.com/cmgverticals/image/upload/c_crop,g_north_west,h_2377,w_4509,x_0,y_200/c_fill,h_628,q_80,w_1200/e_sharpen,f_auto,fl_lossy,q_auto/v1523999146/GettyImages-916732976_s6udvr.jpg'
            }
            ] 
        })
        },1500);
    },
    created(){
        this.$store.dispatch('setPosts', this.loadPosts);
    }
}
</script>

<style scoped>
.posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>


