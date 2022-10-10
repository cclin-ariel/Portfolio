<template>
  <div id="work">
    <div
      id="work1"
      class="work mobileBoxWidth xl:flex xl:flex-col xl:justify-center"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        M
        class="title"
      >
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
              class="
                text-xs
                -mt-1
                capitalize
                tracking-tight
                font-extralight
                pl-2
              "
            >
              E-commerce website
            </span>
          </div>
          <div class="work-tool">
            <div>Vue.js / Vue CLI / Vue Router / TailwindCSS / RWD</div>
            <div class="point"></div>
            <div class="circle"></div>
          </div>
          <div class="text-xs mt-3 capitalize font-extralight">
            manage products / coupon, checkout function
          </div>
          <!-- work link -->
          <div class="flex flex-row items-center justify-end my-3 mr-4">
            <a
              class="link-animation"
              href="https://github.com/cclin-ariel/sims-home"
              target="_blank"
              ><img
                class="w-6 h-6 mx-1"
                src="../assets/workGithub.svg"
                alt="github"
            /></a>
            <a class="link-animation" href="" target="_blank"
              ><img
                class="w-6 h-6 mx-1"
                src="../assets/workLink.png"
                alt="link"
            /></a>
          </div>
        </div>
      </div>

      <a href="#work2" class="scroll-tool">
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
    <!-- work 2 -->
    <div
      id="work2"
      class="work mobileBoxWidth xl:flex xl:flex-col xl:justify-center"
    >
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
            Restaurant List App
            <span
              class="
                text-xs
                -mt-1
                capitalize
                tracking-tight
                font-extralight
                pl-2
              "
            >
              create my favorite restaurant list
            </span>
          </div>
          <div class="work-tool">
            <div>Vue.js / Vue Router / TailwindCSS / JSON sever / RWD</div>
            <div class="point"></div>
            <div class="circle"></div>
          </div>
          <div class="text-xs mt-3 capitalize font-extralight">
            manage restaurant data, sign in / login function
          </div>
          <!-- work link -->
          <div class="flex flex-row items-center justify-start my-3 mr-4">
            <a
              class="link-animation"
              href="https://github.com/cclin-ariel/resto-app"
              target="_blank"
              ><img
                class="w-6 h-6 mx-1"
                src="../assets/workGithub.svg"
                alt="github"
            /></a>
            <a class="link-animation" href="#" target="_blank"
              ><img
                class="w-6 h-6 mx-1"
                src="../assets/workLink.png"
                alt="link"
            /></a>
          </div>
        </div>
      </div>

      <a href="#work3" class="scroll-tool">
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
    <!-- work 3  -->
    <div
      id="work3"
      class="work mobileBoxWidth xl:flex xl:flex-col xl:justify-center"
    >
      <div class="work-item w-full-5px">
        <div class="work-photo">
          <a
            class="desktop-photo"
            href="https://linyachi.s3.ap-northeast-1.amazonaws.com/bus/index.html#/"
            target="_blank"
          >
            <img src="../assets/work/FindMyBus_DT.png" alt="work photo3" />
          </a>
          <!-- mobile -->
          <a
            class="mobile min-w-100px mb-28"
            href="https://linyachi.s3.ap-northeast-1.amazonaws.com/bus/index.html#/"
            target="_blank"
          >
            <img src="../assets/work/FindMyBus_mobile.png" alt="work photo3" />
            <div class="mobile-btn"></div>
          </a>
        </div>
        <!-- work description -->
        <div class="workItem-description">
          <div class="text-xl">
            Find my bus

            <span
              class="
                text-xs
                -mt-1
                capitalize
                tracking-tight
                font-extralight
                pl-2
              "
            >
              check bus timetable app
            </span>
          </div>
          <div class="work-tool">
            <div>Vue.js / Vue CLI / Vue Router / Bootstrap / RWD</div>
            <div class="point"></div>
            <div class="circle"></div>
          </div>
          <div class="text-xs mt-3 capitalize font-extralight">
            check bus line / stop, timetable by bus number.
          </div>

          <!-- work link -->
          <div class="flex flex-row items-center justify-end my-3 mr-4">
            <a
              class="link-animation"
              href="https://github.com/cclin-ariel/find-my-bus"
              target="_blank"
              ><img
                class="w-6 h-6 mx-1"
                src="../assets/workGithub.svg"
                alt="github"
            /></a>
            <a
              class="link-animation"
              href="https://linyachi.s3.ap-northeast-1.amazonaws.com/bus/index.html#/"
              target="_blank"
              ><img
                class="w-6 h-6 mx-1"
                src="../assets/workLink.png"
                alt="link"
            /></a>
          </div>
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
</template>

<script>
export default {
  name: "Work",
};
</script>

<style scoped>
.work {
  @apply h-screen text-white flex flex-col relative;
}
#work1 .work-item {
  @apply mt-16 -left-5;
}
#work2 .work-item {
  @apply my-auto;
}
#work3 .work-item {
  @apply mt-20 -left-5 xl:mt-0;
}
.work-photo {
  @apply flex flex-row relative z-0;
}
#work2 .work-photo {
  @apply flex flex-row-reverse relative;
}
.desktop-photo {
  @apply w-11/12 shadow-lg transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl ease-in-out duration-300;
}
#work1 .desktop-photo {
  @apply -ml-5 sm:w-8/12;
}
#work2 .desktop-photo {
  @apply sm:w-9/12;
}
#work3 .desktop-photo {
  @apply w-9/12 -ml-5 sm:w-6/12 z-0;
}
.mobile {
  @apply hidden sm:block h-full w-2/12 rounded-xl shadow-lg bg-white pt-1 px-1 border-MediumGrey border mx-8 self-end transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ease-in-out duration-300;
}
#work3 .mobile {
  @apply mb-24;
}
.mobile-photo {
  @apply rounded-lg m-auto border-MediumGrey border;
}
.mobile-btn {
  @apply w-2 h-2 rounded-full bg-white m-1 ring-2 ring-MediumGrey mx-auto;
}
.workItem-description {
  @apply float-right mt-10 pr-5 z-30;
}
#work2 .workItem-description {
  @apply float-left ml-5;
}
#work3 .workItem-description {
  @apply sm:-mt-20 z-40;
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
.link-animation {
  @apply transform transition duration-300 ease-in-out hover:-translate-y-1;
}
</style>
