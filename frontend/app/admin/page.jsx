"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const API = "http://localhost:4000";

const Empty_Form = {
  slug: "",
  title: "",
  client: "",
  summary: "",
  cover_image: "",
  body: "",
  published: false,
};

export default function () {
  const router = useRouter();

  const [token, SetToken] = useState("");
  const [form, SetForm] = useState(Empty_Form);
  const [loading, SetLoading] = useState(true);
  const [caseStudies, SetCasestudies] = useState([]);
  const [isEditing, SetisEditing] = useState("");
  const [error, SetError] = useState("");

  //auth to check token

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) {
      router.push("/login");
      return;
    }
    SetToken(t);
  }, [router]);

  useEffect(() => {
    if (token) fetchAllCaseStudies();
  }, [token]);

  async function fetchAllCaseStudies() {
    SetLoading(true);
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
      SetCasestudies(Array.isArray(data) ? data : []);
    } catch (error) {
      SetError("could not load Case Studies");
    } finally {
      SetLoading(false);
    }
  }

  function handlechange(e) {
    const { name, value, type, checked } = e.target;
    SetForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handlesubmit() {
    SetError("");
    if (!form.slug || !form.title) {
      SetError("Slug and Title are required!!");
      return;
    }

    const url = isEditing
      ? `${API}/api/admin/case-studies/${isEditing}`
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
        SetError(data.error || "Save Failed");
        return;
      }
      SetForm(Empty_Form);
      SetisEditing(false);
      fetchAllCaseStudies();
    } catch (error) {
      SetError("Could not save.");
    }
  }

  function handleEdit(cs) {
    SetisEditing(cs.id);
    SetForm({
      slug: cs.slug || "",
      title: cs.title || "",
      client: cs.client || "",
      summary: cs.summary || "",
      cover_image: cs.cover_image || "",
      body: cs.body || "",
      published: cs.published || false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id) {
    if (!confirm("Delete this Case Study?")) return;
    try {
      const res = await fetch(`${API}/api/admin/case-studies/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok && res.status !== 204) {
        SetError("Delete failed.");
        return;
      }
      fetchAllCaseStudies();
    } catch (error) {
      SetError("Cannot Not Delete!!");
    }
  }

  function handleCancel() {
    SetForm(Empty_Form);
    SetisEditing(null);
    SetError("");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  if (!token) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 text-[#12252d]">
      <div className=" max-w-7xl mx-auto md:mx-auto ">
        <div className="flex items-center justify-between">
          <h1 className="text-[32px]">Case Studies Admin</h1>

          <Button onclick={handleLogout} title="Log Out"></Button>
        </div>

        {error && (
          <p className="text-red-500 bg-red-100 rounded-3xl px-5 py-2 text-sm mb-6 w-fit ">
            {error}
          </p>
        )}

        <div className="bg-white rounded-2xl text-normal border p-6 mb-10">
          <h2 className="text-xl text-[#12252d] font-poppins mb-5">
            {isEditing ? "Edit Case Studies" : "Add New Case Study"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-5">
              <label className="text-normal">Slug</label>
              <input
                type="text"
                name="slug"
                value={form.slug}
                placeholder="multi-country-commerce"
                onChange={handlechange}
                className="border rounded-xl px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-normal">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                placeholder="Expanding Horizons..."
                onChange={handlechange}
                className="border rounded-xl px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-normal">Client</label>
              <input
                type="text"
                name="client"
                value={form.client}
                placeholder="Demo Client"
                onChange={handlechange}
                className="border rounded-xl px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-normal">Image Url</label>
              <input
                type="text"
                name="cover_image"
                value={form.cover_image}
                onChange={handlechange}
                placeholder="/about.jpg"
                className="border rounded-xl px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <label className="text-normal">Summary</label>
              <textarea
                text="text"
                name="summary"
                value={form.summary}
                placeholder="Write summary.."
                onChange={handlechange}
                className="border rounded-xl px-4 py-2 "
              />
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <label className="text-normal">Body (Html allowed)</label>
              <textarea
                text="text"
                name="body"
                value={form.body}
                placeholder="<h2>Background</h2>"
                onChange={handlechange}
                className="border rounded-xl px-4 py-2"
              />
            </div>
            <label className="flex items-center gap-2 mt-4 text-sm">
              {" "}
              <input
                type="checkbox"
                name="published"
                checked={form.published}
                onChange={handlechange}
              />{" "}
              Published (visible on public site){" "}
            </label>
          </div>
          <div className="flex gap-6">
            <Button
              onclick={handlesubmit}
              title={isEditing ? "Save Changes" : "Create"}
            ></Button>
            {isEditing && (
              <Button onclick={handleCancel} title="Cancel"></Button>
            )}
          </div>
        </div>
        <h2 className="text-xl text-[#12252d] font-poppins">
          {`Case Studies : ${caseStudies.length}`}
        </h2>
        {loading ? (
          <p className="text-[#12252d] font-poppins">Loading...</p>
        ) : caseStudies.length === 0 ? (
          <p className="text-[#12252d] font-poppins">No Case Studies Yet...</p>
        ) : (
          <div className="flex flex-col  gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white border rounded-2xl p-5 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-normal text-[#12252d]">{cs.title}</h3>
                    <span
                      className={`text-sm rounded-full px-5 ${cs.published ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                    >
                      {cs.published ? "Published" : "Not Published"}
                    </span>
                  </div>
                  <div className="text-[#12252d] text-sm font-poppins mt-1">
                    <p>
                      {cs.client} ./ {cs.slug}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(cs)}
                    className="px-4 py-2 rounded-xl border text-sm cursor-pointer  border-blue-300 text-blue-600 font-medium hover:bg-blue-50"
                  >
                    {" "}
                    Edit{" "}
                  </button>{" "}
                  <button
                    onClick={() => handleDelete(cs.id)}
                    className="px-4 py-2 rounded-xl border cursor-pointer border-red-300 text-red-600 text-sm font-medium hover:bg-red-50"
                  >
                    {" "}
                    Delete{" "}
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
