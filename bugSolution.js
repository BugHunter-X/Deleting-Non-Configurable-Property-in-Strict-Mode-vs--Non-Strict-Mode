
const obj = {
  name: "John",
  age: 30,
  city: "New York"
};

Object.seal(obj);

try {
  if (!Reflect.deleteProperty(obj, "age")) {
    throw new Error("Cannot delete property 'age'");
  }
} catch (error) {
  console.error(error);
} 

console.log(obj); // { name: "John", city: "New York" }

obj.age = 35;