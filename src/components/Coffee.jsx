import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Coffee = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffee] = useState(loadedCoffee);
  console.log(coffees);
  return (
    <div>
      <h1>coffee</h1>

      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffee={setCoffee}
        ></CoffeeCard>
      ))}
    </div>
  );
};

export default Coffee;
