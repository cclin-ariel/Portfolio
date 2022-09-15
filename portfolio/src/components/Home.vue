<template>
  <div id="home" class="home mobileBoxWidth">
    <div class="text-xl">
      <div>Hi! I'm Lin.</div>
      <div class="mt-4">こんにちは。リンと申します。</div>
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
      <img class="scroll-arrow" src="../assets/scroll-arrow.png" alt="arrow" />
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
  <!-- <div></div> -->
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  @apply h-screen text-white justify-center text-center bg-Blackish flex flex-col relative;
}
</style>
