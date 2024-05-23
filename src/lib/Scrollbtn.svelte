<!-- YourComponent.svelte -->

<script>
  import { onMount } from 'svelte';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

onMount(() => {
  window.addEventListener('scroll', () => {
    const button = document.getElementById('scrollToTopButton');
    if (button) {
      if (window.scrollY > 100) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  });
});
</script>

<style>
  #scrollToTopButton {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    background-color: white;
    color: black;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
  }

</style>

<button id="scrollToTopButton" on:click={scrollToTop}><img src="/assets/up-arrow.svg" alt="arrow to top"/></button>
