import type { Email } from "../types/email";

interface Props {
    email: Email | null;
    onClose: () => void;
}

export default function EmailDetailsModal({
    email,
    onClose,
}: Props) {
    if (!email) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">

            <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white p-8">

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl font-bold">
                        Email Details
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded bg-red-500 px-4 py-2 text-white"
                    >
                        Close
                    </button>

                </div>

                <div className="space-y-6">

                    <div>

                        <h3 className="font-semibold">Sender</h3>

                        <p>{email.sender}</p>

                    </div>

                    <div>

                        <h3 className="font-semibold">Subject</h3>

                        <p>{email.subject}</p>

                    </div>

                    <div>

                        <h3 className="font-semibold">Original Email</h3>

                        <p className="whitespace-pre-wrap">
                            {email.email_body}
                        </p>

                    </div>

                    <div>

                        <h3 className="font-semibold">AI Reply</h3>

                        <p className="whitespace-pre-wrap">
                            {email.smart_reply}
                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <p><b>Category:</b> {email.category}</p>

                        <p><b>Sentiment:</b> {email.sentiment}</p>

                        <p><b>Lead Status:</b> {email.lead_status}</p>

                        <p><b>Lead Score:</b> {email.lead_score}</p>

                        <p><b>Lead Stage:</b> {email.lead_stage}</p>

                    </div>

                </div>

            </div>

        </div>
    );
}