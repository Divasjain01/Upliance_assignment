
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgIntensity, setBgIntensity] = useState(0);

  useEffect(() => {
    const intensity = Math.min(Math.abs(count) * 2, 100);
    setBgIntensity(intensity);
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => {
    setCount(0);
    setBgIntensity(0);
  };

  return (
    <div
      className="counter-container flex items-center justify-center"
      style={{
        backgroundColor: `rgba(55, 178, 77, ${bgIntensity / 100})`,
      }}
    >
      <div className="glass-card p-8 rounded-2xl w-full max-w-md mx-4 animate-enter">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-mint-100 text-mint-600">
              Counter
            </span>
            <h2 className="text-4xl font-bold text-gray-900">{count}</h2>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={decrement}
              variant="outline"
              className="w-12 h-12 rounded-xl hover:bg-mint-50 hover:text-mint-600 transition-all duration-200"
            >
              -
            </Button>
            <Button
              onClick={reset}
              variant="outline"
              className="px-6 h-12 rounded-xl hover:bg-mint-50 hover:text-mint-600 transition-all duration-200"
            >
              Reset
            </Button>
            <Button
              onClick={increment}
              variant="outline"
              className="w-12 h-12 rounded-xl hover:bg-mint-50 hover:text-mint-600 transition-all duration-200"
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
