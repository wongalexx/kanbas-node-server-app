import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}
export function unenrollUserInCourse(userId, courseId, res) {
  const { enrollments } = Database;
  const idx = enrollments.findIndex(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );
  console.log("IDX", idx);
  if (idx === -1) {
    return res.status(404);
  }
  Database.enrollments = enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
  console.log("RESULT", Database.enrollments);
  return res.status(200);
}
