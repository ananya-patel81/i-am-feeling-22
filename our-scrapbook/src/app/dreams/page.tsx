"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrapbookFrame from "@/components/ScrapbookFrame";
import FloatingDecorations from "@/components/FloatingDecorations";
import DreamCard from "@/components/DreamCard";
import { Dream, initialDreams } from "@/data/dreams";
import { useLocalStorage } from "@/lib/useLocalStorage";

let tempId = 0;

export default function DreamsPage() {
  const [dreams, setDreams, hydrated] = useLocalStorage<Dream[]>("ourDreams", initialDreams);
  const [showForm, setShowForm] = useState(false);
  const [newDream, setNewDream] = useState({ title: "", description: "" });

  const active = dreams.filter((d) => d.status !== "Completed");
  const completed = dreams.filter((d) => d.status === "Completed");

  const updateDream = (updated: Dream) => {
    setDreams((prev) => prev.map((d) => (d.id === updated.id ? updated : d)));
  };

  const deleteDream = (id: string) => {
    setDreams((prev) => prev.filter((d) => d.id !== id));
  };

  const addDream = () => {
    if (!newDream.title.trim()) return;
    const dream: Dream = {
      id: `custom-${Date.now()}-${tempId++}`,
      title: newDream.title,
      description: newDream.description,
      status: "Not Started",
    };
    setDreams((prev) => [dream, ...prev]);
    setNewDream({ title: "", description: "" });
    setShowForm(false);
  };

  if (!hydrated) {
    return (
      <ScrapbookFrame tint="beige">
        <p className="text-center font-hand text-ink">loading our dreams…</p>
      </ScrapbookFrame>
    );
  }

  return (
    <ScrapbookFrame tint="beige">
      <FloatingDecorations density="low" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="mb-2 text-center font-display text-5xl text-inkdark sm:text-6xl">Future Dreams 📅</h1>
        <p className="mb-8 text-center font-hand text-base text-ink">
          our shared bucket list — add to it whenever inspiration strikes
        </p>

        <div className="mb-8 flex justify-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="cursor-interactive rounded-full bg-sunflower px-6 py-2 font-body text-sm text-inkdark shadow-soft"
          >
            {showForm ? "Cancel" : "+ Add a new dream"}
          </button>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mx-auto mb-10 max-w-md overflow-hidden rounded-2xl border-2 border-dashed border-beige bg-cream p-4 shadow-soft"
            >
              <input
                className="mb-2 w-full rounded border border-beige bg-white px-3 py-2 font-hand text-sm"
                placeholder="What's the dream?"
                value={newDream.title}
                onChange={(e) => setNewDream({ ...newDream, title: e.target.value })}
              />
              <textarea
                className="mb-3 w-full rounded border border-beige bg-white px-3 py-2 font-hand text-sm"
                placeholder="A little more detail..."
                rows={2}
                value={newDream.description}
                onChange={(e) => setNewDream({ ...newDream, description: e.target.value })}
              />
              <button
                onClick={addDream}
                className="cursor-interactive w-full rounded-full bg-sage px-4 py-2 font-body text-sm text-inkdark"
              >
                Add to our list
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <h2 className="mb-4 font-display text-3xl text-inkdark">Still Ahead</h2>
        <motion.div layout className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {active.map((dream) => (
              <DreamCard key={dream.id} dream={dream} onUpdate={updateDream} onDelete={deleteDream} />
            ))}
          </AnimatePresence>
          {active.length === 0 && (
            <p className="col-span-full text-center font-hand text-ink/60">
              nothing here yet — add your first dream above
            </p>
          )}
        </motion.div>

        {completed.length > 0 && (
          <>
            <h2 className="mb-4 font-display text-3xl text-inkdark">Memories We&apos;ve Made</h2>
            <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {completed.map((dream) => (
                  <DreamCard key={dream.id} dream={dream} onUpdate={updateDream} onDelete={deleteDream} />
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </ScrapbookFrame>
  );
}
