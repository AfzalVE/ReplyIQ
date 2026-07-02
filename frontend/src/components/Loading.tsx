import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border bg-white p-10 shadow-sm">
      <LoaderCircle
        size={40}
        className="animate-spin text-blue-600"
      />

      <h2 className="mt-5 text-xl font-semibold">
        Analyzing Email...
      </h2>

      <p className="mt-2 text-center text-gray-500">
        AI is generating a smart reply, detecting
        sentiment, categorizing the email, and
        evaluating lead quality.
      </p>
    </div>
  );
}