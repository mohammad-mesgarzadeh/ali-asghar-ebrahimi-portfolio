export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  role: string;
  description: string;
  year?: string;
  image?: string;
  category: 'صنعتی' | 'ساختمانی' | 'سیویل';
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
    name: 'پروژه اجرای ساختمان',
    location: 'تهران',
    type: 'ساختمانی',
    role: 'سرپرست اجرا',
    description: 'نظارت بر اجرای عملیات ساختمانی و سازه فلزی',
    year: '۱۴۰۰',
    image: '/images/project-2.jpg',
    category: 'ساختمانی',
  },
];