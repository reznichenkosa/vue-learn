<template>
  <div tabindex="0" class="close"></div>
</template>

<script>
export default {
    name: 'custom-btn-close'
}
</script>

<style scoped>
.close {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    transition: .5s;
}

.close::before, .close::after {
    content: '';
    display: block;
    width: 20px;
    height: 3px;
    position: absolute;
    top: 8px;
    background-color: dodgerblue;
}
.close::after {
    transform: rotate(-45deg);
}
.close::before {
    transform: rotate(45deg);
}

.close:hover {
    transform: rotate(180deg) scale(1.2);
}

.close:focus {
    transform: rotate(180deg) scale(1.2);   
}
</style>