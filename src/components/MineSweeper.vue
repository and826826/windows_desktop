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
            计时器：{{timer}}s
        </div>
    </div>
</template>

<script>
import {seconde} from '../api/Time/index'
import {mineSweeper} from '../api/MineSweeper/index'
export default {
    name:'MineSweeper',
    data(){
        return {
            num:[],
            row:0,
            clo:0,
            begin:0,
        }
    },
    compute:{
        timer:function(){
            return setInterval(seconde(this.begin),1000);

        }

    },
    
    methods:{
        time(){


        },
        mouse(i,j){
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
                alert("游戏失败")
            }
            td.rows[i].cells[j].textContent=target;
            

            //     td.rows[i].cells[j].textContent=this.num[(i-1)*this.clo+j-1][1];
            //     console.log(td.rows[i-1].cells[j-1].textContent);
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
            this.begin=new Date();

    }
}
</script>
<style  scoped>
.table{
    border: black;
    border-style: 2px dotted;
}

</style>