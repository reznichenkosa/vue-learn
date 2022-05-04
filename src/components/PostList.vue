<template>
    <div class="post-list" v-if="posts.length > 0">
        <post-item :post="post" :key="post.id" v-for="post in posts" @remove="$emit('remove', post.id )"/>
    </div>
    <h2 v-else-if="!loading" class="title center">There are no posts</h2>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
    emits: ['remove'],
    components: {
        PostItem
    },

    props: {
        posts: {
            type: Array,
            required: true
        },
        loading: {
            type: Boolean,
            required: true,
        }
    }
    
}
</script>

<style scoped>



</style>