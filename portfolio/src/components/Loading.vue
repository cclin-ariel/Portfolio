<template>
  <div v-if="loading" class="loading">
    <div class="relative h-20 w-20">
      <div
        class="
          bg-gradient
          rounded-full
          w-4
          h-4
          animate-spin-move
          absolute
          top-9
          left-9
        "
      ></div>
      <img
        src="../assets/loading_icon/triangle.svg"
        alt="loading..."
        class="absolute -left-0.5"
      />
    </div>
    <p class="pt-2 text-white tracking-widest text-center text-xs w-full">
      Loading
    </p>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    setTimeout(() => (this.loading = false), 3000);
  },
};
</script>

<style scope>
.loading {
  @apply h-screen absolute w-screen bg-Blackish z-50 flex justify-center items-center flex-col;
}
.ball {
  @apply bg-EggYellow;
}
</style>
