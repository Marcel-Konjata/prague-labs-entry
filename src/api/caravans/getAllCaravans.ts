import { restApiClient } from "../index";
import { CaravansGetType } from "./types";
import { AxiosError } from "axios";

export const getAllCaravans = async (): Promise<CaravansGetType> => {
  try {
    const response = await restApiClient.get("/data");
    return response.data;
  } catch (e) {
    //proper handling should be declaring custom error type as AxiosError<T> but lets not complicate it this time
    throw new Error(JSON.stringify(e));
  }
};
