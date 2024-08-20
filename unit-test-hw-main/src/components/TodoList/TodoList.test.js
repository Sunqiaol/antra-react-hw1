
import TodoList from "./TodoList";
import {screen,render, waitFor, fireEvent } from "@testing-library/react";

// TODO: Mock the fetch API, and do reset and clean up
beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, title: "Test Todo", completed: false },
            {id: 2, title: "Test Todo2", completed: false}
        ]),
      })
    );
  });

afterEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    jest.restoreAllMocks();
});

// TODO: Test component to render correctly with the fetched data
test("renders fetched todos on mount", async () => {
    render(<TodoList/>);

    await waitFor(()=>{
        expect(screen.getByText("Test Todo")).toBeInTheDocument();
        expect(screen.getByText("Test Todo2")).toBeInTheDocument();
    })
});

// TODO: Test component to handle API fetch failure and display error message
test("handles API fetch failure", async () => {
    fetch.mockImplementationOnce(() =>
        Promise.reject(new Error("Failed to fetch todos"))
    );
    render(<TodoList/>);
    
    await waitFor(()=>{
        expect(screen.getByText("Error: Failed to fetch todos")).toBeInTheDocument();
    })
});

// TODO: Test adding a new todo
test("adds a new todo item", async () => {
    render(<TodoList/>);

    await waitFor(()=>screen.getByText("Test Todo"));
    fireEvent.change(screen.getByPlaceholderText("Enter todo"),{
        target: {value: "New Todo"}
    });

    fireEvent.click(screen.getByText("Add Todo"))
    expect(screen.getByText("New Todo")).toBeInTheDocument();
});

// TODO: Test removing a todo
test("removes a todo item", async () => {
    render(<TodoList/>)

    const todoItem = await waitFor(()=> screen.getByText("Test Todo"))

    const removeButton = todoItem.closest('li').querySelector('button');

    fireEvent.click(removeButton);

    expect(screen.queryByText("New Todo")).not.toBeInTheDocument();
});
