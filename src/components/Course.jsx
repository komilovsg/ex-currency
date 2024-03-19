import { useState, useEffect } from "react";

export default function Course() {
  const initialCourseList = [
    { id: 1, firstCurrency: "USD", secondCurrency: "RUB", rate: 73.5 },
    { id: 2, firstCurrency: "TJS", secondCurrency: "USD", rate: 0.087 },
    { id: 3, firstCurrency: "EUR", secondCurrency: "RUB", rate: 87.2 },
  ];

  const [courses, setCourses] = useState(
    JSON.parse(localStorage.getItem("courses")) || initialCourseList
  );
  const [newCourse, setNewCourse] = useState({
    firstCurrency: "",
    secondCurrency: "",
    rate: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const handleAddCourse = () => {
    const existingCourse = courses.find(
      (course) =>
        course.firstCurrency === newCourse.firstCurrency &&
        course.secondCurrency === newCourse.secondCurrency
    );
    if (existingCourse) {
      setError("Course with this pair already exists");
      return;
    }

    const newCourses = [
      ...courses,
      { id: courses.length + 1, ...newCourse },
    ];
    setCourses(newCourses);
    setNewCourse({ firstCurrency: "", secondCurrency: "", rate: "" });
    setError("");
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <div className="w-full container mx-auto">
      <h1 className="my-4 font-semibold text-center">Course List</h1>
      <div className="w-full flex flex-col justify-center items-center">
        {courses.map((course) => (
          <div
            className="w-[80%] flex flex-wrap justify-between items-center p-5 border-b"
            key={course.id}
          >
            <p>
              {course.firstCurrency}/{course.secondCurrency} - Rate:{" "}
              {course.rate}
            </p>
            <button
              className="bg-red-600 font-semibold text-white border rounded-md p-2 px-4"
              onClick={() => handleDeleteCourse(course.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <h2 className="my-4 font-semibold text-center">Add New Course</h2>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <input
          type="text"
          className="border rounded-md p-2"
          placeholder="First Currency Code"
          value={newCourse.firstCurrency}
          onChange={(e) =>
            setNewCourse({ ...newCourse, firstCurrency: e.target.value })
          }
        />
        <input
          type="text"
          className="border rounded-md p-2"
          placeholder="Second Currency Code"
          value={newCourse.secondCurrency}
          onChange={(e) =>
            setNewCourse({ ...newCourse, secondCurrency: e.target.value })
          }
        />
        <input
          type="text"
          className="border rounded-md p-2"
          placeholder="Rate"
          value={newCourse.rate}
          onChange={(e) =>
            setNewCourse({ ...newCourse, rate: e.target.value })
          }
        />
        <button
          className="bg-green-600 font-semibold text-white border rounded-md p-2 px-4"
          onClick={handleAddCourse}
        >
          Add Course
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
