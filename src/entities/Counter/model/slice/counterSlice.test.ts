import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice.test', () => {
    test('should increment value to 11', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
    });

    test('should decrement value to 9', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
