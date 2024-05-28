// __tests__/StudentList.test.js
import { render, screen } from "./test-utils"; // Use custom render from test-utils
import List from "../components/List";
import "@testing-library/jest-dom";

const mockStudents = [
  {
    nationalId: "S12345678",
    name: "Test",
    surname: "User",
    dateOfBirth: "2000-01-01",
    studentNumber: "SN001",
  },
  {
    nationalId: "S87654321",
    name: "Jane",
    surname: "Doe",
    dateOfBirth: "2001-02-02",
    studentNumber: "SN002",
  },
  // Add more mock data if needed
];

describe("Student List Component", () => {
  it("renders student list", () => {
    render(<List data={mockStudents} type="student" />);
    mockStudents.forEach((student) => {
      expect(
        screen.getByText(`${student.name} ${student.surname}`)
      ).toBeInTheDocument();
    });
  });
});
