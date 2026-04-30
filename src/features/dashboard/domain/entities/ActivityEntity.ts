export interface ActivityEntity {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'assignment' | 'exam' | 'grade' | 'alert';
  isRead: boolean;
}
