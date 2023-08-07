import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component{
    render(){
        return(
            <div> 
            <div>
               <h1>MICHIGAN FRENCH TOAST SANDWICH</h1>
               <p> FROM RAMSAY AROUND THE WORLD</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }

} 

function RecipeAuthor(){
    let authorLink = 'https://www.gordonramsay.com/gr/recipes/';
    let authorPhoto = 'https://hips.hearstapps.com/hmg-prod/images/gordon-ramsay-646367718a5f4.jpg';
    let authorName = 'Gordon Ramsay';

return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Gordon Ramsay" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Gordon Ramsay Recipes</a> 
      </div>
   </div>
);
}

export default RecipeDescription;