class Animal {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  sayHello() {
    console.log(this.name)
  }
}

const cat = new Animal("Rajha", "Cat")

console.log(cat.sayHello())
