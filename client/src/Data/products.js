const productsData = [
  
    {
        "_id": "643927fad611268b5627234f",
        "name": "Onion",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51v2ozMXy8L._SX522_.jpg",
        "description": "Good quality onions for you.",
        "price": 54,
        "rating": 4,
        "serial":1,
        "totalReview": 12,
        "category": "organic",
        "stock": 594,
        "document": 96,
        "isDeliveryFree": true
    },
    {
        "_id": "643928bad611268b56272351",
        "name": "Tomato",
        "image": "https://jugais.com/wp-content/uploads/2020/07/tomate-1.jpg",
        "description": "Fresh from farm directly for you.",
        "price": 24,
        "rating": 5,
        "totalReview": 12,
        "category": "hybrid",
        "stock": 32,
        "document": 20,
        "isDeliveryFree": false
    },
    {
        "_id": "643928ead611268b56272352",
        "name": "Potato",
        "image": "https://www.jiomart.com/images/product/600x600/590000090/potato-1-kg-product-images-o590000090-p590000090-0-202207291750.jpg",
        "description": "Fresh and healthy for you.",
        "price": 520,
        "rating": 4,
        "category": "Organic",
        "stock": 398,
        "document": 1,
        "isDeliveryFree": true
    },
    {
        "_id": "6439298dd611268b56272353",
        "name": "Coriander",
        "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-coriander-imported-herb-seeds-16969067036812.jpg?v=1634203694",
        "description": "Fresh and healthy for you.",
        "price": 20,
        "rating": 4,
        "category": "hybrid",
        "stock": 398,
        "document": 1,
        "isDeliveryFree": true
    },
    {
        "_id": "64392a0cd611268b56272354",
        "name": "Okra",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvfSyoWEargqH6EZ97zePpoLfWUcnptX9C1A4aKKwqg&usqp=CAU&ec=48665701",
        "description": "Only the freshest.",
        "price": 60,
        "rating": 5,
        "category": "hybrid",
        "stock": 38,
        "document": 1,
        "isDeliveryFree": true
    },
    {
        "_id": "64392a7dd611268b56272355",
        "name": "Apples",
        "image": "data:image/jpeg;base64,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",
        "description": "Only the juciest.",
        "price": 120,
        "rating": 5,
        "category": "hybrid",
        "stock": 38,
        "document": 1,
        "isDeliveryFree": true
    },
    {
        "_id": "64392aa6d611268b56272356",
        "name": "Pears",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3ASnMznvP7ksqyK1Win8zW5KxHGafl66aWXHd2HoQQ&usqp=CAU&ec=48665701",
        "description": "Fresh Pears.",
        "price": 150,
        "rating": 5,
        "category": "organic",
        "stock": 38,
        "document": 1,
        "isDeliveryFree": true
    },
    {
        "_id": "64392b0ed611268b56272357",
        "name": "Grapes",
        "image": "https://www.mahindraagri.com/wp-content/uploads/2020/06/screenshot-2020-05-07-at-4-03-48-pm1.png",
        "description": "Good quality grapes.",
        "price": 70,
        "rating": 4,
        "category": "organic",
        "stock": 38,
        "document": 1,
        "isDeliveryFree": true
    },
    {
        "_id": "64392b69d611268b56272358",
        "name": "Strawberries",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnBXp-gxlWVAD4ES2HuSsTVkVSE_OURtRM363-Qg4r9Q&usqp=CAU&ec=48665701",
        "description": "High quality strawberries mean for your refreshment",
        "price": 200,
        "rating": 5,
        "totalReview": 12,
        "category": "hybrid",
        "stock": 594,
        "document": 96,
        "isDeliveryFree": true
    },
    {
        "_id": "64392bd9d611268b5627235a",
        "name": "Mangoes",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeC98Hj8IdA2oj-DAQbnqFmLpG7PeYmS40ZLyCodAkWQ&usqp=CAU&ec=48665701",
        "description": "High quality strawberries mean for your refreshment",
        "price": 250,
        "rating": 5,
        "totalReview": 12,
        "category": "hybrid",
        "stock": 594,
        "document": 96,
        "isDeliveryFree": true
    }

];
export default productsData;
