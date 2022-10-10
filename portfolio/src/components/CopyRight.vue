<template>
  <div class="copyRight">
    <p>&copy; 2022 Lin, Ya Chi</p>
    <div class="animate-bounce w-2 h-2 mx-1">
      <img src="../assets/heart.svg" alt="heart" class="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CopyRight",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copyRight {
  @apply text-xs  font-mono flex flex-row h-5 items-center justify-center;
}
</style>
