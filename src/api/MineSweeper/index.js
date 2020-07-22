
// construct
export function mineSweeper(){
    this.clo=10;
    this.row=10;
    this.show=[];
}

//create corresponding array in prototype
mineSweeper.prototype.createShows=function (){
    for(let q=0;q<this.row;q++){
        for(let p=0;p<this.clo;p++){
            this.show.push([[q,p],0]);
        }
    }
}

//custom pattern
mineSweeper.prototype.patternChange=function(...a){
    if (a.length==1) {
        this.mine=a[0];   
    }
    else{
        this.row=a[0];
        this.clo=a[1];
        this.mine=a[2];
    }

    console.log(this.mine)

}

// Random generation mine
mineSweeper.prototype.createMines=function(){
    this.mines=[];
    let n=[];
    for(let i=0;i<this.mine;i++){
        let j=Math.floor(Math.random()*(this.clo*this.row));
        if (n.includes(j)) {
            i=i-1;
            continue;
        }
        n.push(j);
        console.log(j);
        this.show[j][1]=9;
        this.mines.push([Math.floor(j/this.row),j%this.clo]);

    }
console.log("所有的雷")
console.log(this.mines);
}
//
mineSweeper.prototype.aroundAddOne=function (show,i,j){
    if(i>=0&&i<this.clo&&j>=0&&j<this.row){
        if(show[i*this.clo+j][1]<9){
            show[i*this.clo+j][1]+=1;
        }

    }

}
// modify the value around each mine
mineSweeper.prototype.modify=function(){
    for(let  i of this.mines){

       console.log(i);
       //up 
       this.aroundAddOne(this.show,i[0]-1,i[1]-1);
       this.aroundAddOne(this.show,i[0]+1,i[1]-1);
       this.aroundAddOne(this.show,i[0],i[1]-1);
       //down
       this.aroundAddOne(this.show,i[0]+1,i[1]+1);
       this.aroundAddOne(this.show,i[0],i[1]+1);
       this.aroundAddOne(this.show,i[0]-1,i[1]+1);
       //
       this.aroundAddOne(this.show,i[0]-1,i[1]);
       this.aroundAddOne(this.show,i[0]+1,i[1]);


    }
    console.log(this.show)
}
