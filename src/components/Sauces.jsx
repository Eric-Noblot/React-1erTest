import React from 'react'

const Sauces = ({img, title, caption }) => {
 // const [count, setCount] = useState(0)

  return (
    <div className = "box">
        <img className = "box_img" src = {img} alt = {title} />
        <h3 className = "box_title" >{title}</h3>
        <p className = "box_caption" >{caption}</p>
    </div>
  )
}

export default Sauces
