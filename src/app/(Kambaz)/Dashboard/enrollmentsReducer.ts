import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as dbEnrollments } from "../Database";

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentsState = {
  enrollments: dbEnrollments as Enrollment[],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      const newEnrollment: Enrollment = {
        _id: `${Date.now()}`,
        user: action.payload.userId,
        course: action.payload.courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenrollFromCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(
            enrollment.user === action.payload.userId &&
            enrollment.course === action.payload.courseId
          )
      );
    },
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload;
    },
  },
});

export const { enrollInCourse, unenrollFromCourse, setEnrollments } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
