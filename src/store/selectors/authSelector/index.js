import { createSelector } from "@reduxjs/toolkit";

const authSelector = (state) => state.auth

export const isAuthenticatedSelector = createSelector(
  authSelector,
  auth => auth.isAuthenticated
);
export const userDataSelector = createSelector(
  authSelector,
  auth => auth.userData
);
export const userIdSelector = createSelector(
  authSelector,
  auth => auth.userData.id
);

export const roleSelector = createSelector(
  authSelector,
  auth => auth.userData.roles
);