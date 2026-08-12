import { useEffect, useState } from "react";
import { Clock, Calendar, AlertCircle } from "lucide-react";
import { getAvailableSlots } from "../../service/meetingApi";

function formatTime(time) {
  return new Date(`1970-01-01T${time}`)
    .toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
}

function TimeSlots({
  selectedDate,
  selectedSlot,
  setSelectedSlot,
  refreshTrigger,
}) {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSlots() {
      setLoading(true);
      try {
        const data = await getAvailableSlots(selectedDate);
        setSlots(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (selectedDate) {
      loadSlots();
    }
  }, [selectedDate, refreshTrigger]);

  if (!selectedDate) {
    return (
      <section className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#071019] px-6 py-12 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] bg-[#05080d] text-slate-600">
          <Calendar size={22} />
        </div>
        <p className="text-sm text-slate-500">
          Please select a date to see available slots.
        </p>
      </section>
    );
  }

  return (
    <section>
      {/* Selected date badge */}
      <div className="mb-5 flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2.5">
        <Calendar size={14} className="text-cyan-400" />
        <span className="text-xs font-medium text-cyan-400 sm:text-sm">
          {selectedDate.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Section title */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-400" />
          <span className="text-[10px] font-medium tracking-[0.3em] text-cyan-400">
            STEP 2 — AVAILABLE SLOTS
          </span>
        </div>
        <h3 className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">
          Select a convenient time for your meeting
        </h3>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="h-14 animate-pulse rounded-xl border border-white/[0.06] bg-white/[0.02]"
            />
          ))}
        </div>
      ) : slots.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot) => {
            const isActive = selectedSlot?.startTime === slot.startTime;
            const isDisabled = !slot.available;

            return (
              <button
                key={slot.startTime}
                type="button"
                disabled={isDisabled}
                onClick={() => slot.available && setSelectedSlot(slot)}
                className={`group relative flex items-center justify-center overflow-hidden rounded-xl border px-4 py-4 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-cyan-400 bg-cyan-400 text-[#05080d] shadow-lg shadow-cyan-400/25"
                    : isDisabled
                    ? "cursor-not-allowed border-white/[0.04] bg-white/[0.01] text-slate-700 line-through"
                    : "border-white/[0.1] bg-[#05080d] text-slate-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] hover:text-cyan-400"
                }`}
              >
                {/* Hover glow */}
                {!isActive && !isDisabled && (
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/[0.06] to-transparent" />
                  </span>
                )}

                <span className="relative z-10 whitespace-nowrap">
                  {formatTime(slot.startTime)} – {formatTime(slot.endTime)}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute right-3 top-1/2 flex h-1.5 w-1.5 -translate-y-1/2 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#05080d] opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#05080d]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#05080d] py-12 text-center">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] text-slate-600">
            <AlertCircle size={18} />
          </div>
          <p className="text-sm text-slate-500">
            No slots available for this date.
          </p>
        </div>
      )}
    </section>
  );
}

export default TimeSlots;