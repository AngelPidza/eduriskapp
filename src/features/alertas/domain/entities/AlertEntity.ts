export interface AlertEntity {
  id: string;
  title: string;
  message: string;
  type: 'warning' | 'info' | 'urgent';
  date: Date;
  isRead: boolean;
}
