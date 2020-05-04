function countEvens(x){
    var z=0;
    for(var i=0;i<x.length;i++){
        if(x[i]%2==0){
            z++;
        }
    }
    return z;
}
function countHi(x){
    var z=0;
    for(var i=0;i<x.length;i++){
        if(x.substring(i-1,i)=="h"&&x.substring(i,i+1)=="i"){
            z++;
        }
    }
    return z;
}
function no14(x){
    var y=0;
    var z=0;
    for(var i=0;i<x.length;i++){
        if(x[i]==1){
            z++;
        }
        if(x[i]==4){
            y++;
        }

    }
    if(y>0&&z>0){
        return false
    }
    return true
}
function either24(x){
        var z=0;
        var y=0;
        for(var i=0;i<x.length;i++){
            if(x[i]==2&&x[i+1]==2){
                z++
            }
            if(x[i]==4&&x[i+1]==4){
                y++
            }
        }
    if(y>0&&z==0){
            return true;
    }
    if(z>0&&y==0){
        return true;
    }
    return false;
}
function makeChocolate(small,big,goal){
    var x =goal-big*5;
    var y=1;
    while(x<0){
        x=goal-(big-y)*5;
        y++
    }

    if(x>small){
        return -1;
    }
    if(x>=0){
        return x;
    }
}
function luckySum(a,b,c){
    var x=0;
    if(a!=13){
        x+=a;
    }else{
        return x;
    }
    if(b!=13){
        x+=b;
    }else{
        return x;
    }
    if(c!=13){
        x+=c;
    }else{
        return x;
    }
    return x;
}

function maxBlock(x){
    var y=1;
    var z=0;
    for(var i=0;i<x.length;i++){
        if(x.substring(i,i+1)==x.substring(i+1,i+2)){
            y++;
        }else{
            if(y>z){
                z=y;
            }
            y=1;
        }
    }
    return z;
}

function linearIn(inner,outer){
    var x=0;
    var y=0;
    for(var i=0;i<outer.length;i++){
        x=outer[i];
        for(var d=0;d<inner.length;d++){
            if(x==inner[d]){
               y++;
               break;
            }
        }

    }
    if(y==outer.length){
        return true;
    }
    return false;
}
function countTriple (x){
    var y=0;
    for(var i=0; i<x.length;i++){
        if(x.substring(i,i+1)==x.substring(i+1,i+2)&&x.substring(i,i+1)==x.substring(i+2,i+3)){
            y++;
        }
    }
    return y;
}
function sameEnds(x){
    var first="";
    var last="";
    if(x.length%2==0){
        first= x.substring(0,x.length/2);
        last= x.substring(x.length/2, x.length);
    }else{
        first= x.substring(0,x.length/2+.5);
        last= x.substring(x.length/2+.5, x.length);
    }
    var y=0;
    for(var i=0;i<last.length;i++){
        if(last.substring(i,i+1)==first.substring(0,1)){
            y=0;
            for(var d=i;d<last.length;d++){

                if(last.substring(d,d+1)==first.substring(y,y+1)){

                }else{
                    break;
                }
                y++
                if(d==last.length-1){
                    return first.substring(0,y);
                }
            }
        }
    }
    return "";
}
function go(){
    document.getElementById("output").innerHTML += countEvens([2, 1, 2, 3, 4]);
    document.getElementById("output").innerHTML += countHi("abc hi ho");
    document.getElementById("output").innerHTML += no14([1, 2, 3]);
    document.getElementById("output").innerHTML += either24([1, 2, 2]);
    document.getElementById("output").innerHTML += makeChocolate(4, 1, 9);
    document.getElementById("output").innerHTML += luckySum(1, 2, 3);
    document.getElementById("output").innerHTML += maxBlock("hoopla");
    document.getElementById("output").innerHTML += linearIn([1, 2, 4, 6], [2, 4]);
    document.getElementById("output").innerHTML += countTriple("abcXXXabc");
    document.getElementById("output").innerHTML += sameEnds("abXYab");
}