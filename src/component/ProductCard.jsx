import React from 'react'
import { useNavigate } from 'react-router-dom'

// 1. 상품 이미지
// 2. Conscious choice
// 3. 상품 이름
// 4. 가격
// 5. 신제품 or 기존제품

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    }

    return (
        <div className='product-item-wrap' onClick={showDetail}>
            {item?.new === true ?
                <div className='new-item'>
                    <div>
                        New
                    </div>
                </div>
                : <></>}
            <img className='product-img' src={item?.img} alt="item" />
            <div className='choice-text'>
                {item?.choice === true ? "Conscious choice" : ""}
            </div>
            <div>
                {item?.title}
            </div>
            <div>
                \{item?.price}
            </div>
        </div>
    )
}

export default ProductCard