//map, filter, reduce, every, find, includes, join, pop, push, reverse, slice, sort

let arr = [1,2,3,4,5,6]

console.log(arr);


arr.__proto__.mypush = function(...args) {

    length = this.length
    for(let i =0;i<args.length;i++){
        this[length +i] = args[i]
        console.log(this)
    }

    return this.length
}

const newlength = arr.mypush(1,2,3,4);
console.log(newlength);
console.log(arr)

arr.__proto__.mypop = function(){
    if(this.length === 0){
        return undefined;
    }
    const removed = this[this.length - 1];
    this.length = this.length -1
    return removed;
}

console.log(arr.mypop());
console.log(arr)



arr.__proto__.myreverse = function(){
    let left =0;
    let right = this.length -1;

    while(left < right){
        let temp = this[left];
        this[left] = this[right];
        this[right] = temp;
        left +=1
        right -=1
    }

    return this
}
console.log(arr.myreverse());
arr.mypush(1);
console.log(arr.myreverse());


arr.__proto__.mymap = function(cb){
    let newArray = []

    for(let i =0;i< this.length;i++){
        newArray.push(cb(this[i],i,this));
    }

    return newArray
}

const map1 = arr.map((x) => x * 3);
console.log(map1);


arr.__proto__.myfilter = function(cb){
    let newArray = []
    for(let i =0;i< this.length;i++){
        if(cb(this[i],i,this)){
            newArray.push(this[i])
        }
    }

    return newArray;
}

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length >=6);
console.log(result);


arr.__proto__.myfind = function(cb){
    for(let i =0;i< this.length;i++){
        if(cb(this[i],i,this)){
            return this[i]
        }
    }
}

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12


/*
Explain what is prototype and what is prototype chain in your own words


Prototype is Object in javascript which allow the object to inherit different properits or methods 
and a Prototype chain is the property or the methoid that this object inherit from other object,
when accessing to the object it first view it own method and then to it prototype.


*/