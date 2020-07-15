<template>
  <div class="home">
    <div class="home-main">

    </div>
    <div class="home-bottom">
      <Bottom></Bottom>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Bottom from './Bottom'
export default {
  name: 'Home',
  components: {
    Bottom
 
  },
  mounted(){
    document.querySelector('body').setAttribute('style','margin:0 0');


  }
}

</script>
<style  scoped>
.home{
  display: flex;
  flex-direction: column;
}
.home-main{
  flex: 94vh;
}
.home-bottom{
  flex:6vh;
  background-color: black;
}

</style>
