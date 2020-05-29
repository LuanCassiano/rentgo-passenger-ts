/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactElement, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import * as yup from 'yup';
import { Formik } from 'formik';

import * as LoginActions from '../../store/module/Login/actions';

import {
    Container,
    FormControl,
    FormInput,
    H1,
    ActionButton,
    TextButton,
    Footer,
    LinkText,
    ErrorMessage,
} from './styles';

import ILogin from '../../interfaces/ILogin';

export default function Login(): ReactElement {
    const dispatch = useDispatch();

    const validations = yup.object().shape({
        email: yup
            .string()
            .email('Insira um endereço de e-mail válido')
            .required('Informe seu e-mail.'),
        password: yup.string().required('Informe sua senha'),
    });

    const [initialValues] = useState<ILogin>({
        email: '',
        password: '',
    });

    return (
        <Container>
            <H1>RentGo</H1>

            <Formik
                initialValues={initialValues}
                validationSchema={validations}
                enableReinitialize
                onSubmit={(values): void => {
                    dispatch(
                        LoginActions.signInRequest(
                            values.email,
                            values.password,
                        ),
                    );
                }}
            >
                {({
                    values,
                    handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    handleSubmit,
                }) => (
                    <>
                        <FormControl>
                            <FormInput
                                placeholder="Seu e-mail"
                                placeholderTextColor="#fff9c4"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                onBlur={(): void => setFieldTouched('email')}
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                        </FormControl>

                        {touched.email && errors.email && (
                            <ErrorMessage>{errors.email}</ErrorMessage>
                        )}

                        <FormControl>
                            <FormInput
                                placeholder="Sua senha"
                                placeholderTextColor="#fff9c4"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry
                                onBlur={(): void => setFieldTouched('password')}
                                onChangeText={handleChange('password')}
                                value={values.password}
                            />
                        </FormControl>
                        {touched.password && errors.password && (
                            <ErrorMessage>{errors.password}</ErrorMessage>
                        )}

                        <ActionButton onPress={handleSubmit}>
                            <TextButton>Entrar</TextButton>
                        </ActionButton>
                    </>
                )}
            </Formik>

            <Footer>
                <TouchableOpacity style={{ marginRight: 40 }}>
                    <LinkText>Esqueci minha senha</LinkText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinkText>Termos de uso</LinkText>
                </TouchableOpacity>
            </Footer>
        </Container>
    );
}
