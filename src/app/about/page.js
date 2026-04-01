"use client";

export default function AboutPage() {
  return (
    <>
      
{/*  Hero Header: Editorial Style  */}
<header className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-8">
<span className="label-text text-secondary uppercase tracking-widest text-sm mb-4 block">Hành trình xưởng may</span>
<h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter text-primary mb-8 leading-none">
                    Nghệ thuật trong <br/>từng đường kim.
                </h1>
</div>
<div className="md:col-span-4 pb-4">
<p className="font-body text-xl text-on-surface-variant leading-relaxed italic">
                    "Chúng tôi không chỉ may trang phục, chúng tôi kiến tạo niềm tin thông qua độ chính xác cơ khí và tâm hồn thủ công."
                </p>
</div>
</div>
</header>
{/*  About Section: The Tailored Monolith (Di sản & Sự tin cậy - Kept as requested)  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
<div className="relative group">
<img alt="Workshop interior" className="w-full aspect-[4/5] object-cover rounded shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ko2MhpYx4V0AbRrRN7sTB855_kIoUk6myJ2gFvxP7C8arBhypIfxkEutB4oa8Vypk8N4-2Oc-0CFqnvEFNSyD9Jz9NAh0gHEGw65jDH-OPv5N-8R67z2yh9xxjXtDZIctat0H63YSF3TdecIki3GTnyZn8zfj7vtJ325M0SOP5NEBE5ID1zlj-efSLNL5HpJo07RQr8MnzDolP2e-KcdFVVKN202fYp7BI3xaBXFj0mxX3SXI8HBJk1l6Mul01kOxy7ZYd7psZc"/>
<div className="absolute -bottom-8 -right-8 bg-primary text-white p-12 hidden md:block">
<p className="font-headline font-black text-6xl">20+</p>
<p className="label-text uppercase tracking-widest text-xs mt-2">Năm kinh nghiệm</p>
</div>
</div>
<div className="space-y-12">
<div>
<h2 className="font-headline font-bold text-4xl text-primary mb-6">Di sản &amp; Sự tin cậy</h2>
<p className="font-body text-lg text-on-surface-variant leading-relaxed">
                            Khởi nguồn từ một xưởng may gia đình nhỏ, Lan Chuẩn đã phát triển thành đối tác chiến lược cho các thương hiệu hàng đầu. Chúng tôi tập trung vào sự ổn định và độ tin cậy tuyệt đối, nơi mỗi sản phẩm rời xưởng đều là một minh chứng cho lời hứa về chất lượng.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-secondary text-4xl mb-4" data-icon="verified">verified</span>
<h3 className="font-headline font-bold text-xl mb-3">Chất lượng là trọng tâm</h3>
<p className="font-body text-on-surface-variant text-sm">Kiểm soát 100% quy trình từ khâu chọn vải đến hoàn thiện cuối cùng.</p>
</div>
<div className="p-8 bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-secondary text-4xl mb-4" data-icon="handshake">handshake</span>
<h3 className="font-headline font-bold text-xl mb-3">Uy tín là nền tảng</h3>
<p className="font-body text-on-surface-variant text-sm">Cam kết đúng tiến độ và minh bạch trong mọi thỏa thuận hợp tác.</p>
</div>
</div>
<div className="border-l-4 border-secondary pl-8 py-2">
<p className="font-headline font-bold text-2xl mb-4">Năng lực sản xuất</p>
<ul className="space-y-4 font-body text-on-surface-variant">
<li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
<span>Sản lượng mỗi tháng</span>
<span className="font-headline font-bold text-primary">50,000+ sản phẩm</span>
</li>
<li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
<span>Hệ thống máy móc</span>
<span className="font-headline font-bold text-primary">Brother, Juki (Japan)</span>
</li>
<li className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
<span>Đội ngũ nhân sự</span>
<span className="font-headline font-bold text-primary">150 thợ lành nghề</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
{/*  Why Choose Us: Asymmetric Layout (Tại sao chọn Lan Chuẩn - Kept as requested)  */}
<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-20 text-center">
<h2 className="font-headline font-black text-5xl tracking-tight text-primary">Tại sao chọn Lan Chuẩn?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center text-center p-10 bg-surface-container/50 rounded-xl">
<div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full mb-6">
<span className="material-symbols-outlined text-3xl" data-icon="precision_manufacturing">precision_manufacturing</span>
</div>
<h3 className="font-headline font-bold text-2xl mb-4">Công nghệ Hiện đại</h3>
<p className="font-body text-on-surface-variant">Sử dụng hệ thống máy may và máy cắt laser tự động đảm bảo độ chính xác đến từng milimet.</p>
</div>
<div className="flex flex-col items-center text-center p-10 bg-surface-container/50 rounded-xl md:-translate-y-8">
<div className="w-16 h-16 bg-secondary text-white flex items-center justify-center rounded-full mb-6">
<span className="material-symbols-outlined text-3xl" data-icon="groups">groups</span>
</div>
<h3 className="font-headline font-bold text-2xl mb-4">Nhân sự Tâm huyết</h3>
<p className="font-body text-on-surface-variant">Đội ngũ kỹ thuật có hơn 10 năm kinh nghiệm trong việc xử lý các chất liệu vải khó tính nhất.</p>
</div>
<div className="flex flex-col items-center text-center p-10 bg-surface-container/50 rounded-xl">
<div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full mb-6">
<span className="material-symbols-outlined text-3xl" data-icon="local_shipping">local_shipping</span>
</div>
<h3 className="font-headline font-bold text-2xl mb-4">Dịch vụ Toàn diện</h3>
<p className="font-body text-on-surface-variant">Từ thiết kế rập, nhảy size đến đóng gói và vận chuyển tận nơi trên toàn quốc.</p>
</div>
</div>
</div>
</section>
{/*  Contact Section: Professional & Clean (Kết nối & Form - Kept as requested)  */}
<section className="py-24 bg-surface-container-high relative" id="contact">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
{/*  Contact Info & Channels  */}
<div>
<h2 className="font-headline font-black text-5xl text-primary mb-12">Kết nối với chúng tôi</h2>
<div className="space-y-10 mb-16">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 flex-shrink-0 bg-primary/10 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
</div>
<div>
<p className="label-text font-bold text-secondary uppercase text-xs tracking-widest mb-1">Địa chỉ xưởng</p>
<p className="font-headline font-semibold text-xl text-primary">Tuyên Bá, Quảng Phú, Lâm Thao, Bắc Ninh 223500, Việt Nam</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 flex-shrink-0 bg-primary/10 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-primary" data-icon="call">call</span>
</div>
<div>
<p className="label-text font-bold text-secondary uppercase text-xs tracking-widest mb-1">Điện thoại</p>
<a href="tel:+84965628195" className="font-headline font-semibold text-xl text-primary hover:text-secondary transition-colors">+84 965 628 195</a>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 flex-shrink-0 bg-primary/10 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
</div>
<div>
<p className="label-text font-bold text-secondary uppercase text-xs tracking-widest mb-1">Email</p>
<a href="mailto:chungtrinh2k2@gmail.com" className="font-headline font-semibold text-xl text-primary hover:text-secondary transition-colors">chungtrinh2k2@gmail.com</a>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4">
<a className="flex items-center gap-3 bg-white px-8 py-4 rounded-md shadow-sm hover:translate-x-1 transition-transform" href="https://zalo.me/+84965628195" target="_blank" rel="noopener noreferrer">
<span className="font-headline font-bold text-primary">Zalo Chat</span>
<span className="material-symbols-outlined text-secondary" data-icon="chat_bubble">chat_bubble</span>
</a>
<a className="flex items-center gap-3 bg-white border border-outline-variant px-8 py-4 rounded-md shadow-sm hover:translate-x-1 transition-transform" href="mailto:chungtrinh2k2@gmail.com">
<span className="font-headline font-bold text-primary">Gửi Email</span>
<span className="material-symbols-outlined text-secondary">mail</span>
</a>
</div>
</div>
{/*  Form Section  */}
<div className="bg-surface-container-lowest p-10 md:p-14 shadow-2xl rounded-sm">
<h3 className="font-headline font-bold text-2xl mb-8">Gửi tin nhắn cho chúng tôi</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="label-text text-xs uppercase tracking-widest text-on-surface-variant mb-2 block font-bold">Họ tên</label>
<input className="w-full bg-surface border border-outline-variant/20 focus:border-secondary focus:ring-0 p-4 font-body transition-colors" placeholder="Nguyễn Văn A" type="text"/>
</div>
<div>
<label className="label-text text-xs uppercase tracking-widest text-on-surface-variant mb-2 block font-bold">Số điện thoại</label>
<input className="w-full bg-surface border border-outline-variant/20 focus:border-secondary focus:ring-0 p-4 font-body transition-colors" placeholder="090..." type="tel"/>
</div>
</div>
<div>
<label className="label-text text-xs uppercase tracking-widest text-on-surface-variant mb-2 block font-bold">Email</label>
<input className="w-full bg-surface border border-outline-variant/20 focus:border-secondary focus:ring-0 p-4 font-body transition-colors" placeholder="example@mail.com" type="email"/>
</div>
<div>
<label className="label-text text-xs uppercase tracking-widest text-on-surface-variant mb-2 block font-bold">Nội dung yêu cầu</label>
<textarea className="w-full bg-surface border border-outline-variant/20 focus:border-secondary focus:ring-0 p-4 font-body transition-colors" placeholder="Mô tả nhu cầu sản xuất của bạn..." rows="4"></textarea>
</div>
<button className="w-full bg-primary text-white py-5 font-headline font-bold text-lg hover:bg-primary-container transition-colors shadow-lg" type="submit">
                            Gửi yêu cầu báo giá
                        </button>
</form>
</div>
</div>
</div>
</section>
{/*  Map & Location  */}
<section className="w-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5077022790488!2d106.1594581!3d21.0123622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359fa84bf078d1%3A0x495360d92cf675ee!2zWMaw4bufbmcgTWF5IExhbiBDaHXhuqlu!5e0!3m2!1svi!2sjp!4v1775038694571!5m2!1svi!2sjp"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Bản đồ Xưởng May Lan Chuẩn"
>
</iframe>
</section>
{/*  Footer Shared Component  */}

    </>
  );
}
