import { Instagram, Facebook, Youtube } from "lucide-react"
import Image from "next/image"

// TikTok icon component
const TikTok = ({ className, ...props }: { className?: string; [key: string]: any }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    {...props}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function ComingSoonPage() {
  const socialLinks = {
    instagram: "https://www.instagram.com/theemergencyexitpodcast?igsh=M2IzaGI3eHMxbmNx",
    facebook: "https://www.facebook.com/profile.php?id=61583977717209",
    youtube: "https://youtube.com/@theemergencyexitpodcast?si=KUGilntY_QfLIkbh",
    tiktok: "https://www.tiktok.com/@theemergencyexitpodcast?_r=1&_t=ZS-93aLHkbeiov",
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] flex flex-col">
      {/* Main content - centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        
        {/* Logo */}
        <Image
          src="/mainlogo.svg"
          alt="The Emergency Exit Podcast"
          width={360}
          height={140}
          priority
          className="w-auto h-auto max-w-[260px] md:max-w-[340px] mb-4"
        />

        {/* Coming Soon */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-[40px]">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-center text-[var(--text-muted)] max-w-md leading-relaxed">
          A light-hearted but sharp-minded podcast exploring novels, stories, movies, and poetry.
        </p>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 mb-6">
          <a 
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a 
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors"
            aria-label="TikTok"
          >
            <TikTok className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-[var(--text-muted)]">
          © 2026 The Emergency Exit Podcast
        </p>
      </footer>
    </main>
  )
}
