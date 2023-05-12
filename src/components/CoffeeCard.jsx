import React, { useState } from "react";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffee }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;
  //   const [totalCoffee, setTotalCoffee]=useState(coffee)

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingCoffee = coffees.filter(
            (singleCoffee) => singleCoffee._id !== id
          );
          setCoffee(remainingCoffee);
        }
      });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-4">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div className="flex justify-center flex-col">
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-orange-500"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
