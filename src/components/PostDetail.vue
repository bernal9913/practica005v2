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
    getPosts() {
      let url = 'https://jsonplaceholder.typicode.com/posts/' + route.toString();
      fetch(url).then(response => response.json()).then(data => this.post = data)
    },
  },
  mounted() {
    // equivalencia al onload()
    this.getPosts()
  }
};
</script>

<template>
<h1>{{ post.title }}</h1>
</template>

<style scoped>

</style>