import { LogOut } from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
    onLogout: () => void;
}

export default function LogoutModal({
    open,
    onClose,
    onLogout,
}: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

                <div className="mb-5 flex items-center gap-3">

                    <div className="rounded-full bg-red-100 p-3 text-red-600">
                        <LogOut size={22} />
                    </div>

                    <div>

                        <h2 className="text-xl font-semibold">
                            Logout
                        </h2>

                        <p className="text-sm text-gray-500">
                            Are you sure you want to logout?
                        </p>

                    </div>

                </div>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={onClose}
                        className="rounded-lg border px-4 py-2 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onLogout}
                        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
}