import { useEffect, useState } from "react";
import { Users, Calendar, Mail, Clock, Loader2 } from "lucide-react";
import StatCard from "../components/StatCard";
import { getDashboard } from "../service/adminApi";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalMeetings: 0,
    pendingMeetings: 0,
    totalContacts: 0,
  });

  useEffect(() => {
    let isMounted = true;
    async function loadDashboard() {
      setLoading(true);
      const startTime = Date.now();
      try {
        const res = await getDashboard();
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < 600) {
          await new Promise((r) => setTimeout(r, 600 - elapsedTime));
        }
        if (isMounted && res?.data) setStats(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadDashboard();
    return () => (isMounted = false);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#071019] py-20">
        <Loader2 size={28} className="animate-spin text-cyan-400" />
        <h3 className="mt-4 text-sm font-semibold">Synchronizing Analytics</h3>
        <p className="mt-1 text-xs text-slate-500">
          Compiling cross-platform telemetry...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-400" />
          <span className="text-[10px] tracking-[0.3em] text-cyan-400">
            OVERVIEW
          </span>
        </div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          Dashboard
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Users" value={stats.totalUsers} icon={<Users size={18} />} />
        <StatCard title="Meetings" value={stats.totalMeetings} icon={<Calendar size={18} />} />
        <StatCard title="Pending" value={stats.pendingMeetings} icon={<Clock size={18} />} />
        <StatCard title="Contacts" value={stats.totalContacts} icon={<Mail size={18} />} />
      </div>

      {/* Calendar section */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#071019]">
        <div className="border-b border-white/[0.06] px-6 py-4">
          <h3 className="text-base font-semibold">Meeting Schedule</h3>
          <p className="mt-0.5 text-xs text-slate-500">
            Real-time meeting coordination calendar
          </p>
        </div>
        <div className="bg-white p-2">
          <iframe
            title="Meeting Calendar"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showPrint=0&src=YWlsaHJlc2hpa2VzaEBnbWFpbC5jb20&src=ZmFtaWx5MDA0NjUwMTcwNzQ5NjEwNTkyOTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2xhc3Nyb29tMTE4MDY2NTk3NTE1NDA4MDU5MjczQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE3ODQ1Mzg4MDQ3Njc5MDY1OTk4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA3OTIxNzY0Njg2OTc0NTg2MzcyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23ef6c00&color=%23b39ddb&color=%231967d2&color=%23c26401&color=%230b8043&color=%23202124"
            className="h-[500px] w-full rounded-lg border-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;