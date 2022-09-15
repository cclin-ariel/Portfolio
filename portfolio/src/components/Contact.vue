<template>
  <div id="contact" class="contact mobileBoxWidth">
    <div class="title">
      <div class="title-text">
        contact
        <div class="title-point"></div>
      </div>
    </div>
    <div class="social-media">
      <a
        href="https://twitter.com/wahaha47168"
        target="_blank"
        class="w-6 h-6 bg-white rounded-full border-2 border-white"
      >
        <img src="../assets/twitter.svg" alt="social media icon" />
      </a>
      <a
        href="https://github.com/cclin-ariel"
        target="_blank"
        class="w-10 h-10 bg-white"
      >
        <img src="../assets/github.svg" alt="social media icon" />
      </a>
      <a
        href="mailto:wahaha47168@gmai1.com"
        target="_blank"
        class="w-6 h-6 bg-white rounded-full border border-white"
      >
        <img src="../assets/mail.png" alt="social media icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  @apply bg-Blackish text-white;
}
.contact .title {
  @apply text-center pt-16;
}
.contact .title-text {
  @apply mx-auto w-44;
}
.social-media {
  @apply flex flex-row justify-center items-center mx-auto space-x-8 py-10;
}
</style>
