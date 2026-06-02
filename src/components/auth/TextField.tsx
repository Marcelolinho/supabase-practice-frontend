import type { InputHTMLAttributes } from "react";

type TextFieldProps = {
  id: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextField({ id, label, ...inputProps }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-neutral-800">
        {label}
      </label>
      <input
        id={id}
        className="h-11 w-full rounded-xl border border-neutral-300 bg-white/80 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-300/60"
        {...inputProps}
      />
    </div>
  );
}
