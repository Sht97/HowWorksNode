// class Calculator {
//     add(a,b){
//         return a+b;
//     }
//
//     multiply(a,b){
//         return a*b;
//     }
//
//     divide(a,b){
//         return a/b;
//     }
// }
// module.exports=Calculator;

class Calculator {
    add(a,b){
        return a+b;
    }

    multiply(a,b){
        return a*b;
    }

    divide(a,b){
        return a/b;
    }
}
module.exports=class {
    constructor(a,b) {
    this.a=a;
    this.b=b;
    }
    add(){
        return this.a+this.b;
    }

    multiply(a,b){
        return a*b;
    }

    divide(a,b){
        return a/b;
    }
};