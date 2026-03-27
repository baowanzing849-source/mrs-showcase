export type ScriptItem = {
  slug: string
  title: string
  category: string
  categoryLabel: string
  thumbnail: string
  cover: string
  youtubeId: string
  summary: string
  description: string
  shortInfo: string
  framework: string
  status: string
  featured?: boolean
  features: string[]
  gallery: string[]
}

const scripts: ScriptItem[] = [
  // {
  //   slug: 'garage-system',
  //   title: 'Garage System',
  //   category: 'apocalypse',
  //   categoryLabel: 'Apocalypse',
  //   thumbnail: '/images/scripts/garage-thumb.png',
  //   cover: '/images/scripts/garage-cover.jpg',
  //   youtubeId: 'dQw4w9WgXcQ',
  //   summary: 'ระบบโรงจอดรถและจัดการยานพาหนะในสไตล์ immersive',
  //   description: 'ระบบ Garage สำหรับหน้าโชว์ผลงานที่มีทั้งภาพ วิดีโอ รายละเอียด และ gallery แบบแยกหน้าให้ดูมืออาชีพกว่าเดิม',
  //   shortInfo: 'Advanced vehicle storage showcase',
  //   framework: 'QBCore / ESX',
  //   status: 'Completed',
  //   featured: true,
  //   features: [
  //     'Dedicated detail page',
  //     'YouTube embed demo',
  //     'Gallery with multiple media',
  //     'Professional dark layout',
  //     'Multi-format image support',
  //   ],
  //   gallery: [
  //     '/images/scripts/garage-1.jpg',
  //     '/images/scripts/garage-2.png',
  //     '/images/scripts/garage-3.webp',
  //   ],
  // },
  {
    slug: 'enemy-spawn-system',
    title: 'Enemy Spawn System',
    category: 'combat-ai',
    categoryLabel: 'Combat / AI',
    thumbnail: '/images/scripts/enemy-thumb.jpg',
    cover: '/images/scripts/enemy-cover.png',
    youtubeId: 'Oiy7z_I-24Q',
    summary: 'ระบบ spawn ศัตรู, patrol, guard และ zone behavior',
    description: 'ระบบ AI combat ที่พรีเซนต์ออกมาในหน้า detail แบบซ้ายข้อมูล ขวาวิดีโอ และมีภาพ gallery เพิ่มมิติในการโชว์ผลงาน',
    shortInfo: 'AI combat showcase',
    framework: 'QBCore',
    status: 'Completed',
    featured: true,
    features: [
      'AI behavior showcase',
      'Category based navigation',
      'Smooth portfolio browsing',
      'Flexible image format usage',
    ],
    gallery: [
      '/images/scripts/enemy-1.jpeg',
      '/images/scripts/enemy-2.jpg',
    ],
  },
  {
    slug: 'Farming system 0.5 (BETA)',
    title: 'Farming System',
    category: 'utility',
    categoryLabel: 'Regular',
    thumbnail: '/images/scripts/farming-thumb.jpg',
    cover: '/images/scripts/farming-cover.png',
    youtubeId: '7pruusTp8Mg',
    summary: 'ปลูกผัก รดน้ำ ใส่ปุ๋ย เก็บ',
    description: 'ระบบ ปลูกผักทำสวนอย่างเพลิดเพลิน มีระดับการเจริยเติบโตแบบสมจริง',
    shortInfo: 'Farming system showcase',
    framework: 'QBCore',
    status: 'Beta',
    featured: true,
    features: [
      'Category based navigation',
      'Smooth portfolio browsing',
      'Flexible image format usage',
    ],
    gallery: [
      '/images/scripts/farming-1.jpeg',
      '/images/scripts/farming-2.jpg',
    ],
  },
  // {
  //   slug: 'warz-hud',
  //   title: 'WarZ HUD',
  //   category: 'ui-hud',
  //   categoryLabel: 'UI / HUD',
  //   thumbnail: '/images/scripts/hud-thumb.webp',
  //   cover: '/images/scripts/hud-cover.jpg',
  //   youtubeId: 'M7lc1UVf-VE',
  //   summary: 'HUD สำหรับเซิร์ฟแนว apocalypse พร้อมหน้าโชว์งานแยก',
  //   description: 'งาน UI/HUD ที่ถูกจัด layout ให้ดูมีระดับขึ้น ทั้ง hero image, video section และ gallery preview ในหน้าเดียว',
  //   shortInfo: 'HUD portfolio presentation',
  //   framework: 'QBCore / ESX',
  //   status: 'Completed',
  //   featured: false,
  //   features: [
  //     'Standalone script detail page',
  //     'Media-rich presentation',
  //     'Premium layered design',
  //   ],
  //   gallery: [
  //     '/images/scripts/hud-1.jpg',
  //     '/images/scripts/hud-2.png',
  //     '/images/scripts/hud-3.jpeg',
  //   ],
  // },
  // {
  //   slug: 'radio-notification',
  //   title: 'Radio Notification',
  //   category: 'utility',
  //   categoryLabel: 'Utility',
  //   thumbnail: '/images/scripts/radio-thumb.png',
  //   cover: '/images/scripts/radio-cover.webp',
  //   youtubeId: 'ScMzIvxBSi4',
  //   summary: 'ระบบประกาศข้อความ/วิทยุ พร้อมหน้าพรีเซนต์งานแบบ professional',
  //   description: 'Utility system ที่นำมาโชว์ในรูปแบบพรีเมียม ใช้แผงข้อมูลและสื่อประกอบให้ภาพรวมดูไม่แบนและไม่กาก',
  //   shortInfo: 'Utility system showcase',
  //   framework: 'QBCore',
  //   status: 'Completed',
  //   featured: true,
  //   features: [
  //     'Flexible media support',
  //     'Store-like structure without selling',
  //     'Elegant content layout',
  //   ],
  //   gallery: [
  //     '/images/scripts/radio-1.jpg',
  //     '/images/scripts/radio-2.png',
  //   ],
  // },
]

export function getAllScripts() {
  return scripts
}

export function getScriptBySlug(slug: string) {
  return scripts.find((item) => item.slug === slug)
}

export function getScriptsByCategory(category: string) {
  return scripts.filter((item) => item.category === category)
}

export function getFeaturedScripts() {
  return scripts.filter((item) => item.featured)
}
