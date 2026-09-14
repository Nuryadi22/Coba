"use client";

import { useState } from "react";

const initialForm = {
  nama: "",
  email: "",
  pesan: "",
};

export default function Home() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <main className="page">
      <section className="form-card" aria-labelledby="form-title">
        <p className="eyebrow">HUBUNGI KAMI</p>
        <h1 id="form-title">Kirim pesan</h1>
        <p className="intro">
          Isi form di bawah ini dan kami akan segera menghubungi Anda.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nama">Nama</label>
          <input
            id="nama"
            name="nama"
            type="text"
            placeholder="Nama lengkap"
            value={form.nama}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="nama@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="pesan">Pesan</label>
          <textarea
            id="pesan"
            name="pesan"
            placeholder="Tulis pesan Anda..."
            rows="5"
            value={form.pesan}
            onChange={handleChange}
            required
          />

          <button type="submit">Kirim pesan</button>
        </form>

        {submitted && (
          <p className="success-message" role="status">
            Terima kasih! Pesan Anda berhasil dikirim.
          </p>
        )}
      </section>
    </main>
  );
}
