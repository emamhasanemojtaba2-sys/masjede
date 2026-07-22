// ============================================================
// JavaScript - مسجد امام حسن مجتبی (ع) - صفحه اصلی
// ============================================================

// ===== Escape HTML =====
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== داده‌های نمونه =====
const defaultNews = [{
    id: 3,
    title: ' مراسم عذاداری هیئت نوجوانان حضرت قاسم ابن الحسن',
    category: 'مذهبی',
    content: 'گویند...دنیا میلیون ها سال دارد.\nولی دنیای ما سه سال دارد😔🏴\n⚜هئیت نوجوان حضرت قاسم ابن الحسن (ع) برگزار میکند.\n🕯مراسم عزاداری شهادت حضرت رقیه (ع)\nزیارت عاشورا؛ کربلایی علی تسلط\nسخنران؛ حجت‌الاسلام والمسلمین مسلم کاظم زاده \nبانوای گرم؛ کربلایی محمد حسین\nابوزیدآبادی و کربلایی امیر عباس فلاح\nزمان:از دوشنبه ۲۹ تیرماه ۱۴۰۵\n(به مدت سه شب؛از ساعت ۲۰:۳۰)\nمکان: بلوار قطب راوندی حکمت ۷۹\n(مسجد امام حسن مجتبی (ع))\n# مسجد امام حسن مجتبی (ع)\n# هئیت نوجوان حضرت قاسم ابن الحسن (ع)\n# کانون فرهنگی هنری بقیع \n# هئیت محبان امام حسن مجتبی (ع).',
    date: '۱۴۰۵/۰۴/۲۰',
    images: [
        'https://cdn.imgurl.ir/uploads/l474097_IMG_20260722_172917_425.jpg',
        'https://cdn.imgurl.ir/uploads/c012983_IMG_20260722_172920_164.jpg'
    ]
}, {
    id: 1,
    title: 'برگزاری مراسم عزاداری دهه سوم صفر',
    category: 'مذهبی',
    content: 'مراسم عزاداری سرور و سالار شهیدان، حضرت اباعبدالله الحسین (ع) از شب اربعین تا آخر صفر هر شب بعد از نماز مغرب و عشاء در مسجد برگزار می‌شود. سخنران: حجت‌الاسلام والمسلمین کاظم زاده',
    date: '۱۴۰۵/۰۴/۲۰',
    images: [
        'https://cdn.imgurl.ir/uploads/d378641_images_1.jpeg'
    ]
}, {
    id: 2,
    title: '🔹برنامه کلاس های تابستانه مسجد امام حسن مجتبی (ع) کانون فرهنگی هنری بقیع (ویژه پسران)',
    category: 'فرهنگی',
    content: '🟠شنبه: کلاس زبان انگلیسی 👩‍🏫 مربی: خانم هانیه صفایی\n🟠شنبه: کلاس احکام 👨‍🏫 مربی: حجت‌الاسلام والمسلمین جواد جعفری\n🟡یکشنبه: کلاس نقاشی 👩‍🏫 مربی: خانم مهدیه صفایی\n🟡یکشنبه: فوتبال\n🟢دوشنبه: کلاس اوریگامی 🧑‍🏫 مربی: سید محمد حسین طباطبایی\n🟢دوشنبه: کلاس مکالمه عربی 👨‍🏫 مربی: حجت‌الاسلام والمسلمین کاظم زاده\n🔵سه شنبه: کلاس نقاشی 👩‍🏫 مربی: خانم مهدیه صفایی\n🔵سه شنبه: فوتبال\n🟣چهارشنبه: کلاس اوریگامی 🧑‍🏫 مربی: سید محمد حسین طباطبایی\n🟣چهارشنبه: کلاس احکام 👨‍🏫 مربی: حجت الاسلام والمسلمین جواد جعفری',
    date: '۱۴۰۵/۰۴/۲۰',
    images: [
        'https://cdn.imgurl.ir/uploads/w558458_IMG_20260711_182505_147.jpg'
    ]
}];

const defaultGallery = [
    { id: 1, title: 'سید مجتبی حسینی خامنه‌ای', image: 'https://cdn.imgurl.ir/uploads/b957662_IMG_20260711_225445_471.jpg' },
    { id: 2, title: 'برنامه تابستانی', image: 'https://cdn.imgurl.ir/uploads/w558458_IMG_20260711_182505_147.jpg' },
    { id: 3, title: 'برنامه عذاداری', image: 'https://cdn.imgurl.ir/uploads/c012983_IMG_20260722_172920_164.jpg' }
];

// ===== بارگذاری داده‌ها =====
function loadData(key, defaultData) {
    const stored = localStorage.getItem(key);
    if (stored) {
        try { return JSON.parse(stored); } catch (e) { return defaultData; }
    }
    return defaultData;
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

let newsData = loadData('masjedNews', defaultNews);
let galleryData = loadData('masjedGallery', defaultGallery);
let settingsData = loadData('masjedSettings', {
    imam: 'حجت‌الاسلام والمسلمین کاظم زاده',
    phone: '031-55621603 و 09133630656'
});
let urgentNoticeData = loadData('masjedUrgentNotice', {
    text: '📢 اطلاعیه مهم: کلاس های تابستانی کانون فرهنگی هنری بقیع آغاز شد😉.',
    active: true
});

// ===== به‌روزرسانی تنظیمات =====
function applySettings() {
    const imamDisplay = document.getElementById('imamDisplay');
    const phoneDisplay = document.getElementById('phoneDisplay');
    const imamInfo = document.getElementById('imamInfo');
    const contactPhone = document.getElementById('contactPhone');

    if (imamDisplay) imamDisplay.textContent = `👤 امام جماعت: ${settingsData.imam}`;
    if (phoneDisplay) phoneDisplay.textContent = `📞 خادم مسجد: ${settingsData.phone}`;
    if (imamInfo) imamInfo.innerHTML = `<strong>امام جماعت:</strong> ${settingsData.imam}`;
    if (contactPhone) contactPhone.innerHTML = `<strong>شماره تماس خادم مسجد:</strong> ${settingsData.phone}`;
}

// ===== مدیریت مودال اطلاعیه =====
function loadNoticeModal() {
    const modal = document.getElementById('noticeModal');
    const text = document.getElementById('noticeModalText');
    if (urgentNoticeData.active && urgentNoticeData.text) {
        text.textContent = urgentNoticeData.text;
        modal.classList.add('show');
    } else {
        modal.classList.remove('show');
    }
}

function closeNoticeModal() {
    document.getElementById('noticeModal').classList.remove('show');
}

// ===== Lightbox =====
function openLightbox(src) {
    const overlay = document.getElementById('lightboxOverlay');
    const img = document.getElementById('lightboxImage');
    img.src = src;
    img.style.display = 'block';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const overlay = document.getElementById('lightboxOverlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('lightboxOverlay')?.addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (document.getElementById('lightboxOverlay').classList.contains('open')) closeLightbox();
        if (document.getElementById('sidebar').classList.contains('open')) closeSidebar();
        if (document.getElementById('noticeModal').classList.contains('show')) closeNoticeModal();
        if (document.getElementById('fullTextModal').classList.contains('open')) closeFullTextModal();
    }
});

// ===== نمایش اخبار =====
function renderNews(filteredData) {
    const container = document.getElementById('newsContainer');
    if (!container) return;
    const data = filteredData || newsData;
    container.querySelectorAll('.skeleton-loading').forEach(el => el.remove());

    if (data.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted);">هیچ خبری یافت نشد.</p>`;
        return;
    }

    container.innerHTML = data.map(news => {
        const images = news.images || [];
        let imagesHtml = '';
        if (images.length > 0) {
            const cols = Math.min(images.length, 4);
            imagesHtml = `
                <div class="news-images-grid" style="grid-template-columns: repeat(${cols}, 1fr);">
                    ${images.map(img => `<img src="${img}" alt="${news.title}" onclick="event.stopPropagation(); openLightbox('${img}')" />`).join('')}
                </div>
            `;
        }

        const shortContent = escapeHtml(news.content.substring(0, 120)).replace(/\n/g, ' ');
        const isLong = news.content.length > 120;
        const titleAttr = escapeHtml(news.title);
        const contentAttr = escapeHtml(news.content);

        return `
            <div class="news-card">
                ${imagesHtml}
                <span class="category">${news.category}</span>
                <h4>${escapeHtml(news.title)}</h4>
                <p style="font-size:0.95rem; color:var(--text-muted);">
                    ${shortContent}${isLong ? '...' : ''}
                </p>
                ${isLong ? `<button class="btn-read-more" data-title="${titleAttr}" data-content="${contentAttr}"><i class="fas fa-expand"></i> مشاهده کامل</button>` : ''}
                <div class="meta">
                    <span><i class="far fa-calendar-alt"></i> ${news.date || 'تاریخ نامشخص'}</span>
                </div>
            </div>
        `;
    }).join('');
}

// ===== نمایش گالری =====
function renderGallery() {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    if (galleryData.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted);">تصویری موجود نیست.</p>`;
        return;
    }
    container.innerHTML = galleryData.map(item => `
        <div class="gallery-item" onclick="openLightbox('${item.image}')">
            <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
            <div class="gallery-title">${escapeHtml(item.title || 'بدون عنوان')}</div>
        </div>
    `).join('');
}

// ===== فیلتر و جستجو =====
let currentFilter = 'all';
let currentSearch = '';

function filterNews() {
    let filtered = newsData;
    if (currentFilter !== 'all') {
        filtered = filtered.filter(n => n.category === currentFilter);
    }
    if (currentSearch.trim() !== '') {
        const s = currentSearch.trim().toLowerCase();
        filtered = filtered.filter(n =>
            n.title.toLowerCase().includes(s) ||
            n.content.toLowerCase().includes(s)
        );
    }
    renderNews(filtered);
}

// ===== مودال نمایش متن کامل =====
function openFullText(title, content) {
    document.getElementById('fullTextTitle').textContent = title;
    document.getElementById('fullTextContent').innerHTML = content.replace(/\n/g, '<br>');
    document.getElementById('fullTextModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeFullTextModal() {
    document.getElementById('fullTextModal').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('fullTextModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeFullTextModal();
});

// ===== Event Delegation برای دکمه‌های مشاهده کامل =====
document.getElementById('newsContainer')?.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-read-more');
    if (!btn) return;
    const title = btn.dataset.title;
    const content = btn.dataset.content;
    if (title && content) {
        openFullText(title, content);
    }
});

// ===== اعلان =====
function requestNotificationPermission() {
    if (!('Notification' in window)) return;
    if (Notification.permission === 'granted' || Notification.permission === 'denied') return;
    Notification.requestPermission();
}

// ===== دارک مود هوشمند =====
function autoDarkMode() {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 6) {
        if (!document.body.hasAttribute('data-theme')) {
            document.body.setAttribute('data-theme', 'night');
            localStorage.setItem('theme', 'night');
        }
    }
}

// ===== نمایش بخش‌ها با اسکرول =====
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// ===== دکمه بازگشت به بالا =====
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== منوی کناری =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

hamburgerBtn?.addEventListener('click', openSidebar);
closeSidebarBtn?.addEventListener('click', closeSidebar);
sidebarOverlay?.addEventListener('click', closeSidebar);

// ===== مدیریت تم =====
function setTheme(themeName) {
    const body = document.body;
    if (themeName === 'reset') {
        body.removeAttribute('data-theme');
        localStorage.removeItem('theme');
        autoDarkMode();
        return;
    }
    body.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
} else {
    autoDarkMode();
}

document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.addEventListener('click', function() {
        setTheme(this.dataset.themeBtn);
        closeSidebar();
    });
});

// ===== حالت مطالعه =====
const readingBtn = document.getElementById('readingBtnSidebar');
let readingMode = localStorage.getItem('readingMode') === 'true';

function toggleReadingMode() {
    readingMode = !readingMode;
    document.body.classList.toggle('reading-mode', readingMode);
    localStorage.setItem('readingMode', String(readingMode));
    readingBtn.classList.toggle('active', readingMode);
    readingBtn.innerHTML = readingMode ? '<i class="fas fa-eye-slash"></i> غیرفعال‌سازی' :
        '<i class="fas fa-eye"></i> فعال‌سازی';
}

if (readingMode) {
    document.body.classList.add('reading-mode');
    readingBtn.classList.add('active');
    readingBtn.innerHTML = '<i class="fas fa-eye-slash"></i> غیرفعال‌سازی';
}
readingBtn?.addEventListener('click', toggleReadingMode);

// ===== هایلایت منو =====
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id], header[id]').forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.style.borderBottomColor = 'transparent';
        link.style.background = 'transparent';
        if (link.getAttribute('href') === '#' + current) {
            link.style.borderBottomColor = 'var(--gold)';
            link.style.background = 'rgba(201, 168, 76, 0.1)';
        }
    });
});

// ===== مقداردهی اولیه =====
document.addEventListener('DOMContentLoaded', function() {
    applySettings();
    renderNews();
    renderGallery();
    requestNotificationPermission();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            filterNews();
        });
    });

    document.getElementById('newsSearchInput')?.addEventListener('input', function() {
        currentSearch = this.value;
        filterNews();
    });

    setTimeout(() => {
        document.querySelectorAll('.skeleton-loading').forEach(el => el.remove());
    }, 1000);

    setTimeout(() => {
        loadNoticeModal();
    }, 500);

    setTimeout(() => {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; bottom: 2rem; right: 2rem;
            background: rgba(26, 92, 58, 0.95); color: #f5f0e8;
            padding: 0.8rem 1.8rem; border-radius: 50px;
            font-size: 0.95rem; font-weight: 500;
            border: 2px solid var(--gold);
            box-shadow: 0 8px 30px rgba(0,0,0,0.3);
            z-index: 9999; backdrop-filter: blur(8px);
            animation: slideDown 0.5s ease;
            direction: rtl; font-family: var(--font);
        `;
        toast.innerHTML = '<i class="fas fa-mosque"></i> به وبگاه مسجد امام حسن مجتبی (ع) خوش آمدید';
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(30px)';
            setTimeout(() => toast.remove(), 600);
        }, 4000);
    }, 800);
});

// ===== توابع سراسری =====
window.closeNoticeModal = closeNoticeModal;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.closeFullTextModal = closeFullTextModal;
window.closeSidebar = closeSidebar;