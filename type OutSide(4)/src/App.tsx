import React from 'react';

type TypeHolder =  {name:string, age: number, color: string}
type Arrayholder = (number | string)[]

function App() {

  let array1 = ["adfgf", 1 , false]
  let array2: number[] = [1,8656,885,6]

  let array4 : (number | boolean)[] = [1,2,false]

  let array3: Arrayholder = [1 , "sdg"]

  let obj1 = {
    name: "Sepehr",
    age: 24,
    color: "white"
  }
  let obj2: TypeHolder = {
    name: "sepehr",
    age: 17.5,
    color: "blue"
  }
  return (
    <div className="App">
     <h1>odifrgthg</h1>
    </div>
  );
}

export default App;
