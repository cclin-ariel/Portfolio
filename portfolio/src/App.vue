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
.article-text {
  @apply text-xs leading-relaxed;
}
.scroll-tool {
  @apply w-full hover:animate-pulse  text-MediumGrey;
}
.scroll-arrow {
  @apply absolute
          w-10
          h-24
          mx-auto
          inset-x-0
          bottom-4
          animate-bounce;
}
.scroll-circle {
  @apply w-20
          h-20
          absolute
          mx-auto
          inset-x-0
          bottom-3
          hover:opacity-30;
}
.scroll-click {
  @apply absolute inset-x-0 bottom-1 text-xs text-center;
}
.title {
  @apply text-3xl uppercase relative pt-24;
}

.title-text {
  @apply border-b border-EggYellow w-36 text-center pr-2 relative;
}
.title-point {
  @apply w-1.5 h-1.5 rounded-full bg-EggYellow absolute right-0 -bottom-1;
}
.subtitle {
  @apply text-xl capitalize pt-32 flex flex-row;
}
.subtitle-text {
  @apply tracking-wider;
}
.subtitle-point {
  @apply w-2 h-2 rounded-full bg-EggYellow self-center mx-3;
}
</style>
