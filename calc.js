//console.log('Hello world')
//document.write("hello world")
const n1= parseFloat(prompt('Enter 1st number:'))
const op= (prompt('Select (+ - * / )'))
const n2= parseFloat(prompt('Enter 2nd number:'))
let res;
if (op=='+'){
    res=n1+n2;
}
else if (op=='-'){
    res=n1-n2;
}
else if (op=='*'){
    res=n1*n2;
}
else if (op=='/'){
    res=n1/n2;
}
else{}

document.write('The result of operation:'+`${n1} ${op}  ${n2} = ${res}`);
