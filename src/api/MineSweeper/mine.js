export function mine(i,j){
    this.number=i;
    this.value=j;
}
mine.prototype.ismine=function(){
    return this.value==9;   
}
mine.prototype.addOneValue=function(){
    this.value=this.value+1;
}
mine.prototype.getvalue=function(){
    return this.value;
}
