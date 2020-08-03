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
        <table id="table">
            <tbody>
                <tr v-for="i in row" v-bind:key="i">
                    <td v-for="j in clo" v-bind:key="j"  @click="mouse(i-1,j-1)">
                        <i class="el-icon-star-off"></i>
                   

                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            已用时间：{{time}}s
        </div>
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
            timer:"",
            time:0,

        }
    },
    // computed:{
    //     timer:function(){
    //          setInterval(function(){
    //             let now=new Date();
    //             let t=(now-this.begin)/1000;
    //             return t;
    //         },1000);

    //     }

    // },
    
    methods:{
        mouse(i,j){
            if(!this.time){
                this.timer=setInterval(()=>{this.time=this.time+1},1000)
            }
            console.log(i,j);
            let td=document.getElementById('table');
            let target=this.num[i*this.clo+j][1];
            console.log(target)
            if(target==0){
                console.log(td.rows[i].cells[j].textContent=="");
                td.rows[i].cells[j].textContent=target;
                console.log(td.rows[i].cells[j].textContent=="");
                this.scanAround(i,j)
            }
            if(target==9){
                clearInterval(this.timer);
                this.time=0;
                alert("游戏失败");

            }
            td.rows[i].cells[j].textContent=target;
            
        },
        scanAround(i,j){
            console.log("扫描周围")
            //up
            this.isWhite(i-1,j-1);
            this.isWhite(i-1,j);
            this.isWhite(i-1,j+1);

            this.isWhite(i,j-1);
            this.isWhite(i,j+1);

            this.isWhite(i+1,j-1);
            this.isWhite(i+1,j);
            this.isWhite(i+1,j+1);


        },
        isWhite(i,j){
            if(i<this.row&&i>=0&&j<this.clo&&j>=0){
                let td=document.getElementById('table');
                let target=this.num[i*this.clo+j][1];
                if(td.rows[i].cells[j].textContent==""){
                    if(target==0){
                    td.rows[i].cells[j].textContent=0;
                    this.scanAround(i,j);
                }
                td.rows[i].cells[j].textContent=target;
                }
                
                

            }
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
.table{
    border: black;
    border-style: 2px dotted;
}

</style>