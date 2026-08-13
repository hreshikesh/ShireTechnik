import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  FileText,
  Loader2,
  AlertCircle,
} from "lucide-react";
import DownloadFormModal from "../downloadFormModal/DownloadFormModal";

export default function PdfViewerModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  user = null,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showDownloadForm, setShowDownloadForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [isOpen, pdfUrl]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !showDownloadForm) onClose?.();
    };
    document.addEventListener("keydown", handleKeyDown);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = original;
    };
  }, [isOpen, onClose, showDownloadForm]);

  return (
    <>
      <AnimatePresence>
        {isOpen && pdfUrl && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-modal-title"
          >
            <motion.div
              className="relative flex h-full max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071019] shadow-2xl"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.06] bg-[#05080d] px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                    <FileText size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[0.2em] text-slate-600">
                      DOCUMENT PREVIEW
                    </p>
                    <h3
                      id="pdf-modal-title"
                      className="truncate text-sm font-semibold text-white sm:text-base"
                      title={title || "Document Preview"}
                    >
                      {title || "Document Preview"}
                    </h3>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowDownloadForm(true)}
                    aria-label="Download PDF"
                    className="group flex items-center gap-2 rounded-xl bg-cyan-400 px-3 py-2 text-xs font-medium text-[#05080d] transition hover:bg-cyan-300 sm:px-4 sm:text-sm"
                  >
                    <Download size={14} />
                    <span className="hidden sm:inline">Download PDF</span>
                    <span className="sm:hidden">Download</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close document modal"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] text-slate-400 transition hover:border-red-500/30 hover:text-red-400"
                  >
                    <X size={17} />
                  </button>
                </div>
              </header>

              {/* Body */}
              <div className="relative flex-1 overflow-hidden bg-[#05080d]">
                {isLoading && !hasError && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#05080d]">
                    <Loader2 size={30} className="animate-spin text-cyan-400" />
                    <p className="text-sm text-slate-500">Loading document...</p>
                  </div>
                )}

                {hasError ? (
                  <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] text-amber-400">
                      <AlertCircle size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        Preview unavailable
                      </h4>
                      <p className="mt-1 max-w-sm text-sm text-slate-500">
                        Unable to display the PDF preview here. You can download it
                        instead.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowDownloadForm(true)}
                      className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-[#05080d] transition hover:bg-cyan-300"
                    >
                      <Download size={14} />
                      Download Document
                    </button>
                  </div>
                ) : (
                  <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    title={title || "PDF Document Viewer"}
                    className={`h-full w-full transition-opacity duration-300 ${
                      isLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                      setIsLoading(false);
                      setHasError(true);
                    }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download form on top */}
      <DownloadFormModal
        isOpen={showDownloadForm}
        onClose={() => setShowDownloadForm(false)}
        pdfUrl={pdfUrl}
        title={title}
        user={user}
      />
    </>
  );
}