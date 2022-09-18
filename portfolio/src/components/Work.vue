<template>
  <div id="work1" class="work mobileBoxWidth">
    <div class="title">
      <div class="title-text">
        work
        <div class="title-point"></div>
      </div>
    </div>
    <!-- work 1 -->
    <div class="work-item w-full-5px">
      <div class="work-photo">
        <img
          src="../assets/work/sims-home_DT.png"
          class="desktop-photo"
          alt="work photo1"
        />
        <!-- mobile -->
        <div class="mobile min-w-100px">
          <img
            src="../assets/work/sims-home_mobile.png"
            class="mobile-photo"
            alt="work photo1"
          />
          <div class="mobile-btn"></div>
        </div>
      </div>
      <!-- work description -->
      <div class="workItem-description">
        <div class="text-xl">
          Sims-Home
          <span
            class="text-xs -mt-1 capitalize tracking-tight font-extralight pl-2"
          >
            E-commerce website
          </span>
        </div>
        <div class="work-tool">
          <div>Vue.js / Vue CLI / Vue Router / TailwindCSS</div>
          <div class="point"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>

    <a href="#work2" class="scroll-tool">
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
  <!-- work 2 -->
  <div id="work2" class="work mobileBoxWidth">
    <div class="work-item w-full-5px -mr-5">
      <div class="work-photo">
        <img
          src="../assets/work/localhost_8082_.png"
          class="desktop-photo float-right"
          alt="work photo2"
        />
        <!-- mobile -->
        <div class="mobile min-w-100px">
          <img
            src="../assets/work/resto_mobile.png"
            class="mobile-photo"
            alt="work photo2"
          />
          <div class="mobile-btn"></div>
        </div>
      </div>
      <!-- work description -->
      <div class="workItem-description">
        <div class="text-xl">
          Restaurant App
          <span
            class="text-xs -mt-1 capitalize tracking-tight font-extralight pl-2"
          >
            sign / login in function
          </span>
        </div>
        <div class="work-tool">
          <div>Vue.js / Vue Router / TailwindCSS / JSON sever</div>
          <div class="point"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>

    <a href="#work3" class="scroll-tool">
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
  <!-- work 3  -->
  <div id="work3" class="work mobileBoxWidth">
    <div class="work-item w-full-5px">
      <div class="work-photo">
        <img
          src="../assets/work/FindMyBus_DT.png"
          class="desktop-photo"
          alt="work photo3"
        />
        <!-- mobile -->
        <div class="mobile min-w-100px mb-28">
          <img
            src="../assets/work/FindMyBus_mobile.png"
            class="mobile-photo"
            alt="work photo3"
          />
          <div class="mobile-btn"></div>
        </div>
      </div>
      <!-- work description -->
      <div class="workItem-description">
        <div class="text-xl">
          Find my bus
          <span
            class="text-xs -mt-1 capitalize tracking-tight font-extralight pl-2"
          >
            check bus schedule
          </span>
        </div>
        <div class="work-tool">
          <div>Vue.js / Vue CLI / Vue Router / Bootstrap</div>
          <div class="point"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>

    <a href="#contact" class="scroll-tool">
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
  name: "Work",
};
</script>

<style scoped>
.work {
  @apply h-screen text-white bg-MediumGrey flex flex-col relative;
}
#work1 .work-item {
  @apply mt-16 -left-5;
}
#work2 .work-item {
  @apply my-auto;
}
#work3 .work-item {
  @apply mt-20 -left-5;
}
.work-photo {
  @apply flex flex-row relative;
}
#work2 .work-photo {
  @apply flex flex-row-reverse relative;
}
.desktop-photo {
  @apply w-11/12 shadow-lg transform hover:scale-105 ease-in-out duration-300;
}
#work1 .desktop-photo {
  @apply -ml-5 sm:w-8/12;
}
#work2 .desktop-photo {
  @apply -mr-5 sm:w-9/12;
}
#work3 .desktop-photo {
  @apply w-9/12 -ml-5 sm:w-6/12;
}
.mobile {
  @apply hidden sm:block h-full w-2/12 rounded-xl shadow-lg bg-white pt-1 px-1 flex flex-col justify-center items-center border-MediumGrey border mx-8 self-end;
}
.mobile-photo {
  @apply rounded-lg m-auto border-MediumGrey border;
}
.mobile-btn {
  @apply w-2 h-2 rounded-full bg-white m-1 ring-2 ring-MediumGrey mx-auto;
}
.workItem-description {
  @apply float-right mt-12 pr-5;
}
#work2 .workItem-description {
  @apply float-left ml-5;
}
#work3 .workItem-description {
  @apply sm:-mt-20;
}
.work-title-text {
  @apply bg-MediumGrey;
}
.work-tool {
  @apply border-b border-EggYellow text-xs relative mt-4 pr-6 pb-1 font-light;
}
.work-tool .point {
  @apply w-1.5  h-1.5 rounded-full bg-EggYellow absolute right-0 -bottom-1;
}
.circle {
  @apply w-5 h-5  border rounded-full border-EggYellow absolute -right-2 -bottom-2.5 animate-ping;
}
</style>
