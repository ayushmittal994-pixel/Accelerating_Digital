"use client";

import { useState, useEffect } from "react";

export default function TechShowcase() {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch ONE specific repo, not all of them
    fetch(
      "https://api.github.com/repos/ayushmittal994-pixel/Accelerating_Digital",
    )
      .then((res) => res.json())
      .then((data) => {
        setRepo(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-[#137cc1] text-sm mb-2 ">Our Tech</p>
      <h2 className="text-[40px] font-medium text-[#1d252d] mb-8">
        This Project
      </h2>

      {loading ? (
        <p className="text-gray-400">Loading project...</p>
      ) : !repo || repo.message ? (
        <p className="text-red-500">Could not load project.</p>
      ) : (
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-200 rounded-3xl p-8 bg-white hover:shadow-md transition block"
        >
          <h3 className="font-medium text-[#1d252d] text-2xl">{repo.name}</h3>
          <p className="text-[#566470] mt-3">
            {repo.description || "A full-stack case-studies platform."}
          </p>
          <div className="flex gap-6 mt-6 text-sm text-[#566470]">
            {repo.language && <span>🛠 {repo.language}</span>}
            <span>★ {repo.stargazers_count} stars</span>
            <span>⑂ {repo.forks_count} forks</span>
          </div>
        </a>
      )}
    </section>
  );
}
