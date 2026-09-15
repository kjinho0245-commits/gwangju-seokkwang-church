interface KakaoMapProps {
  className?: string;
}

export default function KakaoMap({ className = "" }: KakaoMapProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div className="aspect-[16/9] w-full md:aspect-[21/9]">
        <iframe
          src="https://maps.google.com/maps?q=광주광역시+동구+백서로+189번길+6-3&hl=ko&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="광주새서광교회 오시는 길"
        />
      </div>
    </div>
  );
}
