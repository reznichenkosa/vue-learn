<template>
  <div class="field">
        <input class="input"
                ref="inputRef"
                type="text"
                :required="required"
                :autocomplete="autocomplete"
                :value="modelValue"
                :name="name"
                :id="name"
                @input="changeInput">
        <label :for="name" :data-placeholder="placeholder" :data-label="label"></label>
    </div>
</template>

<script>
export default {
    name: 'custom-input',
    props: {
        modelValue: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true
        },
        placeholder: {
            type: String,
            require: true
        },
        label: {
            type: String,
            require: true
        },
        required: {
            type: String,
        },
        focus: {
            type: Boolean,
            default: false,
        },
        autocomplete: String,
    },
    methods: {
        changeInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    },
    mounted() {
        if (this.focus) {
            this.$refs.inputRef.focus();
        }
        console.log(this.$attrs)
    }
}
</script>

<style scoped>

.input {
    width: 100%;
    height: 40px;
    border: none;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0 10px;
}

.input:focus {
    outline: 2px solid dodgerblue;
}

.field {
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

.input:valid + label:before,
.input:focus + label:before {
    content: attr(data-label);
    color: inherit;
    transform: translateX(calc(-100% - 20px)) translateY(-50%);
}

</style>