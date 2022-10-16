<template>
  <Loading />
  <NavBar />
  <Home />
  <About />
  <Work />
  <ExperienceHobby />
  <Contact />
  <CopyRight />
</template>

<script>
import Loading from "./components/Loading.vue";
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import ExperienceHobby from "./components/ExperienceHobby.vue";
import Contact from "./components/Contact.vue";
import CopyRight from "./components/CopyRight.vue";

export default {
  name: "App",
  components: {
    Loading,
    Home,
    NavBar,
    About,
    Work,
    ExperienceHobby,
    Contact,
    CopyRight,
  },
};
</script>

<style>
#home,
#contact {
  @apply bg-Blackish;
}
#work,
#skill {
  @apply bg-MediumGrey z-20 relative;
}
#hobby {
  @apply bg-EggYellow;
}
.mobileBoxWidth {
  @apply px-5 max-w-screen-md mx-auto;
}
.article-text {
  @apply text-xs leading-relaxed;
}
.scroll-tool {
  @apply w-full hover:animate-pulse;
}

.scroll-arrow {
  @apply absolute
          w-10
          h-24
          mx-auto
          inset-x-0
          bottom-12
          animate-bounce;
}
.scroll-circle {
  @apply w-20
          h-20
          absolute
          mx-auto
          inset-x-0
          bottom-8
          hover:opacity-30;
}
.scroll-click {
  @apply absolute inset-x-0 bottom-5 text-xs text-center text-MediumGrey;
}
#skill .scroll-click,
.work .scroll-click {
  @apply text-DarkGrey;
}
#hobby .scroll-click {
  @apply text-white;
}
.title {
  @apply text-3xl uppercase relative pt-32 xl:pt-0;
}

.title-text {
  @apply border-b border-EggYellow w-36 text-center pr-2 relative tracking-wider;
}
#experience-TW .title-text {
  @apply w-56;
}
.title-point {
  @apply w-1.5 h-1.5 rounded-full bg-EggYellow absolute right-0 -bottom-1;
}
.subtitle {
  @apply text-xl capitalize pt-32  flex flex-row;
}
#skill .subtitle {
  @apply pt-32 xl:pt-0 xl:-mt-20;
}
#experience-TW .subtitle {
  @apply pt-20;
}
#experience-JP .subtitle {
  @apply pt-36 xl:pt-0;
}
#hobby .subtitle {
  @apply text-DarkGrey;
}
.subtitle-text {
  @apply tracking-wider;
}
#hobby .subtitle-text {
  @apply text-DarkGrey;
}
.subtitle-point {
  @apply w-2 h-2 rounded-full bg-EggYellow self-center mx-3;
}
#hobby .subtitle-point {
  @apply bg-MediumGrey;
}
</style>
