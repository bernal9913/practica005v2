<script>
  export default {
    name: "PostsList",
    data(){
      return {
        posts: []
      }
    },
    methods: {
      getPosts() {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url).then(response => response.json()).then(data => this.posts = data)
      },
    },
    mounted() {
      // equivalencia al onload()
      this.getPosts()
    }
  };
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}.- {{ post.title }}</h3>
      <!-- <p>{{ post.body }}</p> -->
      <a href="/posts/{{ post.id }}">leer post</a>
    </div>
  </div>
</template>
