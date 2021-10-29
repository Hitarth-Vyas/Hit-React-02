import React, { useState } from 'react';
import CourseGoalList from './components/CoursrGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CoursrGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updateGoals = [...prevGoals];
      updateGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updateGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updateGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updateGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe Add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
}

export default App;
