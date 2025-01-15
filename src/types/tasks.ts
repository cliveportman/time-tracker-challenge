export type Task = {
  id: string;
  title: string;
  description?: string;
  timeSpent: number; // in seconds
  isActive: boolean;
  createdAt: Date;
  lastStartedAt?: Date;
}
