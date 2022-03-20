import { useRef } from "react";
import { useRouter } from "next/router";
const NewMealForm = () => {
  // use of useRef to capture input value
  const mealNameInputRef = useRef();
  const chefInputRef = useRef();

  // use of useRouter from next/router to redirect this page to the Homepage
  const router = useRouter();

  // implementation of newMealHandler function
  const newMealHandler = async (event) => {
    event.preventDefault();

    // store meal data in an object
    const mealData = {
      name: mealNameInputRef.current.value,
      chef: chefInputRef.current.value,
    };

    // use of Fetch API to make a request to the new-meal api and get back a response
    const response = await fetch("/api/insert-meal", {
      method: "POST",
      body: JSON.stringify(mealData),
      headers: {
        "content-Type": "application/json",
      },
    });

    // parses JSON response into native JavaScript objects
    const data = await response.json();

    console.log(data);

    // redirects this page to the Homepage
    router.replace("/");
  };

  return (
    <div>
      <h1>Add a new Meal </h1>
      <form onSubmit={newMealHandler}>
        <input
          type="text"
          placeholder="Meal Name"
          required
          ref={mealNameInputRef}
        />
        <input
          type="text"
          placeholder="Name of Chef"
          required
          ref={chefInputRef}
        />
        <button
          type="submit"
        >
          Add Now
        </button>
      </form>
    </div>
  );
};

export default NewMealForm;