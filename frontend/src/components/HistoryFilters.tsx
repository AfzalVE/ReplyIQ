import type { Dispatch, SetStateAction } from "react";

interface Props {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;

    view: "history" | "leads";
    setView: Dispatch<SetStateAction<"history" | "leads">>;
}

export default function HistoryFilters({
    search,
    setSearch,
    view,
    setView,
}: Props) {
    return (
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="flex gap-2">

                <button
                    onClick={() => setView("history")}
                    className={`rounded-lg px-4 py-2 transition ${
                        view === "history"
                            ? "bg-blue-600 text-white"
                            : "bg-white border"
                    }`}
                >
                    All Emails
                </button>

                <button
                    onClick={() => setView("leads")}
                    className={`rounded-lg px-4 py-2 transition ${
                        view === "leads"
                            ? "bg-blue-600 text-white"
                            : "bg-white border"
                    }`}
                >
                    Leads
                </button>

            </div>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search sender or subject..."
                className="w-full rounded-lg border p-3 md:w-80"
            />

        </div>
    );
}