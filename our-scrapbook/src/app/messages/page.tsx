import ScrapbookFrame from "@/components/ScrapbookFrame";
import FloatingDecorations from "@/components/FloatingDecorations";
import PostcardMessage from "@/components/PostcardMessage";
import { lovedMessages } from "@/data/messages";

export default function MessagesPage() {
  return (
    <ScrapbookFrame tint="sage">
      <FloatingDecorations density="low" />
      <div
        className="relative z-10 mx-auto max-w-6xl rounded-3xl border-4 border-[#c9a878] p-6 sm:p-10"
        style={{ backgroundColor: "#e3c99f" }}
      >
        <h1 className="mb-2 text-center font-display text-5xl text-inkdark sm:text-6xl">
          Messages From Loved Ones ❤️
        </h1>
        <p className="mb-10 text-center font-hand text-base text-inkdark/80">
          everyone who loves you wanted in on the surprise
        </p>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {lovedMessages.map((message) => (
            <PostcardMessage key={message.id} message={message} />
          ))}
        </div>
      </div>
    </ScrapbookFrame>
  );
}
