import {
  Brain,
  MessageSquare,
  Smile,
  Folder,
  Target,
  TrendingUp,
  Flame,
} from "lucide-react";

interface Analysis {
  smart_reply: string;
  sentiment: string;
  category: string;
  lead_status: string;
  lead_score: number;
  lead_stage: string;
}

interface Props {
  data: Analysis | null;
}

export default function AnalysisCard({
  data,
}: Props) {
  if (!data) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border-2 border-dashed bg-white p-10 text-center text-gray-500">
        <div>
          <Brain
            className="mx-auto mb-4"
            size={45}
          />

          <h2 className="text-xl font-semibold">
            AI Analysis
          </h2>

          <p className="mt-2">
            Submit an email to generate AI
            insights.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-white p-6 shadow">
        <div className="mb-3 flex items-center gap-2">
          <MessageSquare className="text-blue-600" />
          <h2 className="font-semibold">
            Smart Reply
          </h2>
        </div>

        <p className="whitespace-pre-wrap text-gray-700">
          {data.smart_reply}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl bg-white p-5 shadow">
          <div className="mb-2 flex items-center gap-2">
            <Smile className="text-green-600" />
            <span className="font-semibold">
              Sentiment
            </span>
          </div>

          <p className="text-lg">
            {data.sentiment}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <div className="mb-2 flex items-center gap-2">
            <Folder className="text-orange-500" />
            <span className="font-semibold">
              Category
            </span>
          </div>

          <p className="text-lg">
            {data.category}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <div className="mb-2 flex items-center gap-2">
            <Target className="text-blue-600" />
            <span className="font-semibold">
              Lead Status
            </span>
          </div>

          <p
            className={`text-lg font-bold ${
              data.lead_status === "Yes"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {data.lead_status}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="text-purple-600" />
            <span className="font-semibold">
              Lead Score
            </span>
          </div>

          <div className="mb-3 h-3 w-full rounded-full bg-gray-200">
            <div
              className="h-3 rounded-full bg-blue-600"
              style={{
                width: `${data.lead_score}%`,
              }}
            />
          </div>

          <p className="font-semibold">
            {data.lead_score}/100
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-5 shadow">
        <div className="mb-2 flex items-center gap-2">
          <Flame className="text-red-500" />
          <span className="font-semibold">
            Lead Stage
          </span>
        </div>

        <p className="text-2xl font-bold text-red-500">
          {data.lead_stage}
        </p>
      </div>
    </div>
  );
}