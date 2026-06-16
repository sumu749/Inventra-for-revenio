const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

async function getFirebaseApp() {
    if (typeof window === "undefined") {
        return null;
    }

    if (!firebaseConfig.apiKey) {
        return null;
    }

    const { initializeApp, getApps, getApp } = await import("firebase/app");

    if (!getApps().length) {
        return initializeApp(firebaseConfig);
    }

    return getApp();
}

export async function getFirebaseAuth() {
    const app = await getFirebaseApp();
    if (!app) {
        return null;
    }

    const { getAuth } = await import("firebase/auth");
    return getAuth(app);
}

export async function getFirebaseDb() {
    const app = await getFirebaseApp();
    if (!app) {
        return null;
    }

    const { getFirestore } = await import("firebase/firestore");
    return getFirestore(app);
}
