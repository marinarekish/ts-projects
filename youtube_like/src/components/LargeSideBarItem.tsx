import { ElementType } from "react";
import { buttonStyles } from "../components/ButtonStyles";
import { twMerge } from "tailwind-merge";

type LargeSidebarIconProps = {
  isActive?: boolean;
  IconOrUrl: ElementType | string;
  title: string;
  url: string;
};

export function LargeSidebarItem({ IconOrUrl, title, url, isActive = false }: LargeSidebarIconProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `flex items-center rounded-lg gap-4 p-3 w-full ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      {typeof IconOrUrl === "string" ? (
        <img src={IconOrUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrUrl className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
    </a>
  );
}
