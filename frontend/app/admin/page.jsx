"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const API = "http://localhost:4000";

const EMPTY_FORM = {
  slug: "",
  title: "",
  client: "",
  summary: "",
  body: "",
  cover_image: "",
  published: false,
};

export default function AdminPage() {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [caseStudies, setCaseStudies] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Auth guard — no token, go to login
  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) {
      router.push("/login");
      return;
    }
    setToken(t);
  }, [router]);

  // Load all case studies once we have a token
  useEffect(() => {
    if (token) fetchCaseStudies();
  }, [token]);

  async function fetchCaseStudies() {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/admin/case-studies`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }
      const data = await res.json();
      setCaseStudies(data);
    } catch {
      setError("Could not load case studies.");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // Create or Update
  async function handleSubmit() {
    setError("");
    if (!form.slug || !form.title) {
      setError("Slug and title are required.");
      return;
    }

    const isEditing = editingId !== null;
    const url = isEditing
      ? `${API}/api/admin/case-studies/${editingId}`
      : `${API}/api/admin/case-studies`;
    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Save failed.");
        return;
      }
      setForm(EMPTY_FORM);
      setEditingId(null);
      fetchCaseStudies();
    } catch {
      setError("Could not save.");
    }
  }

  function handleEdit(cs) {
    setEditingId(cs.id);
    setForm({
      slug: cs.slug || "",
      title: cs.title || "",
      client: cs.client || "",
      summary: cs.summary || "",
      body: cs.body || "",
      cover_image: cs.cover_image || "",
      published: cs.published || false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id) {
    if (!confirm("Delete this case study?")) return;
    try {
      const res = await fetch(`${API}/api/admin/case-studies/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok && res.status !== 204) {
        setError("Delete failed.");
        return;
      }
      fetchCaseStudies();
    } catch {
      setError("Could not delete.");
    }
  }

  function handleCancel() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setError("");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  if (!token) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-[#122d25]">
            Case Studies Admin
          </h1>
          <button
            onClick={handleLogout}
            className="text-normal text-gray-600 hover:text-black border-2 rounded-3xl px-5 py-2 cursor-pointer"
          >
            Log out
          </button>
        </div>

        {error && (
          <p className="bg-red-50 text-red-700 px-4 py-3 rounded-xl mb-6 text-sm">
            {error}
          </p>
        )}

        {/* ---- Add / Edit form ---- */}
        <div className="bg-white rounded-2xl border p-6 mb-10 text-[#12252d]">
          <h2 className="text-xl font-medium text-[#122d25] mb-5">
            {editingId ? "Edit Case Study" : "Add New Case Study"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-normal">Slug </label>
              <input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="multi-country-commerce"
                className="border rounded-xl px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-normal">Title </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Expanding Horizons..."
                className="border rounded-xl px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-normal">Client</label>
              <input
                name="client"
                value={form.client}
                onChange={handleChange}
                placeholder="Demo Client"
                className="border rounded-xl px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-normal">Cover image URL</label>
              <input
                name="cover_image"
                value={form.cover_image}
                onChange={handleChange}
                placeholder="/about.jpg"
                className="border rounded-xl px-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-normal">Summary</label>
            <textarea
              name="summary"
              value={form.summary}
              onChange={handleChange}
              rows={2}
              placeholder="A short lead paragraph..."
              className="border rounded-xl px-4 py-2"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-normal">Body (HTML allowed)</label>
            <textarea
              name="body"
              value={form.body}
              onChange={handleChange}
              rows={8}
              placeholder="<h2>Background</h2><p>...</p>"
              className="border rounded-xl px-4 py-2 font-mono text-normal"
            />
          </div>

          <label className="flex items-center gap-2 mt-4 text-normal">
            <input
              type="checkbox"
              name="published"
              checked={form.published}
              onChange={handleChange}
            />
            Published (visible on public site)
          </label>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-800"
            >
              {editingId ? "Save Changes" : "Create"}
            </button>
            {editingId && (
              <button
                onClick={handleCancel}
                className="px-6 py-2.5 rounded-xl border font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* ---- List ---- */}
        <h2 className="text-xl font-medium text-[#122d25] mb-4">
          All Case Studies ({caseStudies.length})
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : caseStudies.length === 0 ? (
          <p className="text-gray-500">No case studies yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white border rounded-2xl p-5 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-[#122d25]">{cs.title}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        cs.published
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {cs.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="text-normal text-gray-500 mt-1">
                    {cs.client} · /{cs.slug}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleEdit(cs)}
                    className="px-4 py-2 rounded-xl border border-blue-500  text-blue-600 text-normal hover:bg-blue-50 cursor-pointer font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cs.id)}
                    className="px-4 py-2 rounded-xl border border-red-300 text-red-600 text-normal font-medium cursor-pointer hover:bg-red-50"
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
  );
}
