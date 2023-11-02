<script>
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
const route = useRoute()
console.log(route)
const post = ref();
export default {
  name: "PostsDetail",
  data(){
    return {
      post: {}
    }
  },
  methods: {
    getPost() {
      let url = 'https://jsonplaceholder.typicode.com/posts/' + route.toString();
      fetch(url).then(response => response.json()).then(data => this.post = data)
    },
  },
  mounted() {
    // equivalencia al onload()
    this.getPost()
  }
};
</script>

<template>
  <h1>{{ post.title }}</h1>
  <h2>{{ post.userId }}</h2>
  <p>{{ post.body}}</p>

</template>

<style scoped>

</style>