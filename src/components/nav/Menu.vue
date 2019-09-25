<template>
    <div id="leftpane">
        <b-card>
            <b-card-header>
                MENU
            </b-card-header>
            <b-card-body>
                <b-link exact to="/home/statistics" @click="selected = 1" :class="{highlight:selected === 1}">Numbers</b-link> <br/><br/>
                <b-link to="/home/charts" @click="selected = 2" :class="{highlight:selected === 2}">Charts</b-link> <br/><br/>
                <b-link to="/home/unread" @click="selected = 3" :class="{highlight:selected === 3}">Unread Logs</b-link>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
export default {
    name:'menus',
    data(){
        return {
            selected: 0
        }
    }
}
</script>
<style scoped>
    #leftpane {
        display: flex;
        width: 100%;
        margin-left: -200px;
    }
    .highlight {
        border-bottom: 2px solid blueviolet;
}
</style>