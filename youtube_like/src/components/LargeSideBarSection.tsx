import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, Children, useState } from "react";
import { Button } from "../components/Button";

type LargeSideBarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

export function LargeSideBarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSideBarSectionProps) {
  // state to show more
  const [isExpanded, setIsExpanded] = useState(false);

  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount);

  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="flex items-center rounded-lg gap-4 p-3 w-full"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show less" : "Show more"}</div>
        </Button>
      )}
    </div>
  );
}
