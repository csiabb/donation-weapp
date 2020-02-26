<template>
   <div v-if="type === 'icon-left'">
     <organCardLeft :info="info" />
   </div>
   <div v-else-if="type === 'icon-center'">
     <organCardCenter :info="info"/>
   </div>
   <div v-else>
     <organCard :info="info"/>
   </div>
</template>

<script>
import organCard from './module/organCard'
import organCardLeft from './module/organCardLeft'
import organCardCenter from './module/organCardCenter'
export default {
  components: {
    organCardCenter,
    organCardLeft,
    organCard
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: {}
    }
  },
  onLoad () {
    console.log('-------')
    console.log(this.info)
  }
}
</script>

