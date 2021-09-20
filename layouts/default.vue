<template>
  <div class="wrapper">
    <loader-component v-show="$store.state.loader" />
    <div style="width:100%;height:100%" v-show="!$store.state.loader">
      <nuxt />
    </div>
  </div>
</template>