"use client";

import { useState } from "react";
import { UserPlus, Trash2, ImagePlus } from "lucide-react";
import GradientBackground from "../../../components/playground/GradientBackground";
import ActionCard from "../../../components/playground/ActionCard";
import ImageDropzone from "../../../components/playground/ImageDropzone";
import AuthGuard from "../../../components/auth/AuthGuard";
import { deleteData, insertData } from "@/src/repositories/SupabaseDatabase";
import { uploadStudentImage } from "@/src/repositories/SupabaseStorage";

export default function PracticePage() {
  const [insertName, setInsertName] = useState("");
  const [deleteName, setDeleteName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleInsertStudent = () => {
    console.log(insertName)
    if (!insertName) {
      return;
    }

    insertData("alunos", {nome: insertName});
  };

  const handleDeleteStudent = () => {
    if (!deleteName) {
      return;
    }

    deleteData("alunos", {nome: deleteName});
  };

  const handleSaveImage = async () => {
    if (!imageFile) {
      return;
    }

    try {
      await uploadStudentImage("alunos", imageFile);
    } catch (err) {
      console.error("Image upload failed:", err);
    }
  };

  return (
    <AuthGuard>
    <main className="relative flex min-h-screen w-full justify-center overflow-hidden px-4 py-16 sm:py-24">
      <GradientBackground />

      <div className="relative z-10 flex w-full max-w-[720px] flex-col gap-8">
        <header className="flex flex-col items-center gap-3 text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-1 text-xs font-medium text-black">
            Playground
          </span>
          <h1 className="text-4xl font-bold text-black">Supabase Practice</h1>
          <p className="text-sm text-neutral-600">
            A small playground to insert and remove students, and upload images.
          </p>
        </header>

        <ActionCard
          icon={UserPlus}
          iconCircleClassName="bg-yellow-200"
          iconClassName="text-yellow-900"
          title="Insert student"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              value={insertName}
              onChange={(e) => setInsertName(e.target.value)}
              placeholder="Student name"
              className="h-11 flex-1 rounded-xl border border-neutral-300 bg-white/80 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-300/60"
            />
            <button
              type="button"
              onClick={handleInsertStudent}
              className="h-11 shrink-0 rounded-xl bg-yellow-300 px-6 text-sm font-semibold text-yellow-950 outline-none transition hover:bg-yellow-400 focus-visible:ring-2 focus-visible:ring-yellow-300/60 sm:w-32"
            >
              Insert
            </button>
          </div>
        </ActionCard>

        <ActionCard
          icon={Trash2}
          iconCircleClassName="bg-red-100"
          iconClassName="text-red-700"
          title="Delete student"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              value={deleteName}
              onChange={(e) => setDeleteName(e.target.value)}
              placeholder="Student name"
              className="h-11 flex-1 rounded-xl border border-neutral-300 bg-white/80 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-300/60"
            />
            <button
              type="button"
              onClick={handleDeleteStudent}
              className="h-11 shrink-0 rounded-xl bg-red-200 px-6 text-sm font-semibold text-red-800 outline-none transition hover:bg-red-300 focus-visible:ring-2 focus-visible:ring-red-300/60 sm:w-32"
            >
              Delete
            </button>
          </div>
        </ActionCard>

        <ActionCard
          icon={ImagePlus}
          iconCircleClassName="bg-green-500"
          iconClassName="text-white"
          title="Insert image"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <ImageDropzone file={imageFile} onFileChange={setImageFile} />
            <button
              type="button"
              onClick={handleSaveImage}
              className="shrink-0 rounded-xl bg-green-400 px-6 py-3 text-sm font-semibold text-green-950 outline-none transition hover:bg-green-500 focus-visible:ring-2 focus-visible:ring-green-300/60 sm:w-32"
            >
              Save
            </button>
          </div>
        </ActionCard>
      </div>
    </main>
    </AuthGuard>
  );
}
