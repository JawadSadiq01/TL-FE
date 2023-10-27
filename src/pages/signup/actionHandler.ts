import api from "../../api";
import {DOCUMENT_CONSTANTS} from "../../config/constants";

const useCustomHook = () => {
  const {DRIVERS} = DOCUMENT_CONSTANTS;

  const createDriver = async (payload: any): Promise<any> => {
    const { data } = await api.post(DRIVERS, payload);
    console.log(JSON.stringify(data));
  };

  return {
    createDriver,
  };
};

export default useCustomHook;