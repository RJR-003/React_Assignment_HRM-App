import { initializeApp } from "firebase/app";
import {
  getStorage,
  uploadBytes,
  getDownloadURL,
  ref as strRef,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDj_QMPEm3JLkPd4MUkdoJX2Ad-g9tcBU",
  authDomain: "hrm-app-39bd9.firebaseapp.com",
  databaseURL:
    "https://hrm-app-39bd9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hrm-app-39bd9",
  storageBucket: "hrm-app-39bd9.appspot.com",
  messagingSenderId: "832039794807",
  appId: "1:832039794807:web:9040ba14779a13af856e72",
  measurementId: "G-FF78NMEGPK",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadImage = async (file: any): Promise<string> => {
  try {
    if (!file) {
      return Promise.resolve(
        "https://firebasestorage.googleapis.com/v0/b/hrm-app-39bd9.appspot.com/o/profile.png?alt=media&token=4ada6a72-942c-46d7-9ace-351487a49639"
      );
    }
    const storageRef = strRef(storage, crypto.randomUUID());
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  } catch (err) {
    console.error(err);
    return Promise.reject("Error in uploading");
  }
};
