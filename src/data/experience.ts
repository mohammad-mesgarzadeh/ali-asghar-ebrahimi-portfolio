export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  responsibilities?: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    position: 'مدیر پروژه',
    company: 'گسترش صنعت ایران',
    location: 'عسلویه',
    startDate: 'اردیبهشت ۱۴۰۴',
    endDate: 'کنون',
    duration: '۱ سال و ۲ ماه',
    responsibilities: [
      'مدیریت پروژه',
      'تجهیز کارگاه صنعتی و ساختمانی',
      'سرپرستی اجرای سیویل',
      'مدیریت اجرای دفتر تهران',
    ],
  },
  {
    id: '2',
    position: 'رئیس پشتیبانی',
    company: 'گسترش صنعت ایران',
    location: 'تهران',
    startDate: 'فروردین ۱۴۰۵',
    endDate: 'کنون',
    duration: '۱ سال و ۲ ماه',
  },
  {
    id: '3',
    position: 'کارمند فروش',
    company: 'کارخانه وستور',
    location: 'تهران',
    startDate: 'آبان ۱۴۰۱',
    endDate: 'اسفند ۱۴۰۲',
    duration: '۱ سال و ۴ ماه',
  },
  {
    id: '4',
    position: 'سرپرست اجرای ساختمان',
    company: 'شرکت احداث پژوهان',
    location: 'تهران',
    startDate: 'مهر ۱۳۹۸',
    endDate: 'دی ۱۴۰۰',
    duration: '۲ سال و ۳ ماه',
    responsibilities: [
      'اجرای عملیات خاکی',
      'اجرای ابنیه مسکونی و صنعتی',
      'اجرای سازه‌های فلزی',
      'محوطه‌سازی',
      'متره',
      'برآورد',
      'نظارت بر اجرای عملیات',
    ],
  },
];
