/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

jest.mock("next/navigation", () => ({
  usePathname() {
    return "/";
  },
}));

describe("<Navbar />", () => {
  it("/", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();
    expect(screen.getByText("Home")).toHaveClass("activeLink");
    expect(screen.getByText("User")).not.toHaveClass("activeLink");
  });
});
