import { useEffect, useState } from "react";
import {
  Search,
  Shield,
 
  Eye,
  UserCog,
  Loader2,
  Users as UsersIcon,
  AlertTriangle,
  X,
} from "lucide-react";
import { getUsers,  updateUserRole } from "../service/adminApi";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const loadUsers = async () => {
    try {
      setError("");
      const response = await getUsers();
      setUsers(response.data?.content || response.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load users. Please reload.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const changeRole = async (id, currentRole) => {
    const targetRole = currentRole === "ADMIN" ? "USER" : "ADMIN";
    if (!window.confirm(`Change user role to ${targetRole}?`)) return;
    try {
      await updateUserRole(id, targetRole);
      loadUsers();
      if (selectedUser?.id === id) {
        setSelectedUser((prev) => ({ ...prev, userRole: targetRole }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  // const remove = async (id) => {
  //   if (!window.confirm("Permanently delete this user account? This cannot be undone."))
  //     return;
  //   try {
  //     await deleteUser(id);
  //     if (selectedUser?.id === id) setSelectedUser(null);
  //     loadUsers();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#071019] py-20">
        <Loader2 size={26} className="animate-spin text-cyan-400" />
        <p className="mt-3 text-sm text-slate-500">Loading users...</p>
      </div>
    );
  }

  const filteredUsers = users.filter((u) => {
    const q = search.toLowerCase();
    return (
      (u.name || "").toLowerCase().includes(q) ||
      (u.email || "").toLowerCase().includes(q) ||
      (u.company || "").toLowerCase().includes(q) ||
      (u.userRole || "").toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-400" />
          <span className="text-[10px] tracking-[0.3em] text-cyan-400">DIRECTORY</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          Users & Access
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Manage user accounts, roles, and access permissions.
        </p>
      </div>

      {/* Toolbar */}
      <div className="rounded-2xl border border-white/[0.07] bg-[#071019] p-4">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
          />
          <input
            type="text"
            placeholder="Search by name, email, company, or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md rounded-xl border border-white/[0.08] bg-[#05080d] py-2.5 pl-9 pr-4 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400/40"
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-400">
          <AlertTriangle size={14} />
          {error}
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#071019]">
        {filteredUsers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-left text-[10px] tracking-[0.15em] text-slate-600">
                  <th className="px-6 py-4 font-medium">NAME</th>
                  <th className="px-6 py-4 font-medium">EMAIL</th>
                  <th className="px-6 py-4 font-medium">COMPANY</th>
                  <th className="px-6 py-4 font-medium">ROLE</th>
                  <th className="px-6 py-4 text-right font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u) => {
                  const isAdmin = (u.userRole || "").toUpperCase() === "ADMIN";
                  return (
                    <tr
                      key={u.id}
                      className="border-b border-white/[0.04] transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-white">
                        {u.name || "—"}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400">
                        {u.email || "—"}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400">
                        {u.company || "—"}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-[0.1em] ${
                            isAdmin
                              ? "border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400"
                              : "border-slate-500/20 bg-slate-500/[0.06] text-slate-400"
                          }`}
                        >
                          <Shield size={9} />
                          {u.userRole || "USER"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedUser(u)}
                            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#05080d] px-3 py-1.5 text-xs text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                          >
                            <Eye size={12} /> View
                          </button>
                          <button
                            onClick={() => changeRole(u.id, u.userRole)}
                            className="flex items-center gap-1.5 rounded-lg border border-amber-500/20 bg-amber-500/[0.06] px-3 py-1.5 text-xs text-amber-400 transition hover:bg-amber-500/[0.12]"
                          >
                            <UserCog size={12} /> Role
                          </button>
                          {/* <button
                            onClick={() => remove(u.id)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/[0.06] text-red-400 transition hover:bg-red-500/[0.12]"
                          >
                            <Trash2 size={12} />
                          </button> */}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] text-slate-600">
              <UsersIcon size={20} />
            </div>
            <h4 className="text-sm font-semibold">No users found</h4>
            <p className="mt-1 text-xs text-slate-500">
              Try alternate search terms or check spelling.
            </p>
          </div>
        )}
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
              <h3 className="text-lg font-semibold">User Profile</h3>
              <button
                onClick={() => setSelectedUser(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-slate-500 transition hover:text-white"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex flex-col gap-3 p-6">
              <UserRow label="Full Name" value={selectedUser.name} />
              <UserRow label="Email" value={selectedUser.email} />
              <UserRow label="Phone" value={selectedUser.phone} />
              <UserRow label="Company" value={selectedUser.company} />
              <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#05080d] px-4 py-3">
                <span className="text-[10px] tracking-[0.15em] text-slate-600">ROLE</span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-[0.1em] ${
                    (selectedUser.userRole || "").toUpperCase() === "ADMIN"
                      ? "border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400"
                      : "border-slate-500/20 bg-slate-500/[0.06] text-slate-400"
                  }`}
                >
                  <Shield size={9} />
                  {selectedUser.userRole || "USER"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const UserRow = ({ label, value }) => (
  <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#05080d] px-4 py-3">
    <span className="text-[10px] tracking-[0.15em] text-slate-600">
      {label.toUpperCase()}
    </span>
    <span className="text-sm text-slate-300">{value || "—"}</span>
  </div>
);

export default Users;