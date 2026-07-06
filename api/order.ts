import { Resend } from 'resend';
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);
const ORDER_EMAIL = process.env.ORDER_EMAIL || 'aurea.shop.dz@gmail.com';

const META_PIXEL_ID = process.env.META_PIXEL_ID || '2149341695632178';
const META_PIXEL_ID_2 = '27809311165361767';
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || '';

const sha256 = (value: string): string =>
  crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');

const sendCapiEvent = async (payload: object): Promise<void> => {
  if (!META_ACCESS_TOKEN) {
    console.warn('[AUREA CAPI] META_ACCESS_TOKEN not set — skipping CAPI.');
    return;
  }
  const pixelIds = [META_PIXEL_ID, META_PIXEL_ID_2];
  for (const pixelId of pixelIds) {
    try {
      const url = `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${META_ACCESS_TOKEN}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      console.log(`[AUREA CAPI] Pixel ${pixelId} Response:`, JSON.stringify(json));
    } catch (err: any) {
      console.error(`[AUREA CAPI] Pixel ${pixelId} Error:`, err.message);
    }
  }
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name, phone, wilaya, commune, productName, chain, bundle,
    totalPrice, lang, purchaseEventId,
  } = req.body;

  if (!name || !phone || !wilaya || !commune || !productName) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const isArabic = lang === 'ar';

  const htmlBody = `
    <!DOCTYPE html>
    <html dir="${isArabic ? 'rtl' : 'ltr'}" lang="${lang || 'ar'}">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 20px; }
        .card { background: white; border-radius: 16px; padding: 32px; max-width: 560px; margin: 0 auto; box-shadow: 0 4px 20px rgba(255,108,132,0.1); border: 1px solid #FFD6DD; }
        .header { background: linear-gradient(135deg, #FF6C84, #FFB7C5); border-radius: 12px; padding: 20px 24px; margin-bottom: 24px; color: white; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 900; letter-spacing: 0.2em; }
        .header p { margin: 4px 0 0; opacity: 0.85; font-size: 13px; }
        .badge { display: inline-block; background: #FF6C84; color: white; font-size: 10px; font-weight: 800; padding: 4px 12px; border-radius: 999px; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 20px; }
        .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
        .row:last-of-type { border: none; }
        .label { color: #64748b; font-weight: 600; }
        .value { color: #1e293b; font-weight: 700; }
        .total-row { background: #FFF4F3; border-radius: 10px; padding: 14px 16px; margin-top: 16px; display: flex; justify-content: space-between; }
        .total-label { font-size: 15px; font-weight: 800; color: #1e293b; }
        .total-amount { font-size: 18px; font-weight: 900; color: #FF6C84; }
        .footer { text-align: center; margin-top: 24px; font-size: 11px; color: #94a3b8; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>AUREA Fine Jewelry</h1>
          <p>${isArabic ? 'طلب جديد وصلك!' : 'You have a new order!'}</p>
        </div>
        <span class="badge">🛍️ ${isArabic ? 'طلب جديد' : 'New Order'}</span>
        
        <div class="row">
          <span class="label">${isArabic ? 'اسم العميل' : 'Customer Name'}</span>
          <span class="value">${name}</span>
        </div>
        <div class="row">
          <span class="label">${isArabic ? 'رقم الهاتف' : 'Phone Number'}</span>
          <span class="value">+213 ${phone}</span>
        </div>
        <div class="row">
          <span class="label">${isArabic ? 'الولاية' : 'Wilaya'}</span>
          <span class="value">${wilaya}</span>
        </div>
        <div class="row">
          <span class="label">${isArabic ? 'البلدية' : 'Commune'}</span>
          <span class="value">${commune}</span>
        </div>
        <div class="row">
          <span class="label">${isArabic ? 'المنتج المطلوب' : 'Product'}</span>
          <span class="value">${productName}</span>
        </div>
        <div class="row">
          <span class="label">${isArabic ? 'نوع السلسلة' : 'Chain'}</span>
          <span class="value">${chain === 'Gold' ? (isArabic ? 'ذهبي 🟡' : 'Gold Tone 🟡') : (isArabic ? 'فضي ⚪' : 'Silver Tone ⚪')}</span>
        </div>
        <div class="row">
          <span class="label">${isArabic ? 'العرض المختار' : 'Bundle'}</span>
          <span class="value">${bundle}</span>
        </div>

        <div class="total-row">
          <span class="total-label">${isArabic ? 'المبلغ الإجمالي (الدفع عند الاستلام)' : 'Total (Cash on Delivery)'}</span>
          <span class="total-amount">${totalPrice}</span>
        </div>

        <div class="footer">
          ${isArabic ? 'تم استلام هذا الطلب عبر موقع أوريا للمجوهرات' : 'This order was placed via AUREA Fine Jewelry website'}<br/>
          aurea.shop.dz@gmail.com
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ORDER_EMAIL,
      subject: `🛍️ ${isArabic ? 'طلب جديد من' : 'New Order from'} ${name} — ${totalPrice}`,
      html: htmlBody,
    });

    console.log('[AUREA] Order email sent:', result);

    // ── Meta Conversion API — Purchase event ──────────────────────────────
    const rawPhone = String(phone).replace(/[\s\-\.]/g, '');
    const normPhone = rawPhone.startsWith('0') ? `213${rawPhone.slice(1)}` : rawPhone;
    const numericValue = parseFloat(String(totalPrice).replace(/[^\d.]/g, '')) || 0;

    await sendCapiEvent({
      data: [
        {
          event_name: 'Purchase',
          event_time: Math.floor(Date.now() / 1000),
          event_id: purchaseEventId || `order-${Date.now()}`,
          action_source: 'website',
          user_data: {
            ph: [sha256(normPhone)],
            country: [sha256('dz')],
          },
          custom_data: {
            currency: 'DZD',
            value: numericValue,
            content_name: productName,
            content_type: 'product',
          },
        },
      ],
      test_event_code: process.env.META_TEST_EVENT_CODE || 'TEST91947',
    });

    return res.json({ success: true, id: (result as any).data?.id });
  } catch (err: any) {
    console.error('[AUREA] Resend error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
}
