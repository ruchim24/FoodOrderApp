import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resMenuMockData.json";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restautant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const vegPizza = screen.getByText("Veg Pizza (14)");

  fireEvent.click(vegPizza);

  const allPizza = screen.getAllByTestId("items");

  expect(allPizza.length).toBe(14);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  const cartItems = screen.getAllByTestId("items");

  expect(cartItems.length).toBe(16);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart"}));

  const RemainingItems = screen.getAllByTestId("items");

  expect(RemainingItems.length).toBe(14);

  expect(screen.getByText("Your Cart is Empty!!!")).toBeInTheDocument();

});
