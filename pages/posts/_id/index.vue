<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{loadedPost.title}}</h1>
            <div class="post-details">
                <div>Last updated on {{loadedPost.updatedDate}}</div>
                <div>Written by {{loadedPost.author}}</div>
            </div>

            <p class="post-content">{{loadedPost.content}}t</p>
        </section>

        <section class="post-feedback">
            <p>Let me know what you think , please send a email to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a></p>
        </section>
    </div>
</template>

<script>
export default {
  asyncData(context, callback){
    setTimeout(() => {
      callback(null, {
        loadedPost:{
          id:'1',
          author: 'Alee GU',
          title: '0My blog (ID: ' + context.route.params.id + ")",
          previewText: 'balabala',
          updatedDate: new Date(),
          content: 'content asdjhjashdkhsadjkhasjdh',
          thumbnaillink: 'https://res.cloudinary.com/cmgverticals/image/upload/c_crop,g_north_west,h_2377,w_4509,x_0,y_200/c_fill,h_628,q_80,w_1200/e_sharpen,f_auto,fl_lossy,q_auto/v1523999146/GettyImages-916732976_s6udvr.jpg',
        }
      })
    }, 1000);
  }
}
</script>


<style>
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

