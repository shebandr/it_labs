var baza = document.getElementById("clocks")
function div(val, by){
    return (val - val % by) / by;
}
function set_time(){
    var now = new Date()
    var custom_time = "<img src='dg"
    
    if(now.getHours()<12){
         
        if(now.getHours()>=10){
            custom_time += div(now.getHours(),10) +".gif'> <img src='dg"+ now.getHours()%10+".gif'>"
            console.log(custom_time)
        } else {
            custom_time += "0.gif'> <img src='dg"+ now.getHours()%10+".gif'>"
        }
        
        //custom_time += "<img src='dgam.gif'>"
    } else {
        if((now.getHours()-12)>=10){
            custom_time += div((now.getHours()-12),10) +".gif'> <img src='dg"+ (now.getHours()-12)%10+".gif'>"
            console.log(custom_time)
        } else {
            custom_time += "0.gif'> <img src='dg"+ (now.getHours()-12)%10+".gif'>"
        }
        
        
    }
    if(now.getHours()>=12 ){t="pm"}
    else {
    // if(now.getHours()<=11 )
    t="am"}
    if(now.getHours()==0){
        t="am"
    }
    
    custom_time += "<img src='dgc.gif'><img src='dg"
    if((now.getMinutes())>=10){
        custom_time += div(now.getMinutes(),10) +".gif'> <img src='dg"+ now.getMinutes()%10+".gif'>"
        console.log(custom_time)
    } else {
        custom_time += "0.gif'> <img src='dg"+ now.getMinutes()%10+".gif'>"
    }
    
    custom_time += "<img src='dgc.gif'><img src='dg"
    if((now.getSeconds())>=10){
        custom_time += div(now.getSeconds(),10) +".gif'> <img src='dg"+ now.getSeconds()%10+".gif'>"
        console.log(custom_time)
    } else {
        custom_time += "0.gif'> <img src='dg"+ now.getSeconds()%10+".gif'>"
    }
    
    
    if(t=="pm"){
        custom_time += "<img src='dgpm.gif'>"
    } 
    if(t=="am"){
        custom_time += "<img src='dgam.gif'>"
    }

    custom_time += "<img src='dg"
    if((now.getDate())>=10){
        custom_time += div(now.getDate(),10) +".gif'> <img src='dg"+ now.getDate()%10+".gif'>"
        console.log(custom_time)
    } else {
        custom_time += "0.gif'> <img src='dg"+ now.getDate()%10+".gif'>"
    }
    
    custom_time += "<img src='dgp.gif'><img src='dg"
    if((now.getMonth()+1)>=10){
        custom_time += div((now.getMonth()+1),10) +".gif'> <img src='dg"+ (now.getMonth()+1)%10+".gif'>"
        console.log(custom_time)
    } else {
        custom_time += "0.gif'> <img src='dg"+ (now.getMonth()+1)%10+".gif'>"
    }
    
    custom_time += "<img src='dgp.gif'><img src='dg"
    if((now.getFullYear())>=2000){
        custom_time += "2.gif'>" + "<img src='dg"+ div(now.getFullYear()%2, 100)+".gif'>"+  " <img src='dg"+ div(now.getFullYear()%2000, 10)+".gif'>"+ "<img src='dg" + (now.getFullYear()-2000)%10+".gif'>"
        console.log(custom_time)
    } else {
        custom_time += "0.gif'> <img src='dg"+ now.getMonth()%10+".gif'>"
    }
 
    baza.innerHTML =custom_time


}
set_time()
var timer = setInterval(set_time, 1000)

console.log(timer)