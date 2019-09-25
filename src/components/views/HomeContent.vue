<template>
    <div id="content">
        <router-view/>
    </div>
</template>
<script>

export default {
    name: 'homecontent',
    components: {
        
    },

}
</script>
<style scoped>
    #content {
        border: 0px solid red;
        width: 2000px;
        height: 500px;
        margin-left: -100px;
    }
</style>