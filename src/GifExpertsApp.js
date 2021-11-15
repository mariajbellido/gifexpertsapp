import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import './style.css';


const GifExpertsApp = () => {



 const [categories, setCategories ] = useState(["hello"])

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
          categories.map( category => (
            <GifGrid 
              key={category}
              category={category} 
            />
          ))
        }
      </ul>
    </>

  )
}

export default GifExpertsApp;