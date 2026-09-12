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
  // Projects can be added here with the following structure:
  // {
  //   id: '1',
  //   name: 'نام پروژه',
  //   location: 'موقعیت',
  //   type: 'نوع پروژه',
  //   role: 'نقش مهندس',
  //   description: 'توضیحات پروژه',
  //   year: '۱۴۰۲',
  //   image: '/images/project-1.jpg',
  //   category: 'صنعتی' | 'ساختمانی' | 'سیویل'
  // }
];
