import React from 'react'
import Sauces from "../components/Sauces"


const Collection = () => {
 // const [count, setCount] = useState(0)

  return (
  <div>
    <Sauces 
    img = "https://www.shutterstock.com/image-photo/spicy-chili-sauce-bowl-on-260nw-2005941887.jpg"
    title = "Sauce pimentée"
    caption = "La meilleure du Texas !"
    />
    <Sauces 
    img = "https://www.shutterstock.com/image-photo/adjika-on-black-background-hot-260nw-2012360333.jpg"
    title = "La soupe de la mama"
    caption = "Accrochez vos papilles"
    />
    <Sauces 
    img = "https://assets.afcdn.com/recipe/20170306/3852_w1024h1024c1cx1824cy1824.jpg"
    title = "La sauce au poivre"
    caption = "Pour une bonne soirée d'hiver"
    />
    <Sauces 
    img = "https://cro-cuisine.fr/wp-content/uploads/2018/02/DSC_0115-960x640.jpg"
    title = "La sauce aux champignons"
    caption = "Un classique !"
    />

    </div>
  )
}

export default Collection





// const saucesArray = [{
//     img: "https://www.shutterstock.com/image-photo/spicy-chili-sauce-bowl-on-260nw-2005941887.jpg",
//     title: "Sauce pimentée",
//     caption: "La meilleure du Texas !"
//  },
//  {
//     img : "https://www.shutterstock.com/image-photo/adjika-on-black-background-hot-260nw-2012360333.jpg",
//     title : "La soupe de la mama",
//     caption :  "Accrochez vos papilles"
//  },
//  {
//     img: "https://assets.afcdn.com/recipe/20170306/3852_w1024h1024c1cx1824cy1824.jpg",
//     title: "La sauce au poivre",
//     caption: "Pour une bonne soirée d'hiver"
//  },
//  {
//     img: "https://cro-cuisine.fr/wp-content/uploads/2018/02/DSC_0115-960x640.jpg",
//     title: "La sauce aux champignons",
//     caption: "Un classique !"
//  }
// ]  

// let sauceName = saucesArray.filter(element => element.title === "La sauce au poivre") 
// console.log(sauceName[0].caption)  
