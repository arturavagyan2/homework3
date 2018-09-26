    const operations = function(a,b,c,d) {
   return ((a * b) + c)/ d;
    };
   const z = operations(9,4,8,2);
   console.log(z);
   
const emptyFunc= function(){
    return "I love CS110 "
     };
    const c = emptyFunc() 
    console.log(c);
  
const noReturn = function(g,h){
  number=(g + h)/2
    };
  
const longest = function(x,y,z){   
    if ((x.length > y.length)  && (x.length > z.length)){
        return x;
         } else if ((y.length > x.length) && (y.length > z.length)){
            return y;
               } else { 
                   return z;
           
               }
         };
       const h = longest ("aspire","inspire","achieve")
       console.log(h);
      
const zeroOne = function (x,y){
     
    if (x === y){
      return 0;
      } else if (x > y){
          return 1;
             } else {
                 return -1;
      } 
 
    };
        const m = zeroOne(2,8);
     console.log(m);

const multiplication = function ( num1,num2)  {
  return num1*num2
  };
  const a = multiplication (17,3);
  console.log(a);
    
const division = function (num3,num4) {
    return num3/num4
  };
  const b = division (366,6)
  console.log(b);
  
const  triangleArea = function(base, height) {
     const Area = multiplication(base,height)
     const Area1 = division(Area, 2)
     return Area1

 }; 
  
     const trA = triangleArea(24,16)
     console.log(trA);
  
 
const numLength = function (x){
     return x.length 
     
   };
   const n = numLength("8389859073");
   console.log(n);
   
const oneStuff= function (str1,str2,num) {

   if ((str1+str2).length > num){
    return 1;
   } else {
    return -1;
 } 
 };
   const e = oneStuff("Joe","Poghosyan",18);
  console.log(e);
    
const runStuff = function(num1,num2,str){
       if ( str ==='rectangle'){
    return num1*num2;
} else if (str === 'triangle'){
  return (num1*num2)/2;
} else {
    return -1;
} 
 
};
  const o = runStuff(25,16,'triangle');
  console.log(o);
