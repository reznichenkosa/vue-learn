<template>
  <div class="field">
        <input class="form__input"
                type="text"
                :autocomplete="autocomplete"
                :value="modelValue"
                :name="name" 
                :id="name"
                :required="required"
                @input="changeInput">
        <label :for="name" :data-placeholder="placeholder" :data-label="label"></label>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    name: 'custom-input',
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        required: {
            type: Boolean,
            required: true
        },
        autocomplete: String,
    },
    methods: {
        changeInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style scoped>
.form__input {
    width: 100%;
    height: 40px;
    border: none;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0 10px;
}

.form__input:focus {
    outline: 2px solid dodgerblue;
}

.field {
    margin-top: 10px;
    position: relative;
}

label:before {
    content: attr(data-placeholder);
    color: lightgray;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    left: 10px;
    cursor: text;
    transition: .5s;
}

.form__input:focus + label:before {
    content: attr(data-label);
    color: inherit;
    transform: translateX(calc(-100% - 20px)) translateY(-50%);
}

.form__input:valid + label::before {
    content: attr(data-label);
    color: inherit;
    transform: translateX(calc(-100% - 20px)) translateY(-50%);
} 
</style>