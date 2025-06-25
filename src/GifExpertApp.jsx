import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState([ 'Dragon Ball']);  
  const onAddCategory = ( newCategory) => {
    if( categories.includes (newCategory) ) return;
      //console.log( newCategory )
        setcategories([  newCategory, ...categories]);
  } 
    return (
      <>
        <h1>GifExpertApp</h1>
          <AddCategory 
            onNewCategory= { onAddCategory }
          />
          { 
            categories.map( (category ) =>(
              <GifGrid 
                key= { category }
                category = { category }/>
            ))  
          }
      </>
    )
}
    