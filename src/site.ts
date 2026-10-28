// All the site's text and settings in one place.
// Edit this file to change copy, photos, cities or the form endpoint.

import fireplace from './assets/photos/fireplace.png';
import firewall from './assets/photos/firewall.png';
import brick from './assets/photos/brick.png';
import riverrock from './assets/photos/riverrock.png';
import cmuEnclosure from './assets/photos/cmu-enclosure.png';
import stackedStone from './assets/photos/stacked-stone.png';

export const photos = { fireplace, firewall, brick, riverrock, cmuEnclosure, stackedStone };

export const BUSINESS = {
  name: 'Mountainview Masonry Ltd.',
  phone: '604-889-9042',
  phoneHref: 'tel:16048899042',
  city: 'Mission',
  region: 'BC',
  instagram: 'https://www.instagram.com/mountainviewmasonryltd/',
  tagline: 'Quality Masonry. Reliable Service. Built to Last.',
};

// Where the quote form sends its data.
// TODO: create a form at https://formspree.io (file uploads need a paid plan),
// then paste its URL here, e.g. 'https://formspree.io/f/abcdwxyz'.
// While this is empty, the form tells visitors to call instead of pretending to send.
export const FORM_ENDPOINT = '';

export const FACTS = [
  { t: 'Residential', d: 'and commercial' },
  { t: 'Lower Mainland', d: 'and Fraser Valley' },
  { t: 'Small jobs', d: 'to large developments' },
];

export const TRADES = [
  {
    k: 'Brick',
    t: 'Brick veneer and thin brick',
    items: ['Brick and block installation', 'Full brick veneer', 'Thin brick'],
    img: brick,
    pos: 'center 55%',
  },
  {
    k: 'Block',
    t: 'CMU block walls and firewalls',
    items: ['CMU block walls', 'Firewalls'],
    img: cmuEnclosure,
    pos: 'center 55%',
  },
  {
    k: 'Stone',
    t: 'Natural and manufactured stone veneer',
    items: ['Natural stone veneer', 'Manufactured stone veneer'],
    img: riverrock,
    pos: 'center 62%',
  },
];

export const POINTS = [
  { t: 'Quality workmanship', d: 'We take pride in every wall we build.' },
  { t: 'Professional job sites', d: 'Organised, tidy sites that work around your other trades.' },
  { t: 'Long-term relationships', d: 'We want to be the sub you call on the next job too.' },
  { t: 'Projects of any size', d: 'From a single fireplace to a large-scale development.' },
];

export const WORK = [
  { img: fireplace, k: 'Stone', t: 'Natural stone fireplace', pos: 'center 40%', ratio: '3/4' },
  { img: firewall, k: 'Block', t: 'CMU firewall, multi-storey wood frame', pos: 'center 35%', ratio: '1/1' },
  { img: brick, k: 'Brick', t: 'Brick veneer, multi-storey building', pos: 'center', ratio: '4/5' },
  { img: riverrock, k: 'Stone', t: 'River rock veneer, out-of-town Airbnb', pos: 'center 60%', ratio: '4/5' },
  { img: cmuEnclosure, k: 'Block', t: 'Split-face CMU enclosure', pos: 'center 60%', ratio: '1/1' },
  { img: stackedStone, k: 'Stone', t: 'Manufactured stacked stone base', pos: 'center 62%', ratio: '3/4' },
];

export const AREAS = ['Vancouver', 'Burnaby', 'Surrey', 'Langley', 'Maple Ridge', 'Mission', 'Abbotsford', 'Chilliwack'];

export const SCOPE = ['Brick veneer', 'Thin brick', 'CMU block walls', 'Firewalls', 'Stone veneer', 'Repairs / repointing'];
