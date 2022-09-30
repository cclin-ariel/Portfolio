<template>
  <div id="home">
    <!-- background video -->
    <div class="absolute h-screen w-full">
      <video autoplay muted loop class="h-auto w-full block md:hidden">
        <source
          src="../assets/home-bg-sm.mp4"
          type="video/mp4"
          class="absolute"
        />
      </video>
      <video
        autoplay
        muted
        loop
        class="h-auto w-full hidden md:block 2xl:hidden"
      >
        <source
          src="../assets/home-bg-md.mp4"
          type="video/mp4"
          class="absolute"
        />
      </video>
      <video autoplay muted loop class="h-auto w-full hidden 2xl:block">
        <source
          src="../assets/home-bg-xl.mp4"
          type="video/mp4"
          class="hidden 2xl:black absolute"
        />
      </video>
    </div>

    <div class="home mobileBoxWidth">
      <div class="text-xl">
        <div>
          <!-- <div class="animation translate-x-0" :class="{ transition: action }"> -->
          Hello! I'm <span class="text-3xl text-EggYellow"> Lin Ya Chi</span>.
        </div>
        <div class="mt-4">
          こんにちは!<span class="text-2xl"> リンガキ </span>と申します。
        </div>
      </div>
      <div class="mt-36">
        <div class="article-text">
          I'm from Taiwan, and I live in Japan now. <br />I've been learning
          coding by myself for about 2 years.
        </div>
        <div class="mt-4 article-text">
          台湾出身東京在住、<br />2年前からプログラミング言語を自学始めました。
        </div>
      </div>
      <a href="#about" class="scroll-tool">
        <img
          class="scroll-arrow"
          src="../assets/scroll-arrow.png"
          alt="arrow"
        />
        <svg height="100" width="100" class="scroll-circle">
          <circle
            cx="40"
            cy="40"
            r="30"
            stroke="#FFDF6C"
            stroke-width="1"
            fill="none"
          />
        </svg>

        <div class="scroll-click">click</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      action: false,
    };
  },
  methods: {
    triggerAnimation() {
      let hight = window.screen.height / 2;
      this.action =
        window.scrollY < hight
          ? true
          : // : window.scrollY < hight * 8.5
            // ? "isAbout"
            // : window.scrollY < hight * 13
            // ? "isWork"
            // : window.scrollY > hight * 13
            // ? "isContact"
            false;
    },
  },
  created() {
    window.addEventListener("scroll", this.triggerAnimation);
  },
};
</script>

<style scoped>
.home {
  @apply h-screen text-white justify-center text-center  flex flex-col relative;
}
.animation {
  @apply transform translate-x-20 duration-1000 ease-in-out delay-1000;
}
</style>
