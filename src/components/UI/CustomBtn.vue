<template>
  <button class="submit">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'custom-btn'
}
</script>

<style>
.submit {
    align-self: flex-end;
    padding: 0 10px;
    height: 40px;
    border: none;
    background: dodgerblue;
    color: white;
    font-weight: 600;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
    transition: .5s;
}

.submit:hover {
    color: darkslategray;
    background-color: transparent;
}
</style>