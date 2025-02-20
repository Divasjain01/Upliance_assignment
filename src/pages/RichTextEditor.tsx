
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const RichTextEditor = () => {
  const [userData, setUserData] = useState<any>(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const formatText = (command: string) => {
    document.execCommand(command, false, undefined);
  };

  return (
    <div className="container py-12">
      <div className="glass-card max-w-4xl mx-auto p-8 rounded-2xl animate-enter">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-mint-100 text-mint-600">
              Rich Text Editor
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Edit Content</h2>
          </div>

          <div className="flex flex-wrap gap-2 p-2 border-b border-gray-200">
            {["bold", "italic", "underline"].map((format) => (
              <Button
                key={format}
                onClick={() => formatText(format)}
                variant="outline"
                className="capitalize rounded-lg hover:bg-mint-50 hover:text-mint-600"
              >
                {format}
              </Button>
            ))}
          </div>

          <div
            contentEditable
            className="min-h-[200px] p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-500/20"
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
            dangerouslySetInnerHTML={{
              __html: userData
                ? Object.entries(userData)
                    .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
                    .join("")
                : "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
