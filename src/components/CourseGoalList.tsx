import type { CourseGoal as Cgoal } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: Cgoal[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
