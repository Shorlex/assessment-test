// __tests__/TeacherForm.test.js
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Form from "../components/Form";

jest.mock("axios");

describe("Teacher Form Submission", () => {
  it("submits teacher form data", async () => {
    axios.post.mockResolvedValueOnce({ data: {} });
    render(
      <Form
        endpoint="/api/teachers"
        title="Teacher Form"
        fields={[]}
        redirectTo="/"
      />
    );

    fireEvent.click(screen.getByText("Submit"));

    // Wait for the submission message or redirect
    await waitFor(() => {
      expect(screen.getByText("Successfully saved!")).toBeInTheDocument();
    });
  });
});
