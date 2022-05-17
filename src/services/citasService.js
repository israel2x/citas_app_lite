import http from "../services/httpService";
import config from "../config.json";

const apiEndpoint = config.apiTest + "/citas";

function citaUrl(citaId) {
  return `${apiEndpoint}/${citaId}`;
}

export function getAllCitas() {
  return http.get(apiEndpoint + "/all");
}

export function getCitasByMonth(month) {
  return http.get(apiEndpoint + "/month/" + month);
}

export function getCitaById(citaId) {
  //return http.get(apiEndpoint + "/" + citaId);
  return http.get(citaUrl(citaId));
}

//cita con paciente nuevo
export function saveNewCita(cita) {
  return http.post(apiEndpoint + "/new", cita);
}

export function updateCita(cita) {
  if (cita._id) {
    const body = { ...cita };
    delete body._id;
    //return http.put(apiEndpoint + "/" + cita._id, body);
    return http.put(citaUrl(cita._id), body);
  }
}
/* 
//actualizar cita a ANTENIDA o  cancelada 
export function updateCitaToAttended(citaId);

export function deleteCita(citaId);
 */
