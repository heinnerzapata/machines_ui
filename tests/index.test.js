import Machine from "./../app/machine/page";

import "@testing-library/jest-dom";

import {
  fireEvent,
  render,
  screen,
  waitForElement,
} from "@testing-library/react";

const MOCK_DATA = [
  {
    name: "Machine-001",
    description: "Mini compactadora",
    status: true,
    createdAt: "2023-09-26T22:30:36.624Z",
    updatedAt: "2023-09-26T22:30:36.624Z",
    id: "65135b8c7057d09b4cc2ae88",
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Machine", () => {
  it("renders a Machine", async () => {
    render(<Machine />);
    // check if all components are rendered
    const listNode = await waitForElement(() => getByTestId("list"));
    expect(screen.getByTestId("title")).toBeInTheDocument();
    // expect(listNode.children).toHaveLength(5);
  });
});
