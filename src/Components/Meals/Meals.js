import { Fragment } from 'react';
import AvaiableMeals from './AvaiableMeals';
import MealsSummary from './MealsSummary';

export default function Meals(props) {
  return (
    <Fragment>
      <MealsSummary />
      <AvaiableMeals />
    </Fragment>
  );
}
