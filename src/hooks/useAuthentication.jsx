import React, { useEffect } from 'react';
import { db } from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { useState } from 'react';

export function useAuthentication() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //cleanup
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    const isCancelled = () => {
        if (cancelled) {
            return;
        }
    }

    //register
    const createUser = async (data) => {
        isCancelled();

        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            
            await updateProfile(user, {
                displayName: data.name
            });
            
            setLoading(false);
            return user

        } catch (error) {
            let systemErrorMessage;
            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter ao menos 6 caracteres.";
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado.";
            } else {
                systemErrorMessage = "Ocorreu um erro. Por favor, tente novamente mais tarde."
            }

            setLoading(false);
            setError(systemErrorMessage);
        }
    }

    //login - sign in
    const login = async (data) => {
        isCancelled();

        setLoading(true);
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);

        } catch (error) {
            let systemErrorMessage;
            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado.";
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta.";
            } else {
                systemErrorMessage = "Ocorreu um erro. Por favor, tente novamente mais tarde."
            }

            setLoading(false);
            setError(systemErrorMessage);
        }
    }

    //logout - sign out
    const logout = () => {
        isCancelled();
        signOut(auth);
    }


    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
};