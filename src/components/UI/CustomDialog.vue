<template>
  <div class="dialog" v-if="show" @click.stop="closeDialog">
      <div @click.stop class="dialog__content">
          <slot></slot>
          <custom-close-btn @click="closeDialog" @keydown="keyCloseDialog"/>
      </div>
  </div>
</template>

<script>
import CustomCloseBtn from './CustomCloseBtn.vue'
export default {
  components: { CustomCloseBtn },
    name: 'custom-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeDialog() {
            this.$emit('update:show', false);
        },
        keyCloseDialog(e) {
            if (e.key === "Enter" || e.key === "Space") {
                this.closeDialog();
            }
        }
    }
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(10px);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fade .5s;
}

.dialog__content {
    position: relative;
    padding: 0 15px;
    max-width: 1170px;
    min-width: 500px;
}

@keyframes fade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

</style>