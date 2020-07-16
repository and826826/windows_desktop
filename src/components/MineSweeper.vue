<template>
    <div>
        <div class="pattern">
            <div >
                <el-button>简单</el-button>
                <el-button>中等</el-button>
                <el-button>困难</el-button>
                <el-button>自定义</el-button>
            </div>
            
        </div>
        <table>
        <div v-for="i in row" v-bind:key="i">

            <td v-for="j in clo" v-bind:key="j" @click="ismine(i,j)">
                <span >{{num[(i-1)*clo+j-1][1]}}</span>


            </td>
        </div>
        </table>
        <div><button @click="test"></button></div>
    </div>
</template>

<script>
import {mineSweeper} from '../api/MineSweeper/index'
export default {
    name:'MineSweeper',
    data(){
        return {
            num:[],
            row:0,
            clo:0,

        }
    },
    methods:{
        test(){
            let n = new mineSweeper;
            n.patternChange(10);
            n.createShows();
            n.createMines();
            n.modify();
        },
        ismine(i,j){
            console.log(this.num[(i-1)*this.clo+j-1][1])
            

        }
    },
    mounted(){
        let n = new mineSweeper;
            n.patternChange(10);
            n.createShows();
            n.createMines();
            n.modify();
            this.num=n.show;
            this.row=n.row;
            this.clo=n.clo;

    }
}
</script>
<style  scoped>
buttom{
    display: inline-block;

}
</style>