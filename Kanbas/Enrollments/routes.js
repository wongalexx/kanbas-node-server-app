import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.put("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.send(status);
  });
  app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await enrollmentsDao.unenrollUserInCourse(userId, courseId);
    res.send(status);
  });
}
