<template>
  <div class="header">
    <div class="header-nav">
      <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
      <label for="nav-toggle">
          <span class="menu-icon">
              <svg viewBox="0 0 18 15" width="25px" height="25px">
                  <path fill="white" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"/>
                  <path fill="white" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"/>
                  <path fill="white" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"/>
              </svg>
        </span>
      </label>   
      <div class="logo"></div>     
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .header {
  background-color:#db4c3f;
  position: fixed;
  width: 100%;
  box-shadow: 5px 0 5px #333;
  border: 1px solid #ec5e4f; 
  z-index: 1000;
}
.header-nav {
  max-width: 950px;
  margin: 0 auto;
  height: 40px;
}


.header-nav .logo {
  display: inline-block;
  width: 50px;
  height: 40px;
  background: url(../../static/img/logs.png) no-repeat;
  background-size: 35px;
  background-position-y: 3px;
  margin-left: 35px;
}

.header-nav  .menu-icon {
  display: block;
  float: left;
  width: 36px;
  height: 26px;
  line-height: 0;
  padding-top: 8px;
  padding-left: 8px;
  text-align: center;
}
/* .header-nav input:checked ~ {
  display: inline-block;
} */
.header-nav .nav-toggle {
  display: none;
}
.header-nav label {
  display: none;
}



</style>


