/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserCard from "./UserCard";

describe("<UserCard />", () => {
  it("renders", () => {
    const sampleUser = {
      gender: "female",
      title: "Ms",
      nameFirst: "Example",
      nameLast: "Person",
      avatar: "https://randomuser.me/api/portraits/med/women/90.jpg",
      address: [
        "123 Fake Street",
        "Fake City",
        "Fake State",
        "Fake Country",
        "123 456",
      ],
      dob: new Date("1990-01-01"),
      username: "fakeUsername",
    };

    render(<UserCard user={sampleUser} />);
    expect(screen.getByText("Ms Example Person")).toBeInTheDocument();
    expect(screen.getByText("123 Fake Street")).toBeInTheDocument();
    expect(screen.getByText("Fake City")).toBeInTheDocument();
    expect(screen.getByText("Fake State")).toBeInTheDocument();
    expect(screen.getByText("Fake Country")).toBeInTheDocument();
    expect(screen.getByText("123 456")).toBeInTheDocument();
    expect(screen.getByText("fakeUsername")).toBeInTheDocument();
  });
});
