import React from 'react';


function App() {

  let array1 = ["adfgf", 1 , false]
  let array2: number[] = [1,8656,885]

  let array4 : (number | boolean)[] = [1,2,false]

  let array3: (number | string)[] = [1 , "sdg"]

  let obj1 = {
    name: "Sepehr",
    age: 24,
    color: "white"
  }
  let obj2: { name:string, age: number, color: string} = {
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
