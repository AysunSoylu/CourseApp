import React from 'react'

function Course({course}) {
    const{ id, title, description, price, link, Image}= course;
    //burada biz object destructing yaptık 
  return (
    <div className='course'>
      <div>
        <img src={Image} width={250} height={150}/>
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h3>{price}</h3>
        <a href={link}>satın almak için tıklayınız</a>
      </div>
    </div>
  )
}

export default Course
