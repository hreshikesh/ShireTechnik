import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function DateSelector({ selectedDate, setSelectedDate }) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return (
    <div>
      {/* Section title */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-400" />
          <span className="text-[10px] font-medium tracking-[0.3em] text-cyan-400">
            STEP 1
          </span>
        </div>
        <h3 className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">
          Select a Date
        </h3>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          Choose your preferred meeting date. Weekends unavailable.
        </p>
      </div>

      {/* Calendar wrapper */}
      <div className="rounded-2xl border border-white/[0.07] bg-[#071019] p-4 sm:p-5">
        <style>{`
          .shire-daypicker .rdp-months {
            justify-content: center;
          }
          .shire-daypicker .rdp-month {
            width: 100%;
          }
          .shire-daypicker .rdp-table {
            width: 100%;
            max-width: 100%;
          }
          .shire-daypicker .rdp-caption {
            padding: 0 0 12px 0;
            color: #fff;
          }
          .shire-daypicker .rdp-caption_label {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.01em;
            color: #fff;
          }
          .shire-daypicker .rdp-nav_button {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            color: #94a3b8;
            transition: all 0.2s;
          }
          .shire-daypicker .rdp-nav_button:hover:not([disabled]) {
            background: rgba(34, 211, 238, 0.08);
            color: #22d3ee;
          }
          .shire-daypicker .rdp-head_cell {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.15em;
            color: #475569;
            text-transform: uppercase;
            padding: 8px 0;
          }
          .shire-daypicker .rdp-cell {
            padding: 2px;
          }
          .shire-daypicker .rdp-day {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 500;
            color: #cbd5e1;
            transition: all 0.2s;
          }
          .shire-daypicker .rdp-day:hover:not([disabled]) {
            background: rgba(34, 211, 238, 0.08);
            color: #22d3ee;
          }
          .shire-daypicker .rdp-day_selected,
          .shire-daypicker .rdp-day_selected:hover {
            background: #22d3ee !important;
            color: #05080d !important;
            font-weight: 700;
          }
          .shire-daypicker .rdp-day_today:not(.rdp-day_selected) {
            color: #22d3ee;
            font-weight: 700;
            background: rgba(34, 211, 238, 0.06);
          }
          .shire-daypicker .rdp-day_disabled {
            color: #334155;
            opacity: 0.5;
            cursor: not-allowed;
          }
          .shire-daypicker .rdp-day_outside {
            color: #334155;
            opacity: 0.4;
          }
        `}</style>

        <div className="shire-daypicker">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              if (date) setSelectedDate(date);
            }}
            disabled={[{ before: tomorrow }, { dayOfWeek: [0, 6] }]}
            showOutsideDays
          />
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-slate-600">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded bg-cyan-400" />
          Selected
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded border border-cyan-400/30 bg-cyan-400/[0.06]" />
          Today
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded bg-slate-700 opacity-50" />
          Unavailable
        </span>
      </div>
    </div>
  );
}

export default DateSelector;