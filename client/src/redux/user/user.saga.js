import { takeLatest, put, take, all, call } from "redux-saga/effects";
import types from "./user.types";
import {
  googleProvider,
  auth,
  createUserProfile,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
} from "./user.actions";

export function* commonSignIn(user, additionalData) {
  try {
    const userRef = yield call(createUserProfile, user, additionalData);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(commonSignIn, user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* googleSignInStart() {
  yield takeLatest(types.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(commonSignIn, user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* emailSignInStart() {
  yield takeLatest(types.EMAIL_SIGN_IN_START, emailSignIn);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure)(err);
  }
}

export function* signOutStart() {
  yield takeLatest(types.SIGN_OUT_START, signOut);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(commonSignIn, user, { displayName });
  } catch (err) {
    yield put(signUpFailure(err));
  }
}

export function* signUpStart() {
  yield takeLatest(types.SIGN_UP_START, signUp);
}

export function* checkUserSession() {
  try {
    const user = yield getCurrentUser;
    if (!user) return;
    yield call(commonSignIn, user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* checkUserSessionStart() {
  yield takeLatest(types.CHECK_USER_SESSION, checkUserSession);
}

export function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(signOutStart),
    call(signUpStart),
  ]);
}
