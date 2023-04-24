import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUserName } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('auth_form')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('enter_login')}
                    onChange={onChangeUsername}
                    value={username}
                    autofocus
                />

                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('enter_pswd')}
                    onChange={onChangePassword}
                    value={password}
                />

                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Log_In')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
