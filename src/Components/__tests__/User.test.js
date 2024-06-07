import { render, screen } from "@testing-library/react"
import UserData from "../UserData";
import "@testing-library/jest-dom";

//Unit testing
test("Should load UserData component", () => {
    render(<UserData />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
});