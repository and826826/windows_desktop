
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
            this.show.push([q*10+p,0]);
        }
    }
    console.log(this.show);
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
    this.mines=[]
    for(let i=0;i<this.mine;i++){
        let j=Math.floor(Math.random()*this.clo)*10+Math.floor(Math.random()*this.row);
        if (this.mines.includes(j)) {
            i=i-1;
            continue;
        }
        this.show[j][1]=9;
        this.mines.push(j);

    }

console.log(this.mines);
console.log(this.show);
}

// modify the value around each mine
mineSweeper.prototype.modify=function(){
    for(let  i of this.mines){
        i-this.clo-1>=0?this.show[i-this.clo-1][1]=this.show[i-this.clo-1][1]+1:null;
        i-this.clo>=0?this.show[i-this.clo][1]=this.show[i-this.clo][1]+1:null;
        i%this.clo!=this.clo-1?this.show[i-this.clo+1][1]=this.show[i-this.clo+1][1]+1:null;

        (i-1)%this.clo!=this.clo-1?this.show[i-1][1]=this.show[i-1][1]+1:null;
        (i+1)%this.clo!=0?this.show[i+1][1]=this.show[i+1][1]+1:null;

        ((i+this.clo-1)<this.clo*this.row&&(i+this.clo-1)%(this.clo)!=this.clo-1)?this.show[i+this.clo-1][1]=this.show[i+this.clo-1][1]+1:null;
        (i+this.clo)<this.clo*this.row?this.show[i+this.clo][1]=this.show[i+this.clo][1]+1:null;
        ((i+this.clo)<this.clo*this.row)&&(i+this.clo+1)%this.clo!=0?this.show[i+this.clo+1][1]=this.show[i+this.clo+1][1]+1:null;
        

    }
    console.log(this.show)
}

