<script>
  import logo from "../assets/images/general/logo.png?enhanced";
</script>

<div class="head-logo" id="logo">
  <a href="#hero">
    <img src={logo} alt="" />
  </a>
</div>

<style>
  .head-logo {
    position: fixed;
    top: 2em;
    left: 2em;
    width: 5em;
    height: 5em;
    z-index: 9999999;
    border-radius: 50%;
  }
  .head-logo img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  #logo {
    transition: 0.5s top;
  }
</style>
