<template>
  <div id="about" class="about-PR">
    <div class="mobileBoxWidth">
      <!-- page titleÏ -->
      <div class="title">
        <div class="title-text">
          about
          <div class="title-point"></div>
        </div>
      </div>
      <div class="PR-section">
        <!-- PR pic -->
        <div>
          <img src="../assets/Lin.jpg" alt="Lin" class="PR-pic" />
        </div>
        <!-- PR -->
        <div class="article-text PR-text">
          <div>
            I like working alone, but also like to be a team player. <br />
            I like to create something from nothing.
          </div>
          <div class="mt-2">
            チームワークが好きですが、ゼロから独り作業も好きです。<br />
            ?フロントエンドとデザインをまとめてできるのが強みです。
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
    <div class="skill mobileBoxWidth">
      <div class="subtitle">
        <div class="subtitle-point"></div>
        <div class="subtitle-text">Expertise & Skill</div>
      </div>
      <div class="skill-rings">
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
            <li>Figma</li>
          </ul>
        </div>
      </div>
      <a href="#experience-TW" class="scroll-tool">
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
  <!-- subtitle experience TW -->
  <div id="experience-TW" class="experience mobileBoxWidth">
    <div class="subtitle">
      <div class="subtitle-point"></div>
      <div class="subtitle-text">Education & Experience</div>
    </div>
    <!-- taiwan map -->
    <div class="map">
      <img src="../assets/tw.svg" alt="Taiwan map" class="map-TW sm:w-8/12" />
    </div>

    <!-- list of tw experience -->
    <div class="section mt-14">
      <div class="section-item border-l">
        <div class="section-dot"></div>
        <div class="section-text">
          <p class="section-title">
            FuJen Catholic University
            <span class="text-xs">2006-2010</span>
          </p>
          <p class="section-subtitle">
            <a href="http://www.commarts.fju.edu.tw/?q=eng/about"
              >Department of Communication Arts</a
            >
          </p>
        </div>
      </div>
      <div class="section-item border-l">
        <div class="section-dot"></div>
        <div class="section-text">
          <p class="section-title">
            Travel Agency <span class="text-xs"> 2010-2011</span>
          </p>
          <p class="section-subtitle">Customer Service</p>
        </div>
      </div>
      <div class="section-item border-l">
        <div class="section-dot"></div>
        <div class="section-text">
          <p class="section-title">
            English Cram School
            <span class="text-xs"> 2011-2012</span>
          </p>
          <p class="section-subtitle">Secretary and English Teacher</p>
        </div>
      </div>
      <div class="section-item border-0">
        <div class="section-dot"></div>
        <div class="section-text">
          <p class="section-title">
            Taipei101 observatory
            <span class="text-xs"> 2012-2016</span>
          </p>
          <p class="section-subtitle">Customer Service Manager</p>
        </div>
      </div>
    </div>

    <a href="#experience-JP" class="scroll-tool">
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
  <!-- subtitle experience JP -->
  <div id="experience-JP" class="experience mobileBoxWidth">
    <div class="subtitle">
      <div class="subtitle-point"></div>
      <div class="subtitle-text whitespace-nowrap">
        Education & Experience
        <span class="text-xs text-MediumGrey">2016-</span>
      </div>
    </div>

    <!-- Japan map -->
    <div class="map">
      <img src="../assets/japan.svg" alt="Japan map" class="map-JP" />
    </div>

    <!-- list of Japan experience -->
    <div class="section mt-20">
      <div class="section-item border-l">
        <div class="section-dot"></div>
        <div class="section-text">
          <p class="section-title">
            ASIA JAPANESE ACADEMY
            <span class="text-xs">2016-2018</span>
          </p>
          <p class="section-subtitle">
            <a href="https://www.facebook.com/AJAcademy">
              アジア日本語学院 Student</a
            >
          </p>
        </div>
      </div>
      <div class="section-item border-l">
        <div class="section-dot"></div>
        <div class="section-text">
          <p class="section-title">
            Mercury INC. <span class="text-xs"> 2018-2019</span>
          </p>
          <p class="section-subtitle">Mobile Sales Representative</p>
        </div>
      </div>

      <div class="section-item border-0">
        <div class="section-dot"></div>
        <div class="section-text">
          <p class="section-title">
            Anchor Network Service,Inc.
            <span class="text-xs"> 2019-</span>
          </p>
          <p class="section-subtitle">Office Work</p>
        </div>
      </div>
    </div>

    <a href="#hobby-language" class="scroll-tool">
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
  <div
    id="hobby-language"
    class="
      hobby-language
      mobileBoxWidth
      flex flex-col
      justify-between
      xl:justify-center
    "
  >
    <!-- subtitle hobby -->
    <div class="hobby">
      <div class="subtitle">
        <div class="subtitle-point"></div>
        <div class="subtitle-text whitespace-nowrap">Hobby</div>
      </div>
      <div class="sm:flex sm:flex-row mt-5">
        <div
          class="
            hobby-text
            flex
            justify-around
            text-Blackish
            mt-5
            mx-auto
            w-10/12
            sm:flex-col sm:text-right
          "
        >
          <p>Camping</p>
          <p>Ukulele</p>
          <p>Sims4</p>
        </div>
        <div class="mt-5 -mr-5">
          <img
            src="../assets/Sims4-1.png"
            alt="Sims4 "
            class="w-10/12 shadow-lg float-right"
          />
        </div>
      </div>
    </div>
    <!-- subtitle Language -->
    <div class="language pb-20 xl:pb-0 xl:pt-32">
      <div class="subtitle pt-0 pt-5">
        <div class="subtitle-point"></div>
        <div class="subtitle-text whitespace-nowrap">Language</div>
      </div>
      <div class="language-text">
        <p>Mandarin / Chinese</p>
        <p>Japanese</p>
        <p>English</p>
        <p>Taiwanese</p>
      </div>
    </div>
    <a href="#work1" class="scroll-tool">
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
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      scrollY: "", //858
    };
  },
  mounted() {
    this.getScroll();
  },
  methods: {
    getScroll() {
      this.scrollY = window.scrollY;
      // console.log(this.scrollY);
    },
  },
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
  @apply bg-MediumGrey text-white tracking-wider h-screen relative xl:flex xl:flex-col xl:justify-center;
}
.skill-rings {
  @apply flex flex-wrap mt-10 justify-center h-1/2 items-center;
}
.skill-ring {
  @apply w-36 h-36 md:w-40 md:h-40  rounded-full bg-EggYellow shadow-lg m-2.5 sm:mx-10 md:mx-14 flex justify-center items-center;
}
.ring-text {
  @apply h-5/6 flex flex-col items-center justify-evenly text-sm;
}
.experience,
.hobby-language {
  @apply bg-white text-Blackish tracking-wider h-screen relative;
}
.section {
  @apply w-10/12 mx-auto pt-3 text-Blackish relative;
}

.section-item {
  @apply relative border-MediumGrey;
}
.section-dot {
  @apply absolute w-2 h-2 rounded-full border border-EggYellow -top-2 -left-1;
}
.section-text {
  @apply pl-5 relative;
}
.section-title {
  @apply whitespace-nowrap absolute -top-3;
}
.section-subtitle {
  @apply whitespace-nowrap text-xs hover:text-MediumGrey pt-6 pb-10 mb-2;
}
#experience-TW,
#experience-JP {
  @apply relative xl:flex xl:flex-col xl:justify-center;
}
.map {
  @apply absolute w-10/12 sm:flex sm:items-center sm:justify-end opacity-10;
}
.map-TW {
  @apply sm:w-8/12  -mt-12 -ml-5 sm:ml-0 sm:-mt-20 md:-mt-32;
}
.map-JP {
  @apply sm:w-9/12;
}
.language-text {
  @apply flex justify-around text-Blackish mt-5 flex-wrap w-10/12 h-20 mx-auto;
}
</style>
