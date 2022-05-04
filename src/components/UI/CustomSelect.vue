<template>
  <select v-model="modelValue" class="select" @change="changeOption">
      <option disabled value="">Select from list</option>
      <option :key="option.value" v-for="option in options" :value="option.value">{{option.name}}</option>
  </select>
</template>

<script>
export default {
    name: 'custom-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style scoped>
.select {
    height: 40px;
    border: 2px solid dodgerblue;
    color: dodgerblue;
    padding: 0 0 0 10px;
    border-radius: 5px;
    font-weight: 700;
}

.select:focus {
    outline: none;
    border: 2px solid dodgerblue;
    color: dodgerblue;
}
</style>