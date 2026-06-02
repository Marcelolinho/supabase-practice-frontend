import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ActionCardProps = {
  icon: LucideIcon;
  iconCircleClassName: string;
  iconClassName: string;
  title: string;
  children: ReactNode;
};

export default function ActionCard({
  icon: Icon,
  iconCircleClassName,
  iconClassName,
  title,
  children,
}: ActionCardProps) {
  return (
    <section className="w-full rounded-2xl border border-white/40 bg-white/40 p-6 shadow-xl backdrop-blur-md sm:p-7">
      <header className="mb-5 flex items-center gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconCircleClassName}`}
        >
          <Icon className={`h-5 w-5 ${iconClassName}`} aria-hidden="true" />
        </span>
        <h2 className="text-lg font-bold text-neutral-900">{title}</h2>
      </header>

      {children}
    </section>
  );
}
