import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const USERS_API = `${HTTP_SERVER}/api/users`;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
}

export interface Module {
  _id: string;
  name: string;
  description?: string;
  course: string;
}

export const fetchAllCourses = async (): Promise<Course[]> => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const findMyCourses = async (): Promise<Course[]> => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );
  return data;
};

export const createCourse = async (
  course: Omit<Course, "_id">
): Promise<Course> => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course
  );
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course: Course): Promise<Course> => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course
  );
  return data;
};

export const findModulesForCourse = async (
  courseId: string
): Promise<Module[]> => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/modules`
  );
  return response.data;
};

export const createModuleForCourse = async (
  courseId: string,
  module: Omit<Module, "_id">
): Promise<Module> => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const updateModule = async (module: Module): Promise<Module> => {
  const { data } = await axiosWithCredentials.put(
    `${HTTP_SERVER}/api/modules/${module._id}`,
    module
  );
  return data;
};

export const deleteModule = async (moduleId: string): Promise<void> => {
  await axiosWithCredentials.delete(`${HTTP_SERVER}/api/modules/${moduleId}`);
};

export interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
}

export const findAssignmentsForCourse = async (
  courseId: string
): Promise<Assignment[]> => {
  const { data } = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return data;
};

export const createAssignment = async (
  courseId: string,
  assignment: Omit<Assignment, "_id">
): Promise<Assignment> => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return data;
};

export const deleteAssignment = async (assignmentId: string): Promise<void> => {
  await axiosWithCredentials.delete(
    `${HTTP_SERVER}/api/assignments/${assignmentId}`
  );
};

export const updateAssignment = async (
  assignment: Assignment
): Promise<Assignment> => {
  const { data } = await axiosWithCredentials.put(
    `${HTTP_SERVER}/api/assignments/${assignment._id}`,
    assignment
  );
  return data;
};

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

export const findEnrollmentsForUser = async (
  userId: string
): Promise<Enrollment[]> => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/enrollments`
  );
  return data;
};

export const enrollInCourse = async (
  userId: string,
  courseId: string
): Promise<Enrollment> => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/courses/${courseId}/enroll`
  );
  return data;
};

export const unenrollFromCourse = async (
  userId: string,
  courseId: string
): Promise<void> => {
  await axiosWithCredentials.delete(
    `${USERS_API}/${userId}/courses/${courseId}/unenroll`
  );
};
