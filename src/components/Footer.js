import '../styles/globals.css';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full flex flex-col lg:flex-row gap-6 text-left bg-[var(--main-green)] py-6 px-4 sm:px-8 lg:px-16"
    >
      {/* Cột đầu tiên - Thông tin liên hệ */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-[var(--main-yellow)] uppercase pb-4 pt-8">
          Xưởng may Lan Chuẩn
        </h2>
        <p className="text-white">
          Số điện thoại:{" "}
          <a
            href="tel:+84965628195"
            className="text-yellow-500 font-semibold hover:text-yellow-400"
          >
            0965628195
          </a>
        </p>
        <p className="text-white">
          Email:{" "}
          <a
            href="mailto:chungtrinh2k2@gmail.com"
            className="text-yellow-500 font-semibold hover:text-yellow-400"
          >
            chungtrinh2k2@gmail.com
          </a>
        </p>

        <p className="text-white">
          &copy; 2024 Xưởng May Lan Chuẩn. All rights reserved.
        </p>
      </div>

      {/* Cột thứ hai - Google Map */}
      <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5077027626303!2d106.15688317510468!3d21.01236218063282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359fa84bf078d1%3A0x495360d92cf675ee!2zWMaw4bufbmcgTWF5IExhbiBDaHXhuqlu!5e0!3m2!1sja!2sjp!4v1734086395486!5m2!1sja!2sjp"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}
