import { useState } from "react";

import { analyzeEmail } from "../api/email";

import Header from "../components/Header";
import EmailForm from "../components/EmailForm";
import AnalysisCard from "../components/AnalysisCard";
import Loading from "../components/Loading";

import type {
    AnalyzeEmailRequest,
    Email,
} from "../types/email";

export default function Home() {
    const [loading, setLoading] = useState(false);

    const [analysis, setAnalysis] = useState<Email | null>(null);

    const handleAnalyzeEmail = async (
        data: AnalyzeEmailRequest
    ) => {
        try {
            setLoading(true);

            const response = await analyzeEmail(data);

            setAnalysis(response.data);

        } catch (error) {
            console.error("Email analysis failed:", error);

            alert("Unable to analyze email.");

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <Header />

            <main className="mx-auto max-w-7xl p-8">
                <div className="grid gap-8 lg:grid-cols-2">

                    <EmailForm
                        loading={loading}
                        onAnalyze={handleAnalyzeEmail}
                    />

                    {loading ? (
                        <Loading />
                    ) : (
                        <AnalysisCard
                            data={analysis}
                        />
                    )}

                </div>
            </main>
        </div>
    );
}