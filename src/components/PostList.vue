<template>
  <ul class="post-list" v-if="posts.length > 0">
    <transition-group name="post-transition" appear>
      <post-item
        :post="post"
        :key="post.id"
        v-for="post in posts"
        @remove="$emit('remove', post.id)"
      />
    </transition-group>
  </ul>
  <h2 v-else-if="!loading" class="title center">There are no posts</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  emits: ["remove"],
  components: {
    PostItem,
  },

  props: {
    posts: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.post-transition {
    opacity: 0;
    transition: all 0.5s ease;
}

.post-transition-enter-active,
.post-transition-leave-active {
  transition: all 0.5s ease;
}
.post-transition-enter-from,
.post-transition-leave-to {
  opacity: 0;
  transform: scale(.8);
}

.post-transition-move {
    transition: all 0.5s ease;
}
</style>