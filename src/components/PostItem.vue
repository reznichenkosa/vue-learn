<template>
   <li class="post">
        <h3 class="title">{{ post.title }}</h3>
        <p class="description">{{ post.body }}</p>
        <custom-close-btn @keydown="keyRemovePost" @click="removePost" class="post__close"/>
    </li>
</template>

<script>
import CustomCloseBtn from './UI/CustomCloseBtn.vue';
export default {
  components: { CustomCloseBtn },
    emits: ['remove'],
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        removePost() {
            this.$emit('remove', this.post.id)
        },
        keyRemovePost(e) {
            if (e.key === "Enter" || e.key === "Space") {
                this.removePost();
            }
        }
    }
}
</script>

<style scoped>

.post {
    position: relative;
    margin: 20px 0;
    padding: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: #fff;
}

.title {
    margin: 0;
}

.description {
    margin-top: 10px;
}

</style>