// __tests__/StudentForm.test.js
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Form from "../components/Form";

jest.mock("axios");

describe("Student Form Submission", () => {
  it("submits student form data", async () => {
    axios.post.mockResolvedValueOnce({ data: {} });
    render(
      <Form
        endpoint="/api/students"
        title="Student Form"
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
