import { useState } from "react";
import { Product } from "../types/types";
import Products from "../components/Products";
import TextContent from "../components/TextContent";
import SortingOptions from "../components/SortingOptions";
import Notification from "../components/Notification";

type ShopPageProps = {
  products: Product[];
  addPlant: (product: Product) => void;
};

const ShopPage = ({ products, addPlant }: ShopPageProps) => {
  const [sortMethod, setSortMethod] = useState<string>("default");

  const sortedProducts = products.sort((a, b) => {
    if (sortMethod === "price low to high") {
      return a.price - b.price;
    } else if (sortMethod === "price high to low") {
      return b.price - a.price;
    } else if (sortMethod === "name a to z") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <>
      <TextContent title={"Our Plants"} />
      <SortingOptions sortMethod={sortMethod} setSortMethod={setSortMethod} />
      <Products products={sortedProducts} addPlant={addPlant} />
      <Notification/>
    </>
  );
};

export default ShopPage;