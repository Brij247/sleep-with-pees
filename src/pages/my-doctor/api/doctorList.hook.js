import { useQuery } from "@tanstack/react-query";

import { useAxios } from "../../../services/axios";
import { fetchDoctorsListData } from "./doctorList.api";

export const useFetchDoctorsList = () => {
  const axios = useAxios();

  return useQuery({
    queryKey: ["doctors-list"],
    queryFn: () => fetchDoctorsListData(axios),
  });
};
