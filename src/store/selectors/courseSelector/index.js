import { createSelector } from "@reduxjs/toolkit";

const courseSelector = (state) => state.courses

export const coursesDataSelector = createSelector(
  courseSelector,
  courses => courses.coursesData
);
export const courseDetailSelector = createSelector(
  courseSelector,
  courses => courses.courseDetail
);
export const videoDetailSelector = createSelector(
  courseSelector,
  courses => courses.videoDetail
);
