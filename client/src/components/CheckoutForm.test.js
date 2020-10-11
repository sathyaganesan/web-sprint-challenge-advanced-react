import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    
    const firstNameInput = screen.getByLabelText(/first Name:/i);
    const lastNameInput = screen.getByLabelText(/last Name:/i);
    const addressInput = screen.getByLabelText(/Address:/i);


    fireEvent.change(firstNameInput, { target: { value: "sathya" } });
    fireEvent.change(lastNameInput, { target: { value: "ganesan" } });
    fireEvent.change(addressInput, { target: { value: "26124 Flintonbridge Dr" } });

    expect(firstNameInput).toHaveValue("sathya");
    expect(lastNameInput).toHaveValue("ganesan");
    expect(addressInput).toHaveValue("26124 Flintonbridge Dr");

    const submitInput = screen.getByRole("button", { name: /checkout/i });

    const exampleFirstName = screen.findByText(/sathya/i)

});
