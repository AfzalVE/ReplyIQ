import api from "./api";

import type {
    LeadsResponse,
} from "../types/lead";


export const getLeads = async (): Promise<LeadsResponse> => {

    const response = await api.get<LeadsResponse>(
        "/leads"
    );

    return response.data;
};