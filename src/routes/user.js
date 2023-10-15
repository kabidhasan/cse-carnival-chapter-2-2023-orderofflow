const { Router } = require("express");
const router = Router();
const {getAllExperts, getExpertById, getAllExpertsByCountry, getAllExpertsByServices, updatePrice, makeAppointment, confirmAppointmentByAppointmentId, getUserIdByEmail, getAllAppointments } = require("../controllers/user");
const { userAuth } = require("../middlewares/auth-middleware");


router.get("/getAllExperts", getAllExperts);
router.get("/getExpertById", getExpertById);
router.get("/getAllExpertsByCountry", getAllExpertsByCountry);
router.get("/getAllExpertsByServices", getAllExpertsByServices);
router.post("/updatePrice", updatePrice);
router.post("/makeAppointment", makeAppointment);
router.post(
  "/confirmAppointmentByAppointmentId",
  confirmAppointmentByAppointmentId
);

router.get("/getUserIdByEmail", getUserIdByEmail)

router.get("/getAllAppointments", getAllAppointments);
module.exports = router;
