export interface Lead {
    id: number;
    sender: string;
    subject: string;
    email_body: string;

    smart_reply: string;

    sentiment: string;
    category: string;

    lead_status: string;
    lead_score: number;
    lead_stage: string;

    created_at: string;
}


export interface LeadsResponse {
    success: boolean;
    message: string;
    data: Lead[];
}