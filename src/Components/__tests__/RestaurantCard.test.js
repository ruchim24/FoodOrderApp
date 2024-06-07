import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestraurantCard";
import MOCK_DATA from "../mocks/resDataMock.json";
import PROMOTED_DATA from "../mocks/resPromotedDataMock.json";
import "@testing-library/jest-dom";

describe("testing Restaurant Card Component",() => {

beforeAll(() => { console.log("before all") });
beforeEach(() => { console.log("before each") });
afterAll(() => { console.log("after all") });
afterEach(() => { console.log("after each") });
//Unit testing
it("should render RestaurantCard Component with props data",() => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const resName = screen.getByText("Chinese Wok");
    expect(resName).toBeInTheDocument();
});

//testing Higher Order Component
it("should render Promoted Restaurant",() => { 
    const RestraurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestraurantCardPromoted resData={PROMOTED_DATA} />);

    const promotedName = screen.getByText("Momotoko");
    expect(promotedName).toBeInTheDocument();
});

});