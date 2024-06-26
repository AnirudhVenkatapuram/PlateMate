// PlateMate/hooks/useAuth.js

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useRouter } from 'expo-router';

export default function useAuth() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            console.log('user: ', user);

            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return unsub;
    }, []);

    return { user };
}
