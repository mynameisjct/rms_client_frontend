<template>
    <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        {{message}}
    </div>
</template>
<script>

export default {
    name: 'loadmask',
    data(){
        return {
            isloading: this.load
        }
    },
    props:['load','message']
}
</script>