import { useRef, useState } from "react";



const App = () => {
  
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const addToList = () => {
    list.push(item);
    setList([...list]);
    console.log(list);
  }
 
  const countItem = () => {
    setItem(item + 1);
  }
  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
    
  }
  
  return (

    <div>
      
      <input type="text" onChange={(e)=>setItem(e.target.value)} />
      <button onClick={addToList}>add</button>

      <table>
        <tbody>
          {list.length != 0 ? (
            list.map((item, index) => (
              <tr key={index.toString()}>
                <td>{item}</td>
                <td>
                  <button onClick={() => { removeItem(index)}}>delete</button>
                </td>
              </tr>
            ))) : (<tr></tr>)}
        </tbody>
      </table>

      
    </div>
  );
};

export default App;