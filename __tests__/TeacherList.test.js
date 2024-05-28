// __tests__/TeacherList.test.js
import { render, screen } from "./test-utils"; // Use custom render from test-utils
import List from "../components/List";
import "@testing-library/jest-dom";

const mockTeachers = [
  {
    nationalId: "T12345678",
    title: "Mr",
    name: "John",
    surname: "Doe",
    dateOfBirth: "1980-01-01",
    teacherNumber: "TN001",
    salary: 50000,
  },
  {
    nationalId: "T87654321",
    title: "Mrs",
    name: "Jane",
    surname: "Smith",
    dateOfBirth: "1985-05-05",
    teacherNumber: "TN002",
    salary: 60000,
  },
  // Add more mock data if needed
];

describe("Teacher List Component", () => {
  it("renders teacher list", () => {
    render(<List data={mockTeachers} type="teacher" />);
    mockTeachers.forEach((teacher) => {
      expect(
        screen.getByText(`${teacher.title} ${teacher.name} ${teacher.surname}`)
      ).toBeInTheDocument();
    });
  });
});
