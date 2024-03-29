import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('set username', async () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('1234'),
            ),
        ).toEqual({ username: '1234' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
