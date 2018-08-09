<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm"

export default {
   layout:'admin',
   middleware: ['check-auth','auth'],
   components:{
       AdminPostForm,
   },
   methods:{
     onSubmitted(editedPost){
       this.$store.dispatch("editPost", editedPost).then(() => {
       this.$router.push("/admin");
      });
       
     }
   },
   asyncData(context){
      
      return context.$axios.$get(
        process.env.baseUrl + "/posts/" +
          context.params.postid +
          ".json"
      )
      .then(data => {
        return {
          loadedPost: {...data, id: context.params.postid},
        }
      })
      .catch(e => context.error(e));
   },

   
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

