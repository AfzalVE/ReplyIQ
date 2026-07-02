import type { Email } from "../types/email";

interface Props {
    emails: Email[];
    onView: (email: Email) => void;
}

export default function HistoryTable({
    emails,
    onView,
}: Props) {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="p-4 text-left">Sender</th>

                        <th className="p-4 text-left">Subject</th>

                        <th className="p-4 text-center">Score</th>

                        <th className="p-4 text-center">Status</th>

                        <th className="p-4 text-center">Stage</th>

                        <th className="p-4 text-center">Sentiment</th>

                        <th className="p-4 text-center">Date</th>

                        <th className="p-4 text-center">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {emails.map((email) => (

                        <tr
                            key={email.id}
                            className="border-t hover:bg-slate-50"
                        >

                            <td className="p-4">
                                {email.sender || "-"}
                            </td>

                            <td className="max-w-sm truncate p-4">
                                {email.subject || "-"}
                            </td>

                            <td className="text-center font-semibold">
                                {email.lead_score}
                            </td>

                            <td className="text-center">
                                {email.lead_status}
                            </td>

                            <td className="text-center">
                                {email.lead_stage}
                            </td>

                            <td className="text-center">
                                {email.sentiment}
                            </td>

                            <td className="text-center">
                                {new Date(email.created_at).toLocaleDateString()}
                            </td>

                            <td className="text-center">

                                <button
                                    onClick={() => onView(email)}
                                    className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                                >
                                    View
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}