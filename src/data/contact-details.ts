// Private contact details — SERVER ONLY.
//
// These are kept out of personal-info.json on purpose: that file is bundled
// into client-side JavaScript and served at /json, so anything in it can be
// read by visitors even when it isn't shown on the page.
//
// Only import this file from Server Components (no 'use client').
//
// To show your email and/or phone on the site again, flip the flags below
// to `true` and restart / redeploy. `showInfoCard` shows or hides the whole
// "Contact Information" card next to the contact form.

export const CONTACT_VISIBILITY = {
  showEmail: false,
  showPhone: false,
  showInfoCard: false,
} as const;

const EMAIL = 'coryrash.apex@gmail.com';
const PHONE_DISPLAY = '+1 223 777 0040';
const PHONE_DIAL = '+12237770040';

export interface ContactChannel {
  readonly display: string;
  readonly href: string;
}

export const contactEmail: ContactChannel | null = CONTACT_VISIBILITY.showEmail
  ? { display: EMAIL, href: `mailto:${EMAIL}` }
  : null;

export const contactPhone: ContactChannel | null = CONTACT_VISIBILITY.showPhone
  ? { display: PHONE_DISPLAY, href: `tel:${PHONE_DIAL}` }
  : null;
