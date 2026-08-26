import { X, ExternalLink } from 'lucide-react';

interface ImagePreviewModalProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export function ImagePreviewModal({ imageUrl, title, onClose }: ImagePreviewModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160b08]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#1c2826] rounded-3xl overflow-hidden border border-[#f4eade]/20 shadow-2xl p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 bg-[#251915] rounded-t-2xl">
          <h4 className="font-['Aclonica'] text-lg text-[#f4eade]">{title}</h4>
          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#c3c8c6] hover:text-[#e67e22] rounded-lg hover:bg-[#40312d] transition-colors flex items-center gap-1 text-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir original</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-[#c3c8c6] hover:text-white rounded-lg hover:bg-[#40312d] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-b-2xl max-h-[80vh] flex items-center justify-center bg-black/40">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
