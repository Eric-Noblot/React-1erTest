
const dogImg = await fetch ("https://dog.ceo/api/breeds/image/random")
const dogJson = await dogImg.json()
 
const Dogs = () => {

    console.log("avant", dogJson.message) 
    return ( 
    <div className = "box" >
        <img className = "box_img" src = {dogJson.message} alt ="" />
        <p>Qu'il est beau le toutou</p>
    </div>
        )
}

export default Dogs