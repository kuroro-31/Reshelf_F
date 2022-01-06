<template>
  <div class="reshelf-toast-wrapper">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.reshelf-toast {
  @apply rounded p-4 ml-auto shadow;
  max-width: 400px;
  &-wrapper {
    @apply fixed w-full;
    bottom: 20px;
    right: 20px;
  }
  &-success {
    color: white;
    background: #01bfa5;
  }
  &-danger {
    color: white;
    background: #ff0062;
  }
}

/* enter transitions */
.reshelf-toast-enter-active {
  animation: wobble 0.5s ease;
}
/* leave transitions */
.reshelf-toast-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
.reshelf-toast-leave-active {
  transition: all 0.3s ease;
}

@keyframes wobble {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    transform: translateX(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
    opacity: 1;
  }
  70% {
    transform: translateX(-8px);
    opacity: 1;
  }
  80% {
    transform: translateX(4px);
    opacity: 1;
  }
  90% {
    transform: translateX(-4px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
