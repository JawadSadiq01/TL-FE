import api from "../../api";
import { DOCUMENT_CONSTANTS } from "../../config/constants";

const useCustomHook = () => {
  const { DRIVERS } = DOCUMENT_CONSTANTS;


  const createDriver = async (payload: any): Promise<any> => {
    let body: any = { fields: {} };
    const attributes: Record<string, string> = {
      name: "stringValue",
      email: "stringValue",
      phone: "stringValue",
      gender: "stringValue",
      vehicleNo: "stringValue",
      passengers: "integerValue",
      hasChildSeat: "booleanValue",
      password: "stringValue",
    }

    for (const key in attributes) {
      if (key in payload) {
        const type = attributes[key];
        body.fields[key] = { [type]: payload[key] };
      }
    }

    const resp = await api.post(DRIVERS, body);
    return resp
  };

  return {
    createDriver,
  };
};

export default useCustomHook;