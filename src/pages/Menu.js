import React from "react";
import Card from "../components/Card";

const Menu = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "Description for product 1",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description for product 2",
      imageUrl: "https://via.placeholder.com/300",
    },
    // เพิ่มสินค้าเพิ่มเติมตามต้องการ
  ];

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center pb-[100px]  bg-[#ffff]">
      <h2 className="text-[#F0E3A1] text-3xl font-judson font-bold m-5">
        Customer Favorites
      </h2>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
