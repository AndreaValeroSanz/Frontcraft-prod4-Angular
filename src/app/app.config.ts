import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"frontcraft-36a90","appId":"1:861086747402:web:a4acc427cce718ebb708f3","storageBucket":"frontcraft-36a90.firebasestorage.app","apiKey":"AIzaSyA0UTbAvRWCheukNzm4-DUWXHKlE2X2q2k","authDomain":"frontcraft-36a90.firebaseapp.com","messagingSenderId":"861086747402"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"frontcraft-36a90","appId":"1:861086747402:web:a4acc427cce718ebb708f3","storageBucket":"frontcraft-36a90.firebasestorage.app","apiKey":"AIzaSyA0UTbAvRWCheukNzm4-DUWXHKlE2X2q2k","authDomain":"frontcraft-36a90.firebaseapp.com","messagingSenderId":"861086747402"})), provideFirestore(() => getFirestore())]
};
