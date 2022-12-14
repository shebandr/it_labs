var kostyl = {
    dm1a:1,
    dm2a:1,
    dm3a:1,
}
clearTimeout(kostyl.dm1a)
clearTimeout(kostyl.dm2a)
clearTimeout(kostyl.dm3a)
function show(id){
    clearTimeout(kostyl[id+"a"])
    var el = document.getElementById(id)
    el.className="dropmenushowed"
    console.log(id)
    kostyl[id+"a"] = setTimeout(hide, 5000, id)
    
}

function hide(id){
    console.log(id + " hided")
    var el = document.getElementById(id)
    el.className="dropmenuhided"
}

function cancel(id){
    console.log(id + " canceled")
    clearTimeout(kostyl[id+"a"])
}