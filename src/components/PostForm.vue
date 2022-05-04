<template>
  <form class="form" @submit.prevent="createPost">
            <custom-input class="mt-10" v-model="post.title" 
                          required
                          placeholder="Enter title" 
                          name="title" 
                          label="Title"
                          autocomplete="off"/>
            <custom-input class="mt-10" v-model="post.body" 
                          required
                          placeholder="Enter desctiption" 
                          name="body"
                          label="Description "
                          autocomplete="off"/>
            <custom-btn class="mt-15">Create</custom-btn>
        </form>
</template>

<script>
import CustomBtn from './UI/CustomBtn.vue';
import CustomInput from './UI/CustomInput.vue';
export default {
  components: { CustomInput, CustomBtn },
    data() {
        return {
            post: {
                id: null,
                title: '',
                body: '',
            }
        }
    },
    
    methods: {
        changeInput(e) {
            this.post[e.target.name] = e.target.value
        },
        createPost() { 
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                id: null,
                title: '',
                body: '',
            }
        },
    }
}
</script>

<style scoped>
.form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}

.mt-10 {
    margin-top: 10px;
}
.mt-15 {
    margin-top: 15px;
}
</style>