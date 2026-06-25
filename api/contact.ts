import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ORDER_EMAIL = process.env.ORDER_EMAIL || 'aurea.shop.dz@gmail.com';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, message, lang } = req.body;

  if (!name || !phone || !message) {
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
        .badge { display: inline-block; background: #FFB7C5; color: #FF6C84; font-size: 10px; font-weight: 800; padding: 4px 12px; border-radius: 999px; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 20px; }
        .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
        .row:last-of-type { border: none; }
        .label { color: #64748b; font-weight: 600; }
        .value { color: #1e293b; font-weight: 700; }
        .message-box { background: #f8fafc; border-radius: 10px; padding: 16px; margin-top: 16px; border: 1px dashed #e2e8f0; font-size: 14px; color: #334155; line-height: 1.6; }
        .footer { text-align: center; margin-top: 24px; font-size: 11px; color: #94a3b8; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>AUREA Fine Jewelry</h1>
          <p>${isArabic ? 'رسالة تواصل جديدة!' : 'New contact message!'}</p>
        </div>
        <span class="badge">✉️ ${isArabic ? 'تواصل معنا' : 'Contact Message'}</span>
        
        <div class="row">
          <span class="label">${isArabic ? 'الاسم' : 'Name'}</span>
          <span class="value">${name}</span>
        </div>
        <div class="row">
          <span class="label">${isArabic ? 'رقم الهاتف' : 'Phone'}</span>
          <span class="value">+213 ${phone}</span>
        </div>
        <div class="row">
          <span class="label">${isArabic ? 'البريد الإلكتروني' : 'Email'}</span>
          <span class="value">${email || (isArabic ? 'لم يتم تقديمه' : 'Not provided')}</span>
        </div>

        <div class="message-box">
          <strong>${isArabic ? 'الرسالة:' : 'Message:'}</strong><br/>
          ${message.replace(/\n/g, '<br/>')}
        </div>

        <div class="footer">
          ${isArabic ? 'تم إرسال هذه الرسالة عبر نموذج الاتصال بموقع أوريا' : 'Sent via AUREA contact form'}<br/>
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
      subject: `✉️ ${isArabic ? 'رسالة جديدة من' : 'New message from'} ${name}`,
      html: htmlBody,
    });

    console.log('[AUREA] Contact email sent:', result);
    return res.json({ success: true, id: (result as any).data?.id });
  } catch (err: any) {
    console.error('[AUREA] Resend error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
}
