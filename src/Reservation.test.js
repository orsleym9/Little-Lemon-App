import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the "Choose date" label in BookingForm', () => {
    render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
    const labelElement = screen.getByText(/Choose date/i);
    expect(labelElement).toBeInTheDocument();
});

test('Renders the "Choose time" label in BookingForm', () => {
    render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
    const labelElement = screen.getByText(/Choose time/i);
    expect(labelElement).toBeInTheDocument();
});

test('Renders the "Number of guests" label in BookingForm', () => {
    render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
    const labelElement = screen.getByText(/Number of guests/i);
    expect(labelElement).toBeInTheDocument();
});
