import { Book, Link, X } from "lucide-react";

export const Guide = () => {
  return (
    <div className="text-sky-900 bg-sky-100 dark:text-sky-100 dark:bg-sky-700 p-2 rounded-md flex items-center justify-between">
      <div className="space-y-1 max-w-[1200px] mx-auto">
        <div className="flex items-center">
          <Book className="h-4 w-4 mr-2" />
          <h1 className="font-bold">How to use?</h1>
        </div>
        <p className="text-sm flex items-center gap-1">
          Optimize your <span className="font-semibold">Slate</span> experience!
          Explore insights in our latest article or watch our tutorial video.
          <span className="underline font-semibold flex items-center gap-1">
            YouTube Link
            <Link className="h-[12px] w-[12px]" />
          </span>
        </p>
      </div>
    </div>
  );
};
