import { cn } from "@/lib/utils";
import { RingLoader } from "react-spinners";

function PageLoader({ isLoading }) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 w-screen bg-black transition-all duration-8000",
        isLoading ? "h-screen opacity-100" : "h-0 opacity-0",
      )}
    >
      <div className="flex h-full w-full items-center justify-center">
        <RingLoader color="#5542FF" size={200} />
      </div>
    </div>
  );
}

export default PageLoader;
