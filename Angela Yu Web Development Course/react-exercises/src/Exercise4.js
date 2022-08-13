import React from "react";

const Card = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt=''/>
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    )
}

const Exercise4 = () => {

    return (
        <div>
        <h1>My Contacts</h1>
            <Card 
                name="Test1"
                img="https://cdn.shopify.com/s/files/1/2723/8896/files/Hydroponics_5_mini_1024x1024.jpeg?v=1567617764"
                tel="3456789"
                email="test@test.com"
            />
            <Card 
                name="Test2"
                img="https://images.ctfassets.net/grb5fvwhwnyo/50nnwUaEmWgc9VjwBaO7P8/cf80a3e9a5160e1fa620c63208b865a1/card-benefits-of-hydroponics.jpg"
                tel="9423429090"
                email="test2@test2.com"
            />
            <Card 
                name="Test3"
                img="https://www.carolina.com/images/teacher-resources/items/large/hydroponics.jpg"
                tel="982398429"
                email="test@test3.com"
            />
        
        </div>
            
    )
    
}

export default Exercise4;