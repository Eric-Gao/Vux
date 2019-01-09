<template>
  <div>
    <h1>父页面数据</h1>
    <template>
      <son-template :sondata="sondata">

      </son-template>
    </template>
  </div>
</template>

<script>
import SonTemplate from '../../components/SonTemplate'
export default {
  name: 'Home',
  components: {SonTemplate},
  data () {
    return {
      sondata: '传递给子组件'
    }
  }
}
</script>



