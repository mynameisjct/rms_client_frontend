<template>
    <div>
        <div id="stat">|
            <code>Total RTR Entries: {{totalRtr}}</code>&nbsp;| &nbsp;
            <code>Total Hardware Incidents: {{totalRtr}}</code> &nbsp;| &nbsp;
            <code>Total Software Incidents: {{totalRtr}}</code> &nbsp;|&nbsp; 
            <code>Total Other Incidents: {{totalRtr}}</code> | 
        </div>
        <br/>
        <div id="substat">
            <code>Latest RTR Entry: {{totalRtr}}</code>
            <code>Pending Incidents: {{totalRtr}}</code>
        </div>
        <hr/>
        <div>
            Dealer Branches 
            <br/><br/><DisplayTable />
        </div>
    </div>
</template>
<script>
import DisplayTable from './DisplayTable.vue'

export default {
    name: 'statistics',
    components: {
        DisplayTable
    },
    data(){
        return {
            totalRtr: 0,
            latestRtr: 1379,
        }
    }
}
</script>
<style scoped>
    #stat {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    #substat {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>