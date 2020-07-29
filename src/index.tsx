import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  const courseName = 'Half Stack application development';
  const courseParts = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
    },
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content courses={courseParts} />
      <Total courses={courseParts} />
    </div>
  );
};

const Header: React.FC<{ name: string }> = ({ name }) => {
  return <h1>{name}</h1>;
};

interface CourseParts {
  name: string;
  exerciseCount: number;
}
interface ContentProps {
  courses: Array<CourseParts>;
}

const Content: React.FC<ContentProps> = ({ courses }) => {
  return (
    <>
      {courses.map((course: CourseParts) => {
        return (
          <p>
            {course.name} {course.exerciseCount}
          </p>
        );
      })}
    </>
  );
};

interface TotalProps {
  courses: Array<CourseParts>;
}

const Total: React.FC<TotalProps> = ({ courses }) => {
  const totalExercises: number = courses.reduce(
    (acc: number, part: CourseParts) => acc + part.exerciseCount,
    0
  );

  return <p>{`Number of exercises ${totalExercises}`}</p>;
};
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
