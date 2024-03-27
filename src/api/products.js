
// 모든 상품 불러오는 API
export const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let reponse = await fetch(url)
    let data = await reponse.json();
    console.log(data);
}