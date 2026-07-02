import api from "./api";

import type {
    AnalyzeEmailRequest,
    AnalyzeEmailResponse,
    Email,
} from "../types/email";



export const analyzeEmail = async (
    data: AnalyzeEmailRequest
): Promise<AnalyzeEmailResponse> => {

    const response =
        await api.post<AnalyzeEmailResponse>(
            "/email/analyze",
            data
        );

    return response.data;
};



export const getEmailHistory = async (): Promise<Email[]> => {

    const response =
        await api.get<Email[]>(
            "/email/history"
        );

    return response.data;
};



export const getLeads = async (): Promise<Email[]> => {

    const response =
        await api.get<Email[]>(
            "/email/leads"
        );

    return response.data;
};



export const getHotLeads = async (): Promise<Email[]> => {

    const response =
        await api.get<Email[]>(
            "/email/leads/hot"
        );

    return response.data;
};



export const getWarmLeads = async (): Promise<Email[]> => {

    const response =
        await api.get<Email[]>(
            "/email/leads/warm"
        );

    return response.data;
};



export const getColdLeads = async (): Promise<Email[]> => {

    const response =
        await api.get<Email[]>(
            "/email/leads/cold"
        );

    return response.data;
};