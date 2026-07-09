import ScrapbookFrame from "@/components/ScrapbookFrame";
import FloatingDecorations from "@/components/FloatingDecorations";
import Envelope from "@/components/Envelope";
import { letters } from "@/data/letters";

export default function LettersPage() {
  return (
    <ScrapbookFrame tint="blush">
      <FloatingDecorations density="low" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <h1 className="mb-2 text-center font-display text-5xl text-inkdark sm:text-6xl">
          Open When Letters 💌
        </h1>
        <p className="mb-10 text-center font-hand text-base text-ink">
          for the days you need a little piece of me nearby
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {letters.map((letter) => (
            <Envelope key={letter.id} letter={letter} />
          ))}
        </div>
      </div>
    </ScrapbookFrame>
  );
}
