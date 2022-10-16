<template>
  <div id="home">
    <!-- background video -->
    <div class="bg-video absolute h-screen w-full z-0">
      <video autoplay muted loop class="h-auto w-full block md:hidden">
        <source src="../assets/home-bg-sm.mp4" type="video/mp4" />
      </video>
      <video
        autoplay
        muted
        loop
        class="h-auto w-full hidden md:block 2xl:hidden"
      >
        <source src="../assets/home-bg-md.mp4" type="video/mp4" />
      </video>
      <video autoplay muted loop class="h-auto w-full hidden xl:block">
        <source src="../assets/home-bg-xl.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="home mobileBoxWidth">
      <div
        data-aos="zoom-in-down"
        data-aos-delay="3000"
        data-aos-duration="800"
        class="text-xl"
      >
        <div>
          Hello! I'm <span class="text-3xl text-EggYellow"> Lin, Ya Chi</span>.
        </div>
        <div class="mt-3 tracking-wider capitalize text-EggYellow">
          A Self-taught frontend developer
        </div>
        <div class="mt-8">
          こんにちは!<span class="text-2xl"> リン </span>です。
        </div>
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-delay="3000"
        data-aos-duration="1200"
        class="mt-36"
      >
        <div class="article-text">
          I'm from Taiwan, and based in Japan now. <br />I've taught myself
          programming for about 2 years.
        </div>
        <div class="mt-4 article-text">
          台湾出身東京在住、<br />2年前からプログラミング言語を独学し始めました。
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
    return {};
  },
};
</script>

<style scoped>
.home {
  @apply h-screen text-white justify-center text-center  flex flex-col relative;
}
</style>
