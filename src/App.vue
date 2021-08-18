<template>
  <div id="app" class="bg-light">
    <div id="nav">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/Tasks">Tasks</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    width: 100%;
    height: 100vh;
  }

  #nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
    background: #3aa346;

    a {
      color: #c1ff1c;
      font-size: 1.25rem;
      text-decoration: none;
      padding: 1rem 2rem;

      &.router-link-active{
        color: #fff;
        font-weight: 600;
        background: #1e8c45;
      }
    }
  }
</style>
