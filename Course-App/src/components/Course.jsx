import React from 'react'

function Course({course}) {
    const{ id, title, description, price, link, Image}= course;
    //burada biz object destructing yaptık 
  return (
    <div className='course'>
        <img src={Image} width={350} height={200}/>
        <h4 className='course-title'>{title}</h4>
        <p className='course-desc'>{description}</p>
        <h3 className='course-price '>{price}₺</h3>
        <div className='course-link'><a style={{textDecoration: 'none'}} href={link}>satın almak için tıklayınız</a></div>
      
    </div>
  )
}

export default Course
