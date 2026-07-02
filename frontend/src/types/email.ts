export interface AnalyzeEmailRequest {
    sender?: string;
    subject?: string;
    email: string;
}

export interface Email {
    id: number;

    sender: string | null;
    subject: string | null;

    email_body: string;

    smart_reply: string;

    sentiment: string;
    category: string;

    lead_status: string;
    lead_score: number;
    lead_stage: string;

    created_at: string;
}

export interface AnalyzeEmailResponse {
    success: boolean;
    message: string;
    data: Email;
}