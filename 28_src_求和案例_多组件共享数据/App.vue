<template>
  <div>
    <MyCount/>
    <hr>
    <ThePerson/>
  </div>
</template>

<script>
import MyCount from './components/MyCount'
import ThePerson from './components/ThePerson'
export default {
    name:'App',
    components:{MyCount,ThePerson}
}
</script>
