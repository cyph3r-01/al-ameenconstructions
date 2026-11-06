import { useRef, useState } from 'react'
import { FiPlay, FiX } from 'react-icons/fi'

export default function VideoButton({ src, title, className = '' }) {
  const dialogRef = useRef(null)
  const [open, setOpen] = useState(false)
  if (!src) return null

  const show = () => { setOpen(true); dialogRef.current?.showModal() }
  const close = () => { dialogRef.current?.close(); setOpen(false) }

  return (
    <>
      <button type="button" onClick={show} className={`btn btn-secondary gap-2 ${className}`}>
        <FiPlay aria-hidden="true" /> Watch video
      </button>
      <dialog
        ref={dialogRef}
        className="video-dialog"
        aria-label={`Video: ${title}`}
        onClose={() => setOpen(false)}
        onClick={(e) => { if (e.target === dialogRef.current) close() }}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 text-white">
          <p className="font-display text-xl font-bold">{title}</p>
          <button type="button" onClick={close} aria-label="Close video" className="p-2 text-white">
            <FiX size={24} aria-hidden="true" />
          </button>
        </div>
        {open && <video src={src} controls autoPlay playsInline preload="metadata" className="w-full max-h-[75vh] bg-black" />}
      </dialog>
    </>
  )
}
