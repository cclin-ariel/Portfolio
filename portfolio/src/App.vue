<template>
  <NavBar />
  <Home msg="Welcome to Lin's Page" />
  <About />
  <Work />
  <Contact />
  <CopyRight />
</template>

<script>
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import Contact from "./components/Contact.vue";
import CopyRight from "./components/CopyRight.vue";

export default {
  name: "App",
  components: {
    Home,
    NavBar,
    About,
    Work,
    Contact,
    CopyRight,
  },
};
</script>

<style>
.mobileBoxWidth {
  @apply px-5;
}
.scroll-tool {
  @apply w-full hover:animate-pulse;
}
.scroll-arrow {
  @apply absolute
          w-10
          h-28
          mx-auto
          inset-x-0
          bottom-8
          animate-bounce;
}
.scroll-circle {
  @apply w-20
          h-20
          absolute
          mx-auto
          inset-x-0
          bottom-6
          hover:opacity-30;
}
.scroll-click {
  @apply absolute inset-x-0 bottom-2 text-xs;
}
</style>
