import { X, ExternalLink } from 'lucide-react';

interface ImagePreviewModalProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export function ImagePreviewModal({ imageUrl, title, onClose }: ImagePreviewModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c2826]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-[#1c2826]/10 shadow-2xl p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 bg-[#faf6f0] rounded-t-2xl">
          <h4 className="font-['Aclonica'] text-lg text-[#1c2826]">{title}</h4>
          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#536360] hover:text-[#e67e22] rounded-xl hover:bg-[#f4eade] transition-colors flex items-center gap-1 text-xs font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir original</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-[#536360] hover:text-[#1c2826] rounded-xl hover:bg-[#f4eade] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-b-2xl max-h-[80vh] flex items-center justify-center bg-[#fdfbf7] p-2">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
