import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import WillsAwesomeCounter from "./WillsAwesomeCounter";

import {act } from 'react-dom/test-utils';
import userEvent from "@testing-library/user-event";


test("Counter should have a default initial value of 0", () => {
    let expectedValue = 0;
    render(<WillsAwesomeCounter/>)

    const count =screen.queryByText(expectedValue);

    expect(count).toBeVisible();
})

test("Counter should accept an initial value", () =>{
    let expectedValue = 7;
    let initialValue = 7;
    render(<WillsAwesomeCounter initialValue = {initialValue}/>);

    const count =screen.queryByText(expectedValue);

    expect(count).toBeVisible();
})

test("Counter should increment by 1 when add is pressed", () =>{
    let expectedValue = 7;
    let startingValue = 6;
    render(<WillsAwesomeCounter initialValue = {startingValue}/>);

    const addButton = screen.getByText("Add");

    act(() => {
        userEvent.click(addButton);
    });
    
    const count =screen.queryByText(expectedValue);

    expect(count).toBeVisible();    
})

test("Counter should increment by 2 when add is pressed twice", () =>{
    let expectedValue = 8;
    let startingValue = 6;
    render(<WillsAwesomeCounter initialValue = {startingValue}/>);

    const addButton = screen.getByText("Add");

    act(() => {
        userEvent.click(addButton);
        userEvent.click(addButton);
    });
    
    const count =screen.queryByText(expectedValue);

    expect(count).toBeVisible();    
})

test("Counter should decrement by 1 when remove is pressed", () =>{
    let expectedValue = 5;
    let startingValue = 6;
    render(<WillsAwesomeCounter initialValue = {startingValue}/>);

    const removeButton = screen.getByText("Remove");

    act(() => {
        userEvent.click(removeButton);
    });
    
    const count =screen.queryByText(expectedValue);

    expect(count).toBeVisible();    
})

test("Counter should decrement by 2 when remove is pressed twice", () =>{
    let expectedValue = 4;
    let startingValue = 6;
    render(<WillsAwesomeCounter initialValue = {startingValue}/>);

    const removeButton = screen.getByText("Remove");

    act(() => {
        userEvent.click(removeButton);
        userEvent.click(removeButton);
    });
    
    const count =screen.queryByText(expectedValue);

    expect(count).toBeVisible();    
})

test("Test count does not become negative when remove is pressed", () =>{
    let expectedValue = 0;
    let startingValue = 1;
    render(<WillsAwesomeCounter initialValue = {startingValue}/>);

    const removeButton = screen.getByText("Remove");

    act(() => {
        userEvent.click(removeButton);
        userEvent.click(removeButton);
    });
    
    const count =screen.queryByText(expectedValue);

    expect(count).toBeVisible();    
})