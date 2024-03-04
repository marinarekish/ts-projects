import { ElementType } from "react";
import { buttonStyles } from "../components/ButtonStyles";
import { twMerge } from "tailwind-merge";

type SmallSidebarIconProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

export function SmallSidebarIcon({ Icon, title, url }: SmallSidebarIconProps) {
  return (
    <a
      href={url}
      className={twMerge(buttonStyles({ variant: "ghost" }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}
    >
      <Icon className="w-6 h-6" />
      <div className="text-xs">{title}</div>
    </a>
  );
}
