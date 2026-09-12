export interface Skill {
  id: string;
  title: string;
  category: string;
}

export const skills: Skill[] = [
  {
    id: '1',
    title: 'مدیریت پروژه',
    category: 'حرفه‌ای',
  },
  {
    id: '2',
    title: 'مدیریت کارگاه',
    category: 'حرفه‌ای',
  },
  {
    id: '3',
    title: 'اجرای سیویل',
    category: 'حرفه‌ای',
  },
  {
    id: '4',
    title: 'نظارت بر عملیات اجرایی',
    category: 'حرفه‌ای',
  },
  {
    id: '5',
    title: 'اجرای ساختمان',
    category: 'تخصصی',
  },
  {
    id: '6',
    title: 'عملیات خاکی',
    category: 'تخصصی',
  },
  {
    id: '7',
    title: 'سازه‌های فلزی',
    category: 'تخصصی',
  },
  {
    id: '8',
    title: 'محوطه‌سازی',
    category: 'تخصصی',
  },
  {
    id: '9',
    title: 'متره و برآورد',
    category: 'تخصصی',
  },
  {
    id: '10',
    title: 'خرید و تأمین',
    category: 'تخصصی',
  },
  {
    id: '11',
    title: 'مدیریت دفتر',
    category: 'تخصصی',
  },
];
