import { useState } from "react";

interface Props {
  onAnalyze: (data: {
    sender: string;
    subject: string;
    email: string;
  }) => void;

  loading: boolean;
}

export default function EmailForm({
  onAnalyze,
  loading,
}: Props) {
  const [sender, setSender] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    onAnalyze({
      sender,
      subject,
      email,
    });
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">
        Analyze Email
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block text-sm font-medium">
            Sender
          </label>

          <input
            value={sender}
            onChange={(e) =>
              setSender(e.target.value)
            }
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Subject
          </label>

          <input
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Enterprise Pricing"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <textarea
            rows={12}
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Paste the complete email here..."
          />
        </div>

        <button
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading
            ? "Analyzing..."
            : "Analyze Email"}
        </button>
      </form>
    </div>
  );
}