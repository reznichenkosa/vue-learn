<template>
  <form class="form" @submit.prevent="createPost">
            <custom-input v-model="post.title" 
                          :required="true" 
                          placeholder="Enter title" 
                          name="title" 
                          label="Title"
                          autocomplete="off"/>
            <custom-input v-model="post.body" 
                          :required="true" 
                          placeholder="Enter desctiption" 
                          name="body"
                          label="Description "
                          autocomplete="off"/>
            <custom-btn class="submit-btn">Create</custom-btn>
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

.submit-btn {
    margin-top: 15px;
}
</style>