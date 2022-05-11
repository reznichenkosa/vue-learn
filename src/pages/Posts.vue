<template>
    <div class="container">
        <div class="params">
            <custom-btn @click="showModal">Create post</custom-btn>
            <custom-input v-model="searchQuery"
                          placeholder="Enter search" 
                          name="search"
                          required
                          label="Search"
                          autocomplete="off"/>
            <custom-select v-model="selectedSort" :options="sortOptions"/>
        </div>
        <h2 class="title">Posts</h2>
        <post-list :loading="loadingPosts" :posts="sortedAndSeerachedPosts" @remove="removePost" />
        <preloader class="preloader" v-if="loadingPosts" />
        <custom-dialog v-model:show="dialogShow">
            <h2 class="title-dialog">Create post</h2>
            <post-form @create="createPost"/>
        </custom-dialog>
        <!-- <nav-page v-if="!loadingPosts" v-model="page" :totalPages="totalPages"/> -->
        <div ref="observer" class="observer"></div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from 'axios';

export default {
    components: {
        PostList, PostForm,
    },

    data() {
        return {
            posts: [],
            dialogShow: false,
            loadingPosts: false, 
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'Sort by Title'},
                {value: 'body', name: 'Sort by Description'}
            ]
        }
    },

    methods: {
        createPost(newPost) {
            this.posts.push(newPost);
            this.dialogShow = false;
        },
        removePost(id) {
            this.posts = this.posts.filter(post => post.id !== id)
        },
        showModal() {
            this.dialogShow = true
        },
        async fetchPosts() {
            try {
                this.loadingPosts = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                if (response.status !== 200) {
                    throw new Error('Error loading posts')
                }
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = [...this.posts, ...response.data];
            } catch(e) {
                alert('Error' + e.message)
            } finally {
                this.loadingPosts = false;
            }
        }
    },

    mounted() {
        this.fetchPosts();
    
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && this.page < this.totalPages) {
                this.page += 1;
                this.fetchPosts();
            }
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
        },
        sortedAndSeerachedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                post.body.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
    watch: {
        // page() {
        //     this.fetchPosts();
        // }
    }

}
</script>

<style scoped>

.params {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}


</style>