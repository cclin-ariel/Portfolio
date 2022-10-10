<template>
  <div id="about" class="about-PR">
    <div class="mobileBoxWidth">
      <!-- page titleÏ -->
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        class="title"
      >
        <div class="title-text">
          about
          <div class="title-point"></div>
        </div>
      </div>
      <div class="PR-section">
        <!-- PR pic -->
        <div data-aos="fade-up-right" data-aos-duration="800">
          <img src="../assets/Lin.jpg" alt="Lin" class="PR-pic" />
        </div>
        <!-- PR -->
        <div
          data-aos="fade-up-left"
          data-aos-duration="800"
          class="article-text PR-text"
        >
          <div>
            I'm a team player but also enjoying working alone. <br />
            I like to create something from nothing. <br />
            I speak Mandarin/Chinese, Japanese, English, and Taiwanese.
          </div>
          <div class="mt-2 sm:mt-8">
            チームワークが好きですが、ゼロから独り作業も好きです。<br />
            中国語、日本語、英語、台湾語が話せます。
          </div>
        </div>
      </div>
      <!-- PR scroll -->
      <a href="#skill" class="scroll-tool">
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
  <!--subtitle  skill -->
  <div id="skill">
    <div class="skill mobileBoxWidth bg-MediumGrey">
      <div class="subtitle">
        <div class="subtitle-point"></div>
        <div
          class="
            subtitle-text
            after:content-['*'] after:ml-0.5 after:text-red-500
          "
        >
          Expertise & Skill Set
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" class="skill-rings">
        <div class="skill-ring">
          <ul class="ring-text">
            <li>HTML&CSS</li>
            <li>JavaScript</li>
            <li>JSON Server</li>
          </ul>
        </div>
        <div class="skill-ring">
          <ul class="ring-text">
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <a
              href="https://www.frontendmentor.io/profile/cclin-github/solutions"
              class="
                text-xs
                sm:text-sm
                text-center
                px-2
                underline
                hover:text-MediumGrey
              "
              target="_blank"
            >
              Responsive Web Design
            </a>
          </ul>
        </div>
        <div class="skill-ring">
          <ul class="ring-text">
            <li>Vue.js</li>
            <li>Vue Router</li>
            <li>Vue CLI</li>
          </ul>
        </div>
        <div class="skill-ring">
          <ul class="ring-text">
            <li class="text-center">
              <!-- Figma<br /> -->
              <a
                href="https://www.figma.com/file/wpWAkdD17ufryrrVnzFLAJ/Portfolio-2022?node-id=92%3A71"
                class="underline hover:text-MediumGrey"
                target="_blank"
                >Figma</a
              >
            </li>
          </ul>
        </div>
      </div>
      <a href="#work1" class="scroll-tool">
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
  name: "About",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.about-PR {
  @apply h-screen text-Blackish bg-white flex flex-col relative xl:justify-center;
}
.PR-section {
  @apply flex flex-col sm:flex-row justify-center;
}
.PR-pic {
  @apply max-w-xs w-7/12 sm:w-11/12 mt-10 shadow-lg rounded;
}
.PR-text {
  @apply mt-5 text-right sm:self-end;
}
.skill {
  @apply text-white tracking-wider h-screen relative xl:flex xl:flex-col xl:justify-center;
}
.skill-rings {
  @apply flex flex-wrap mt-10 justify-center h-1/2 items-center;
}
.skill-ring {
  @apply w-36 h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-EggYellow shadow-lg m-2.5 sm:mx-10 md:mx-14 flex justify-center items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl;
}
.ring-text {
  @apply h-5/6 flex flex-col items-center justify-evenly text-sm md:text-base text-DarkGrey;
}
</style>
