import { baseUrl } from "../../../services/axios";

export const fetchDoctorsListData = (_axios) =>
  _axios.get(`${baseUrl}/task_app/api/doctors/`).then((res) => res?.data);
