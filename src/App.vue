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
        <post-list v-if="!loadingPosts" :loading="loadingPosts" :posts="sortedAndSeerachedPosts" @remove="removePost" />
        <preloader class="preloader" v-else/>
        <custom-dialog v-model:show="dialogShow">
            <h2 class="title-dialog">Create post</h2>
            <post-form @create="createPost"/>
        </custom-dialog>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import CustomDialog from './components/UI/CustomDialog.vue';
import axios from 'axios';
import Preloader from './components/UI/Preloader.vue';
import CustomSelect from './components/UI/CustomSelect.vue';

export default {
    components: {
        PostList, PostForm,
        CustomDialog,
        Preloader,
        CustomSelect
    },

    data() {
        return {
            posts: [],
            dialogShow: false,
            loadingPosts: false, 
            selectedSort: '',
            searchQuery: '',
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
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                if (response.status !== 200) {
                    throw new Error('Error loading posts')
                }
                this.posts = response.data;
            } catch(e) {
                alert('Error' + e.message)
            } finally {
                this.loadingPosts = false;
            }
        }
    },

    mounted() {
        this.fetchPosts();
    },
    // watch: {
    //     selectedSort(newValue) {
    //         this.posts.sort((a, b) => a[newValue]?.localeCompare(b[newValue]))
    //     }
    // },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
        },
        sortedAndSeerachedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                post.body.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    }

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    color: darkslategray;
}

.container {
    width: 900px;
    padding: 30px 30px;
    margin: 0 auto;
}

.title {
    margin-top: 20px;
}

.title-dialog {
    margin-top: 10px;
}

.center {
    text-align: center;
}

.preloader {
    margin-top: 20px;
}

.params {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>