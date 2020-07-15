<template>
    <div class="bottom">
        <div class="bottom-left">

        </div>
        <div class="bottom-target">

        </div>
        <div class="bottom-right">
            <BottomRight></BottomRight>
        </div>
        
    </div>
</template>

<script>
import BottomRight from '../components/BottomRight'
export default {
    name:'Bottom',
    components:{
        BottomRight
    }
}
</script>

<style scoped>
.bottom{
    display: flex;
    flex-direction: row;

}
.bottom-left{
    flex:3vh;

}
.bottom-right{
    flex: 3vh;
    color: white;
}
.bottom-target{
    flex: 4vh;
}
</style>