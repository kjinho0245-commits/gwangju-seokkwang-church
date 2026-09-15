interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  className = "",
}: YouTubeEmbedProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-[#2C2416]/5 ${className}`}
    >
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
