import http from "../services/httpService";
//import config from "../config.json";

const apiEndpoint = "/users/";

export function getDoctors() {
  return http.get(apiEndpoint + "doctors");
}

export function getPatients() {
  return http.get(apiEndpoint + "patients");
}

export function getPatientById(patiendId) {
  return http.get(apiEndpoint + "patients/" + patiendId);
}

export function getDoctorById(doctorId) {
  return http.get(apiEndpoint + "doctors/" + doctorId);
}
