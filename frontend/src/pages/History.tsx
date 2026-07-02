import { useEffect, useState } from "react";

import Header from "../components/Header";
import Loading from "../components/Loading";

import HistoryFilters from "../components/HistoryFilters";
import HistoryTable from "../components/HistoryTable";
import EmailDetailsModal from "../components/EmailDetailsModal";

import {
    getEmailHistory,
    getLeads,
} from "../api/email";

import type { Email } from "../types/email";

export default function History() {

    const [loading, setLoading] = useState(true);

    const [emails, setEmails] = useState<Email[]>([]);

    const [selectedEmail, setSelectedEmail] =
        useState<Email | null>(null);

    const [search, setSearch] = useState("");

    const [view, setView] =
        useState<"history" | "leads">("history");

    useEffect(() => {
        loadEmails();
    }, [view]);

    const loadEmails = async () => {

        try {

            setLoading(true);

            const data =
                view === "history"
                    ? await getEmailHistory()
                    : await getLeads();

            setEmails(data);

        } catch (error) {

            console.error(error);

            alert("Unable to load emails.");

        } finally {

            setLoading(false);

        }

    };

    const filteredEmails = emails.filter((email) =>

        (email.sender ?? "")
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        (email.subject ?? "")
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <div className="min-h-screen bg-slate-100">

            <Header />

            <main className="mx-auto max-w-7xl p-8">

                <h1 className="mb-6 text-3xl font-bold">

                    Email History

                </h1>

                <HistoryFilters
                    search={search}
                    setSearch={setSearch}
                    view={view}
                    setView={setView}
                />

                {loading ? (

                    <Loading />

                ) : (

                    <HistoryTable
                        emails={filteredEmails}
                        onView={setSelectedEmail}
                    />

                )}

            </main>

            <EmailDetailsModal
                email={selectedEmail}
                onClose={() => setSelectedEmail(null)}
            />

        </div>

    );

}