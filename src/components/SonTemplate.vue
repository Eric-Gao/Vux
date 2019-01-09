<template>
  <div>子组件内容
    <h2>{{sondata}}</h2>
  </div>
</template>

<script>
export default {
  name: 'SonTemplate',
  props: ['sondata']
}
</script>

