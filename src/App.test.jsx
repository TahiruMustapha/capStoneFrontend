import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect, vi } from "vitest"; // Import vi
import axios from "axios"; // Import axios

// Mock axios module
vi.mock("axios");

describe("App", () => {
  it("renders the App component", () => {
     // Mock the expected response for TableList
    axios.get.mockResolvedValue({ data: [] });

    render(<App />);
  });
});
