<template>
  <div class="navBar mobileBoxWidth">
    <div class="navItems">
      <button :class="{ 'text-EggYellow': isHome }" class="navItem">
        <a href="#home">home</a>
      </button>
      <button :class="{ 'text-EggYellow': isAbout }" class="navItem">
        <a href="#about">about</a>
      </button>
      <button :class="{ 'text-EggYellow': isWork }" class="navItem">
        <a href="#work">work</a>
      </button>
      <button :class="{ 'text-EggYellow': isContact }" class="navItem">
        <a href="#contact">contact</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isHome: true,
      isAbout: false,
      isWork: false,
      isContact: false,
    };
  },
};
</script>

<style scoped>
.navBar {
  @apply bg-Blackish w-full fixed z-50 text-white shadow-md;
}
.navItems {
  @apply flex justify-end items-center h-14;
}
.navItem {
  @apply px-1.5 text-sm capitalize hover:text-EggYellow;
}
</style>
