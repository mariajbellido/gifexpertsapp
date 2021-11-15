import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import './style.css';


const GifExpertsApp = () => {



 const [categories, setCategories ] = useState(["hello", "friday", "weekend", "christmas"])

 /* const handleAdd = () => {
  // Option 1
  // setCategories([...categories, "goodbye"]);
  // Option 2 
  setCategories( cats => [...cats, "goodbye"]) */
 

  return (
  
    <>
      <h2>GifExpertsApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>

      
      <ul>
        {
          categories.map((category) => {
            return (
              <li key={category}>{category}</li>
            )
          })
        }
      </ul>
    </>

  )
}

export default GifExpertsApp;