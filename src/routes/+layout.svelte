<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Calculator from "../components/Calculator.svelte";
  import Footer from "../components/Footer.svelte";
</script>


<div class="flex flex-col h-screen">
  <Navbar />
  <slot />
  <Footer />
</div>

