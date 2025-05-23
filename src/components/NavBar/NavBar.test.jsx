import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test('The NavBar component should render with a title', () => {
    const view = render(<NavBar title='test application 2'/>);
    expect(view).toMatchSnapshot();
});