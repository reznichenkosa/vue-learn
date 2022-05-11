<template>
  <div class="page">
      <div @click="changePage(page)" class="page__number" :class="{'active': page === modelValue}" :key="page" v-for="page in totalPages">{{ page }}</div>
  </div>
</template>

<script>
export default {
    name: 'nav-page',
    props: {
        totalPages: {
            type: [String, Number],
            require: true
        },
        modelValue: {
            type: [String, Number],
            require: true
        }
    },
    methods: {
        changePage(page) {
            this.$emit('update:modelValue', page);
        }
    }
}
</script>

<style>
.page {
    display: flex;
    align-items: center;
    justify-content: center;
}
.page__number {
    width: 25px;
    height: 25px;
    border: 2px solid dodgerblue;
    border-radius: 5px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: dodgerblue;
    cursor: pointer;
    transition: .3s;
    font-weight: 500;
}
.page__number:last-child {
    margin-right: 0px;
}

.page__number:hover,
.active {
    background-color: dodgerblue;
    color: white;
}
</style>