import React from 'react'
import { useRouter } from 'next/router'

const Product = ({image,name,price,men}) => {

    const router=useRouter()

  return (
    <div className="text-center flex flex-col cursor-pointer" onClick={()=>{router.push({
        pathname: '/searchpage',
        query: { type:men?"men":"women" }
        }, '/searchpage')
        }}>
        <div>
            <img alt="image" src={image} width={500} height={500} />
        </div>

              <br />
              <p className="text-[15px]">
                {name}
              </p>

              <p className="font-bold text-[13px]">
                ${price}
              </p>
            </div>
  )
}

export default Product