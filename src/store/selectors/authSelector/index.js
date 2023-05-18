import { createSelector } from "@reduxjs/toolkit";

const authSelector = (state) => state.auth

export const isAuthenticatedSelector = createSelector(
  authSelector,
  auth => auth.isAuthenticated
);
export const userIdSelector = createSelector(
  authSelector,
  auth => auth.userData.id
);