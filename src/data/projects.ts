export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  role: string;
  description: string;
  year?: string;
  image?: string;
  category: 'صنعتی' | 'ساختمانی' | 'سیویل' | 'بازسازی';
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'پروژه صنعتی منطقه پارس جنوبی',
    location: 'عسلویه، منطقه پارس جنوبی',
    type: 'پروژه صنعتی',
    role: 'مهندس اجرایی پروژه',
    description:
      'فعالیت در پروژه صنعتی پتروشیمی و پالایشگاه فراسکو به‌عنوان مهندس اجرایی پروژه، با مسئولیت نظارت و پیگیری مستقیم امور اجرایی تحت مدیریت و نظارت مستقیم مدیرعامل.',
    year: '۱۴۰۴',
    image:
      '/ali-asghar-ebrahimi-portfolio/images/photo_2026-09-13_21-03-39.jpg',
    category: 'صنعتی',
  },
  {
    id: '2',
    name: 'پروژه ساختمان آشیانه ریاست جمهوری',
    location: 'فرودگاه مهرآباد، تهران',
    type: 'ساختمانی',
    role: 'سرپرست اجرایی',
    description:
      'سرپرستی و نظارت بر اجرای عملیات ساختمانی پروژه آشیانه ریاست جمهوری نیروی هوایی ایران در فرودگاه مهرآباد، شامل هماهنگی فعالیت‌های اجرایی، کنترل کیفیت و پیشبرد مراحل ساخت پروژه.',
    year: '۱۳۹۸ - ۱۴۰۰',
    image: '/ali-asghar-ebrahimi-portfolio/images/photo_2026-10-01_18-02-09.jpg',
    category: 'ساختمانی',
  },
  {
    id: '3',

    name: 'پروژه بازسازی منزل مسکونی',

    location: 'شاهین‌شهر، اصفهان',

    type: 'بازسازی',

    role: 'سرپرست اجرایی',

    description:
      'سرپرستی و نظارت بر عملیات بازسازی یک واحد مسکونی در شاهین‌شهر اصفهان، شامل برنامه‌ریزی و هماهنگی فعالیت‌های اجرایی، کنترل کیفیت مراحل بازسازی، مدیریت نیروهای اجرایی و تحویل پروژه مطابق زمان‌بندی تعیین‌شده.',

    year: '۱۴۰۰/۰۲ - ۱۴۰۰/۰۶',

    image: '/ali-asghar-ebrahimi-portfolio/images/photo_2026-10-01_18-03-50.png',
    category: 'بازسازی',
  },
];