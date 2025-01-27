import { initializeTimes, updateTimes } from './Main';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Main Functions', () => {
  test('initializeTimes returns the correct available times', () => {
    const mockDate = new Date();
    const mockTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];

    const result = initializeTimes(mockDate);
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes updates the available times state', () => {
    const initialTimes = ['12:00 PM', '1:00 PM'];
    const newTimes = ['2:00 PM', '3:00 PM'];

    const updatedTimes = updateTimes(initialTimes, newTimes);
    expect(updatedTimes).toEqual(newTimes);
  });
});