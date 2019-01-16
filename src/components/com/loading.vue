<template>
  <div :class="['loading',show ? 'show' : '']">
    <div class="loader-inner">
      <div class="loader-svg">
          <div class="loader-03"></div>
      </div>
    </div>
  </div>

</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'v-loading',
    components: {
    },
    props: {
      show: {
        type: Boolean
      }
    },
    computed: {

    }
  };
</script>
<style scoped>
  .loading{position: fixed;  top: -100%; left: 0;  right: 0;  z-index: 9999999;  width: 100%;  height: 100%;opacity: 0;}
  .loading.show {top:0;opacity: 1;}
  .loader-inner{background:#000;transition: all .5s ease; transform: translateY(-100%);opacity:0;position:absolute;left:50%;}
  .loading.show .loader-inner{width:4.5rem;height:4.5rem;margin-top:45% ;margin-left:-2.25rem;border-radius:.2rem; transition: all .5s ease; transform: translateY(-100%);transform: translateY(50%);opacity:.6;}
  .loader-svg {
      display: inline-block;
      width: 100%;
      height: 100%;
      margin:auto;
      font-size: 30px;
      vertical-align: top;
      -webkit-transition: .3s color, .3s border;
      transition: .3s color, .3s border;
  }
  .loader-svg:hover {
      color: #d60b52;
      font-size: 0;
      padding: 0;
      border-width: 3px;
      line-height: 200px;
  }
  .loader-svg:hover [class*="loader-"] {
      font-size: 70px;
      line-height: 200px;
  }
  [class*="loader-"] {
      display: inline-block;
      width: 1em;
      height: 1em;
      color: inherit;
      vertical-align: middle;
      pointer-events: none;
  }
.loader-03 {
  margin:1.2rem;
    border: .2em solid currentcolor;
    border-bottom-color: transparent;
    border-radius: 50%;
    -webkit-animation: 1s loader-03 linear infinite;
    animation: 1s loader-03 linear infinite;
    position: relative;
}
@-webkit-keyframes loader-03 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes loader-03 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

</style>
