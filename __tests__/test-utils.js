// __tests__/test-utils.js
import { render } from '@testing-library/react';
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime"; // next 12
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

// Mock Router
const mockRouter = {
  route: "/",
  pathname: "",
  query: {},
  asPath: "",
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
};

// Mock useRouter
useRouter.mockImplementation(() => mockRouter);

// Custom render function that includes RouterContext
const customRender = (ui, { route = "/", ...options } = {}) => {
  mockRouter.route = route;
  return render(ui, {
    wrapper: ({ children }) => (
      <RouterContext.Provider value={mockRouter}>
        {children}
      </RouterContext.Provider>
    ),
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };

// Define a test case
test('example test', () => {
  // Your test logic goes here
  expect(1 + 1).toBe(2); // Example assertion
});