<template>
  <div class="navBar">
    <div class="navItems">
      <button
        :class="{ 'text-EggYellow': thePage == 'isHome' }"
        class="navItem"
      >
        <a href="#home">home</a>
      </button>
      <button
        :class="{ 'text-EggYellow': thePage == 'isAbout' }"
        class="navItem"
      >
        <a href="#about">about</a>
      </button>
      <button
        :class="{ 'text-EggYellow': thePage == 'isWork' }"
        class="navItem"
      >
        <a href="#work1">work</a>
      </button>
      <button
        :class="{ 'text-EggYellow': thePage == 'isExperience' }"
        class="navItem"
      >
        <a href="#experience-TW">experience</a>
      </button>
      <button
        :class="{ 'text-EggYellow': thePage == 'isContact' }"
        class="navItem"
      >
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
      thePage: "isHome",
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let hight = window.screen.height / 2;
      this.thePage =
        window.scrollY < hight
          ? "isHome"
          : window.scrollY < hight * 3.5
          ? "isAbout"
          : window.scrollY < hight * 8
          ? "isWork"
          : window.scrollY < hight * 12.5
          ? "isExperience"
          : window.scrollY > hight * 12.5
          ? "isContact"
          : "";
    },
  },
};
</script>

<style scoped>
.navBar {
  @apply px-2 sm:px-3 md:px-8 bg-Blackish w-screen top-0 z-40 text-white fixed shadow-md mx-auto;
}
.navItems {
  @apply flex justify-end items-center h-14;
}
.navItem {
  @apply px-1.5 text-sm capitalize hover:text-EggYellow;
}
</style>
