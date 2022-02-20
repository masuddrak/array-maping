const products=[
    {  name:'phone',price:2000,color:'red' },
    {  name:'watch',price:100,color:'green' },
    {  name:'glass',price:10,color:'white' },
]
// const productName=products.map(product=>product.name);
// const productPrice=products.map(product=>product.price);
products.forEach(product=>console.log(product.name))
