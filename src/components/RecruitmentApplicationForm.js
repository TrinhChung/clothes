"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site";

export default function RecruitmentApplicationForm({ roles }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: roles[0]?.title ?? "",
    note: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Ứng tuyển vị trí ${formData.role} - ${formData.name || "Ứng viên mới"}`;
    const body = [
      "Xin chào Lan Chuẩn,",
      "",
      "Tôi muốn ứng tuyển với thông tin sau:",
      `- Họ và tên: ${formData.name || "-"}`,
      `- Số điện thoại: ${formData.phone || "-"}`,
      `- Email: ${formData.email || "-"}`,
      `- Vị trí ứng tuyển: ${formData.role || "-"}`,
      "",
      "Kinh nghiệm / lời nhắn:",
      formData.note || "-",
      "",
      "Tôi sẽ gửi kèm CV hoặc thông tin bổ sung trong email phản hồi.",
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-surface-container-lowest p-8 shadow-[0_24px_48px_rgba(8,27,56,0.08)] md:p-10">
      <h3 className="font-headline text-3xl font-bold text-primary">
        Gửi hồ sơ ứng tuyển
      </h3>
      <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
        Sau khi nhấn gửi, ứng dụng email trên máy của bạn sẽ mở để hoàn tất hồ sơ.
        Nếu thuận tiện hơn, bạn cũng có thể trao đổi nhanh qua Zalo.
      </p>

      <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
            Họ và tên
          </label>
          <input
            className="w-full bg-surface p-4 font-body outline-none ring-1 ring-outline-variant/20 transition-colors focus:ring-secondary"
            name="name"
            onChange={handleChange}
            placeholder="Nguyễn Văn A"
            required
            type="text"
            value={formData.name}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
              Số điện thoại
            </label>
            <input
              className="w-full bg-surface p-4 font-body outline-none ring-1 ring-outline-variant/20 transition-colors focus:ring-secondary"
              name="phone"
              onChange={handleChange}
              placeholder="090..."
              required
              type="tel"
              value={formData.phone}
            />
          </div>

          <div>
            <label className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
              Email
            </label>
            <input
              className="w-full bg-surface p-4 font-body outline-none ring-1 ring-outline-variant/20 transition-colors focus:ring-secondary"
              name="email"
              onChange={handleChange}
              placeholder="ban@example.com"
              type="email"
              value={formData.email}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
            Vị trí ứng tuyển
          </label>
          <select
            className="w-full bg-surface p-4 font-body outline-none ring-1 ring-outline-variant/20 transition-colors focus:ring-secondary"
            name="role"
            onChange={handleChange}
            value={formData.role}
          >
            {roles.map((role) => (
              <option key={role.slug} value={role.title}>
                {role.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-label text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
            Kinh nghiệm hoặc lời nhắn
          </label>
          <textarea
            className="w-full bg-surface p-4 font-body outline-none ring-1 ring-outline-variant/20 transition-colors focus:ring-secondary"
            name="note"
            onChange={handleChange}
            placeholder="Mô tả ngắn về kinh nghiệm may, QC, kế toán hoặc thời gian có thể bắt đầu..."
            rows="5"
            value={formData.note}
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            className="bg-primary px-8 py-4 font-headline text-lg font-bold text-white transition-colors hover:bg-primary-container"
            type="submit"
          >
            Tạo email ứng tuyển
          </button>
          <a
            className="bg-surface-container-low px-8 py-4 text-center font-headline text-lg font-bold text-primary transition-colors hover:bg-surface-container"
            href={siteConfig.zaloUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Chat Zalo
          </a>
        </div>
      </form>
    </div>
  );
}
