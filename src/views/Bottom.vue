<template>
    <div class="bottom">
        <div class="bottom-left">
            <BottomLeft></BottomLeft>
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
import BottomLeft from '../components/BottomLeft'
export default {
    name:'Bottom',
    components:{
        BottomRight,
        BottomLeft
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