<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm"
export default {
   components:{
       AdminPostForm,
   },
   data(){
       return{
           loadedPost:{
               author: 'Alee GU',
               title: 'My blog',
               content: 'balabala',
               thumbnaillink: 'https://res.cloudinary.com/cmgverticals/image/upload/c_crop,g_north_west,h_2377,w_4509,x_0,y_200/c_fill,h_628,q_80,w_1200/e_sharpen,f_auto,fl_lossy,q_auto/v1523999146/GettyImages-916732976_s6udvr.jpg'
           }
       }
   }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

