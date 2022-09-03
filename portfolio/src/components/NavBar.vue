<template>
  <div class="navBar mobileBoxWidth bg-Blackish">
    <div class="flex text-white justify-end h-14 items-center">
      <button
        :class="{ 'text-EggYellow': isHome }"
        class="navItem hover:text-EggYellow"
      >
        <a href=".home">home</a>
      </button>
      <button
        :class="{ 'text-EggYellow': isAbout }"
        class="navItem hover:text-EggYellow"
      >
        <a href=".about">about</a>
      </button>
      <button
        :class="{ 'text-EggYellow': isWork }"
        class="navItem hover:text-EggYellow"
      >
        <a href=".work">work</a>
      </button>
      <button
        :class="{ 'text-EggYellow': isContact }"
        class="navItem hover:text-EggYellow"
      >
        <a href=".contact">contact</a>
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

<style>
.navBar {
  @apply fixed w-full;
}
.navItem {
  @apply px-1.5 text-sm capitalize;
}
</style>
