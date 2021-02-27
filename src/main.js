let cp = {
    0 : "唐三",
    1 : "小舞"
}
var str = ""
for (var i in cp) {
    str += i + ":" + cp[i] + "\n";
}
console.log(str);


function add(a,b) {
    if (a !=undefined && b != undefined) {
        return a + b;
    }else {
        return 0;
    }
    // return a + b;
}
console.log(add(a = 1), "结果nan");
console.log("成功了");