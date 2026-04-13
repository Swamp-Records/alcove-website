'use client';

import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';

type ShowRecord = {
  id: string;
  date: string;
  location: string;
  link: string;
};

const emptyForm = {
  date: '',
  location: '',
  link: '',
};

export default function AdminShowsPage() {
  const [shows, setShows] = useState<ShowRecord[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function fetchShows() {
    try {
      setLoading(true);

      const q = query(collection(db, 'shows'), orderBy('date', 'desc'));
      const snapshot = await getDocs(q);

      const results: ShowRecord[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data() as {
          date?: Timestamp;
          location?: string;
          link?: string;
        };

        const localDate = data.date
          ? toDateTimeLocalString(data.date.toDate())
          : '';

        return {
          id: docSnap.id,
          date: localDate,
          location: data.location || '',
          link: data.link || '',
        };
      });

      setShows(results);
    } catch (error) {
      console.error('Error fetching admin shows:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchShows();
  }, []);

  function toDateTimeLocalString(date: Date) {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - offset * 60000);
    return localDate.toISOString().slice(0, 16);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.date || !form.location || !form.link) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      setSaving(true);

      const payload = {
        date: Timestamp.fromDate(new Date(form.date)),
        location: form.location,
        link: form.link,
      };

      if (editingId) {
        await updateDoc(doc(db, 'shows', editingId), payload);
      } else {
        await addDoc(collection(db, 'shows'), payload);
      }

      resetForm();
      await fetchShows();
    } catch (error) {
      console.error('Error saving show:', error);
      alert('Could not save show.');
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(show: ShowRecord) {
    setEditingId(show.id);
    setForm({
      date: show.date,
      location: show.location,
      link: show.link,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm('Delete this show?');
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, 'shows', id));
      await fetchShows();
    } catch (error) {
      console.error('Error deleting show:', error);
      alert('Could not delete show.');
    }
  }

  return (
    <main className="min-h-screen bg-[#F9F4D2] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 font-godens text-6xl text-[#2D2321]">SHOWS ADMIN</h1>

        <div className="mb-10 rounded-3xl bg-[#E8D8B0] p-8 shadow-lg">
          <h2 className="mb-6 font-crostan text-3xl text-[#2D2321]">
            {editingId ? 'Edit Show' : 'Add Show'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-crostan text-sm font-bold uppercase tracking-wider text-[#2D2321]">
                Date and Time
              </label>
              <input
                type="datetime-local"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#2D2321]/20 bg-[#FAF4C4] px-4 py-3 text-[#2D2321] outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block font-crostan text-sm font-bold uppercase tracking-wider text-[#2D2321]">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="926 BAR"
                className="w-full rounded-xl border border-[#2D2321]/20 bg-[#FAF4C4] px-4 py-3 text-[#2D2321] outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block font-crostan text-sm font-bold uppercase tracking-wider text-[#2D2321]">
                Ticket Link
              </label>
              <input
                type="url"
                name="link"
                value={form.link}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-xl border border-[#2D2321]/20 bg-[#FAF4C4] px-4 py-3 text-[#2D2321] outline-none"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="rounded-full bg-[#2D2321] px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#FAF4C4] disabled:opacity-50"
              >
                {saving ? 'Saving...' : editingId ? 'Update Show' : 'Add Show'}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-[#2D2321] px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#2D2321]"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="rounded-3xl bg-[#E8D8B0] p-8 shadow-lg">
          <h2 className="mb-6 font-crostan text-3xl text-[#2D2321]">Current Shows</h2>

          {loading ? (
            <p className="font-crostan text-[#2D2321]">Loading...</p>
          ) : shows.length === 0 ? (
            <p className="font-crostan text-[#2D2321]">No shows yet.</p>
          ) : (
            <div className="space-y-4">
              {shows.map((show) => (
                <div
                  key={show.id}
                  className="flex flex-col justify-between gap-4 rounded-2xl bg-[#FAF4C4] p-5 md:flex-row md:items-center"
                >
                  <div>
                    <p className="font-crostan text-lg font-bold text-[#2D2321]">
                      {new Date(show.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      })}
                    </p>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#6B6B6B]">
                      {show.location}
                    </p>
                    <a
                      href={show.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block break-all text-sm text-[#2D2321] underline"
                    >
                      {show.link}
                    </a>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(show)}
                      className="rounded-full bg-[#2D2321] px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#FAF4C4]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(show.id)}
                      className="rounded-full border border-[#2D2321] px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#2D2321]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}