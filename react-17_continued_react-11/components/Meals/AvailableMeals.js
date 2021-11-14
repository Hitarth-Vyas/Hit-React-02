import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(async () => {
    const fetchMeals =async () => {
      setIsLoading(true);

      const response = await fetch('https://meals-e4aa0-default-rtdb.firebaseio.com/meals.json').then();

      if (!response.ok) {
        throw new Error('Something went wrong')     //saves string in the message property of error
      }

      const responseData = await response.json();       // loading the data from website into the variable responseData in form of keywise(m1, m2..) objects

      const loadedMeals = [];       // declaring empty array so we can store objects in the form of array

      for (const key in responseData) {      // acessing data keywise
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
  
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);     //acessing message property of error
    });
  }, []);

  if (isLoading) {
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if (httpError) {
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      // meal={meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
