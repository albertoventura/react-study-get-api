import { Exception } from "./core/Exception";
import { Api } from "./core/Config";

const GetAdviceService = {
    get: async () => {
        try {
            const { data } = await Api().get("/advice");
            return data;
        } catch (error) {
            return new Exception(error.message || "Error on get method");
        }
    },
    getById: async () => {

    }
}

export default GetAdviceService;