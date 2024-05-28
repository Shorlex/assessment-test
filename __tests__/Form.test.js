// __tests__/Form.test.js
import { render, screen, fireEvent } from "./test-utils"; // Use custom render from test-utils
import Form from "../components/Form";
import axios from "axios";
import "@testing-library/jest-dom";

jest.mock("axios");

const mockFields = [
  { label: "National ID Number", name: "nationalId", required: true },
  { label: "Name", name: "name", required: true },
  { label: "Surname", name: "surname", required: true },
  { label: "Date of Birth", name: "dateOfBirth", required: true, type: "date" },
  { label: "Student Number", name: "studentNumber", required: true },
];

describe("Form Component", () => {
  it("renders form fields", () => {
    render(
      <Form
        endpoint="/api/students"
        title="Student Form"
        fields={mockFields}
        redirectTo="/"
      />
    );
    mockFields.forEach((field) => {
      expect(screen.getByLabelText(field.label + ":")).toBeInTheDocument();
    });
  });

  it("submits form data", async () => {
    axios.post.mockResolvedValue({ data: {} });
    render(
      <Form
        endpoint="/api/students"
        title="Student Form"
        fields={mockFields}
        redirectTo="/"
      />
    );

    fireEvent.change(screen.getByLabelText("National ID Number:"), {
      target: { value: "S12345678" },
    });
    fireEvent.change(screen.getByLabelText("Name:"), {
      target: { value: "Test" },
    });
    fireEvent.change(screen.getByLabelText("Surname:"), {
      target: { value: "User" },
    });
    fireEvent.change(screen.getByLabelText("Date of Birth:"), {
      target: { value: "2000-01-01" },
    });
    fireEvent.change(screen.getByLabelText("Student Number:"), {
      target: { value: "SN001" },
    });

    fireEvent.click(screen.getByText("Submit"));

    await screen.findByText("Successfully saved!");

    expect(axios.post).toHaveBeenCalledWith("/api/students", {
      nationalId: "S12345678",
      name: "Test",
      surname: "User",
      dateOfBirth: "2000-01-01",
      studentNumber: "SN001",
    });
  });
});
