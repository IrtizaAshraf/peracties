const user ={
      name: 'Muhammad Irtiza',
      age:17,
      login: ['Monday', 'Thuesday','wednesday']
}


console.log(user.name);
console.log(user.age);



const users ={
      'last names': 'Muhammad Irtiza',
      age:17,
      'login form': ['Monday', 'Thuesday','wednesday']
}

console.log(users['last names']);
console.log(users['login form [2]']);









const gymmembership={
      name: 'Bluk',
      age:17,
      fees: 2500,
      discount: 10,
      greetuser:function (members) {
            let discountuser;
            if (members >= 2) {
                  discountuser = 20
                  console.log(discountuser)
                  this.fees= this.fees* discountuser / 100
                  
            }
            else{
             discountuser = 5
             console.log(discountuser)
             this.fees= this.fees* discountuser/ 100

            }
            
      }
}

console.log(gymmembership.discount(3));






