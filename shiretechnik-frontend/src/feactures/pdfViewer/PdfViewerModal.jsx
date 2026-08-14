import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  FileText,
  Loader2,
  AlertCircle,
  ExternalLink,
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

  /*
   * Reset state every time a document changes.
   */
  useEffect(() => {
    if (!isOpen) return;

    setIsLoading(true);
    setHasError(false);
    setShowDownloadForm(false);

    console.log("PDF URL:", pdfUrl);
  }, [isOpen, pdfUrl]);

  /*
   * Lock background scrolling while modal is open.
   */
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /*
   * Escape key handler.
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !showDownloadForm) {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, showDownloadForm, onClose]);

  if (!isOpen || !pdfUrl) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="pdf-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-2 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-modal-title"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#05080d] shadow-2xl sm:h-[92vh] sm:rounded-2xl"
            >
              {/* Header */}
              <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.07] bg-[#071019] px-3 py-3 sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                    <FileText size={16} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-400/60 sm:text-[9px]">
                      DOCUMENT PREVIEW
                    </p>

                    <h3
                      id="pdf-modal-title"
                      title={title}
                      className="max-w-[150px] truncate text-xs font-semibold text-white sm:max-w-sm sm:text-sm md:max-w-lg"
                    >
                      {title || "Document Preview"}
                    </h3>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                

                  {/* Gated download */}
                  <button
                    type="button"
                    onClick={() => setShowDownloadForm(true)}
                    className="flex h-9 items-center gap-2 rounded-lg bg-cyan-400 px-3 text-xs font-medium text-[#05080d] transition hover:bg-cyan-300 sm:px-4"
                  >
                    <Download size={14} />

                    <span className="hidden sm:inline">
                      Download PDF
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close PDF viewer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition hover:border-red-400/30 hover:bg-red-400/[0.06] hover:text-red-400"
                  >
                    <X size={17} />
                  </button>
                </div>
              </header>

              {/* Viewer */}
              <div className="relative min-h-0 flex-1 bg-[#111]">
                {isLoading && !hasError && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#05080d]">
                    <Loader2
                      size={28}
                      className="animate-spin text-cyan-400"
                    />

                    <p className="mt-3 text-xs text-slate-500">
                      Loading document...
                    </p>
                  </div>
                )}

                {hasError ? (
                  <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] text-amber-400">
                      <AlertCircle size={24} />
                    </div>

                    <h4 className="mt-5 font-semibold text-white">
                      Preview unavailable
                    </h4>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      Your browser couldn't display this PDF inside the
                      application.
                    </p>

                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    

                      <button
                        onClick={() => setShowDownloadForm(true)}
                        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-[#05080d]"
                      >
                        <Download size={14} />
                        Download
                      </button>
                    </div>
                  </div>
                ) : (
                  <iframe
                    key={pdfUrl}

                     src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    title={title || "PDF document"}
                    className={`absolute inset-0 h-full w-full border-0 ${
                      isLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => {
                      setIsLoading(false);
                    }}
                    onError={() => {
                      setIsLoading(false);
                      setHasError(true);
                    }}
                  />
                )}
              </div>

              {/* Footer */}
              <footer className="flex shrink-0 items-center justify-between border-t border-white/[0.06] bg-[#071019] px-4 py-2">
                <span className="font-mono text-[8px] tracking-[0.2em] text-slate-700">
                  SHIRETECHNIK / DOCUMENT VIEWER
                </span>

                <span className="flex items-center gap-1.5 font-mono text-[8px] text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  PDF
                </span>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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