
const obj = {
  name: "John",
  age: 30,
  city: "New York"
};

Object.seal(obj);

delete obj.age;

console.log(obj); // Output: { name: 'John', age: 30, city: 'New York' }

obj.age = 35;