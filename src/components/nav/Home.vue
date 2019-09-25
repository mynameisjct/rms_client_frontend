<template>
    <div id="alignitems">
        <Menu/>
        <HomeContent/>
    </div>
</template>
<script>

import Menu from './Menu'
import HomeContent from '../views/HomeContent'

export default {
    name: 'home',
    components: {
        Menu,
        HomeContent,
    },
}
</script>
<style scoped>
    #alignitems {
        display: flex;
        flex-direction: row;
    }
</style>
