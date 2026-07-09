"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dream, DreamStatus } from "@/data/dreams";

const statusStyles: Record<DreamStatus, string> = {
  "Not Started": "bg-beige text-inkdark/70",
  Planned: "bg-babyblue text-inkdark",
  "In Progress": "bg-sunflower text-inkdark",
  Completed: "bg-sage text-inkdark",
};

const statuses: DreamStatus[] = ["Not Started", "Planned", "In Progress", "Completed"];

export default function DreamCard({
  dream,
  onUpdate,
  onDelete,
}: {
  dream: Dream;
  onUpdate: (dream: Dream) => void;
  onDelete: (id: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(dream);
  const justCompleted = dream.status === "Completed";

  const save = () => {
    onUpdate(draft);
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-beige bg-cream p-4 shadow-soft">
        <input
          className="mb-2 w-full rounded border border-beige bg-white px-2 py-1 font-hand text-sm"
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          placeholder="Dream title"
        />
        <textarea
          className="mb-2 w-full rounded border border-beige bg-white px-2 py-1 font-hand text-sm"
          value={draft.description}
          onChange={(e) => setDraft({ ...draft, description: e.target.value })}
          placeholder="Description"
          rows={2}
        />
        <select
          className="mb-2 w-full rounded border border-beige bg-white px-2 py-1 font-hand text-sm"
          value={draft.status}
          onChange={(e) => setDraft({ ...draft, status: e.target.value as DreamStatus })}
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          type="date"
          className="mb-2 w-full rounded border border-beige bg-white px-2 py-1 font-hand text-sm"
          value={draft.targetDate ?? ""}
          onChange={(e) => setDraft({ ...draft, targetDate: e.target.value })}
        />
        <input
          className="mb-2 w-full rounded border border-beige bg-white px-2 py-1 font-hand text-sm"
          value={draft.link ?? ""}
          onChange={(e) => setDraft({ ...draft, link: e.target.value })}
          placeholder="Link (optional)"
        />
        <textarea
          className="mb-3 w-full rounded border border-beige bg-white px-2 py-1 font-hand text-sm"
          value={draft.notes ?? ""}
          onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
          placeholder="Notes (optional)"
          rows={2}
        />
        <div className="flex gap-2">
          <button
            onClick={save}
            className="cursor-interactive rounded-full bg-sage px-4 py-1 font-body text-sm text-inkdark"
          >
            Save
          </button>
          <button
            onClick={() => {
              setDraft(dream);
              setEditing(false);
            }}
            className="cursor-interactive rounded-full bg-beige px-4 py-1 font-body text-sm text-inkdark"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="relative overflow-hidden rounded-2xl border-2 border-beige bg-cream p-4 shadow-soft"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <AnimatePresence>
        {justCompleted && (
          <motion.div
            initial={{ scale: 2, opacity: 0, rotate: -25 }}
            animate={{ scale: 1, opacity: 1, rotate: -12 }}
            className="pointer-events-none absolute right-3 top-3 rounded border-2 border-sagedark px-2 py-1 font-display text-sm text-sagedark"
          >
            Done Together ❤️
          </motion.div>
        )}
      </AnimatePresence>

      {dream.image && (
        <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg">
          <Image src={dream.image} alt={dream.title} fill className="object-cover" sizes="300px" />
        </div>
      )}

      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="font-display text-xl text-inkdark">{dream.title}</h3>
        <span className={`shrink-0 rounded-full px-2 py-0.5 font-hand text-xs ${statusStyles[dream.status]}`}>
          {dream.status}
        </span>
      </div>
      <p className="mb-2 font-hand text-sm text-ink">{dream.description}</p>
      {dream.targetDate && (
        <p className="font-hand text-xs text-inkdark/50">🎯 Target: {dream.targetDate}</p>
      )}
      {dream.notes && <p className="font-hand text-xs italic text-inkdark/50">📝 {dream.notes}</p>}
      {dream.link && (
        <a
          href={dream.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-interactive font-hand text-xs text-babybluedark underline"
        >
          🔗 learn more
        </a>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {dream.status !== "Completed" && (
          <button
            onClick={() => onUpdate({ ...dream, status: "Completed" })}
            className="cursor-interactive rounded-full bg-sage px-3 py-1 font-body text-xs text-inkdark"
          >
            Mark complete
          </button>
        )}
        <button
          onClick={() => setEditing(true)}
          className="cursor-interactive rounded-full bg-babyblue px-3 py-1 font-body text-xs text-inkdark"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(dream.id)}
          className="cursor-interactive rounded-full bg-blush px-3 py-1 font-body text-xs text-inkdark"
        >
          Remove
        </button>
      </div>
    </motion.div>
  );
}
