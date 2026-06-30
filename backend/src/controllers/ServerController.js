import express from "express";
import dotenv from "dotenv";
import { assertDbConnection, query } from "../db/pool.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
app.use(express.json());

export const getHeathCheck = async (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
};
export const adminLogin = async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  try {
    const { rows } = await query("SELECT * FROM admins WHERE email = $1", [
      email,
    ]);
    const admin = rows[0];
    if (!admin || !(await bcrypt.compare(password, admin.password_hash))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "2h" },
    );
    res.json({ token, admin: { id: admin.id, email: admin.email } });
  } catch (err) {
    console.error("login error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const publicCaseStudies = async (req, res) => {
  try {
    const { rows } = await query(
      "SELECT * FROM case_studies WHERE published = true ORDER BY created_at DESC",
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching case studies:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get one case study by slug
export const publicCaseStudiesbySlug = async (req, res) => {
  try {
    const { rows } = await query(
      "SELECT * FROM case_studies WHERE slug = $1 AND published = true",
      [req.params.slug],
    );
    if (!rows[0]) return res.status(404).json({ error: "Not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error("Error fetching case study:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const AdminCaseStudies = async (req, res) => {
  try {
    const { rows } = await query(
      "SELECT * FROM case_studies ORDER BY created_at DESC",
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching case studies:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const PostCaseStudies = async (req, res) => {
  const { slug, title, client, summary, body, cover_image, published } =
    req.body || {};
  if (!slug || !title) {
    return res.status(400).json({ message: "Slug and title is mandatory" });
  }
  try {
    const { rows } = await query(
      `Insert into case_studies (slug, title , client , summary , body , cover_image ,published)
      values ($1 , $2 , $3, $4, $5 ,$6, $7) RETURNING *`,
      [
        slug,
        title,
        client ?? null,
        summary ?? null,
        body ?? null,
        cover_image ?? null,
        published ?? false,
      ],
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    //23505 is a unique constraint pre defiend code
    if (error.code === "23505") {
      return res
        .status(409) //bestly use with unique constraint
        .json({ error: "A case study with that slug already exists" });
    }
    console.error("create error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const UpdateCaseStudies = async (req, res) => {
  const { id } = req.params;
  const { slug, title, client, summary, body, cover_image, published } =
    req.body || {};
  try {
    const { rows } = await query(
      `UPDATE case_studies
       SET slug = COALESCE($1, slug),
           title = COALESCE($2, title),
           client = COALESCE($3, client),
           summary = COALESCE($4, summary),
           body = COALESCE($5, body),
           cover_image = COALESCE($6, cover_image),
           published = COALESCE($7, published)
       WHERE id = $8 RETURNING *`,
      [slug, title, client, summary, body, cover_image, published, id],
    );
    if (!rows[0]) return res.status(404).json({ error: "Not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error("update error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const DeleteCaseStudies = async (req, res) => {
  try {
    const { rowCount } = await query("Delete FROM case_studies WHERE id = $1", [
      req.params.id,
    ]);
    if (rowCount === 0) return res.status(404).json({ error: "Not found" });
    res.status(204).send();
  } catch (err) {
    console.error("remove error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


