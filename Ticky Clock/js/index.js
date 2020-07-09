setInterval(clock,1000);


var date,h,m,s,clock;
function clock(){

    date= new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    
    if(h<=9){
        h='0' + h;
    }
    if(m<=9){
        m='0' + m;
    }
    if(s<=9){
        s='0' + s;
    }
    clock=h+":"+m+":"+s;
    var clr= '#' + h + m + s;
    document.body.style.backgroundColor=clr;
    document.getElementById('clock').innerHTML=clock;
    
    
}


