import React from "react";

import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");

  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const price = form.price.value;
    const details = form.details.value;

    const service = {
      name: name,
      price: price,
      picture,
      details,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added New Package",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>Add a Service & Package</h1>
      <form onSubmit={handleAddService} className="bg-slate-200 px-20 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <input
            name="name"
            type="text"
            placeholder="Type Package Name"
            className="input input-bordered w-full "
          />

          <input
            name="price"
            type="text"
            placeholder="Type your packages price"
            className="input input-bordered w-full"
          />
          <input
            name="picture"
            type="text"
            placeholder="Pest your packages image link"
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          name="details"
          className="textarea textarea-bordered w-full h"
          placeholder="Type your packages details"
        ></textarea>
        <button className="btn btn-error w-full mt-5">Add a Packages</button>
      </form>
    </div>
  );
};

export default AddService;
