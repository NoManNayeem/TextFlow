import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

function SkeletonText({ lines = 3, className, ...props }) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

function SkeletonCard({ className, ...props }) {
  return (
    <div className={cn("rounded-lg border p-4", className)} {...props}>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}

function SkeletonButton({ className, ...props }) {
  return (
    <Skeleton className={cn("h-10 w-24 rounded-md", className)} {...props} />
  );
}

function SkeletonInput({ className, ...props }) {
  return (
    <Skeleton className={cn("h-10 w-full rounded-md", className)} {...props} />
  );
}

function SkeletonAvatar({ size = "md", className, ...props }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  return (
    <Skeleton
      className={cn("rounded-full", sizeClasses[size], className)}
      {...props}
    />
  );
}

export {
  Skeleton,
  SkeletonText,
  SkeletonCard,
  SkeletonButton,
  SkeletonInput,
  SkeletonAvatar
};
