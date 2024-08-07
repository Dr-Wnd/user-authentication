import { Schema, model, Document } from 'mongoose';

interface ITask extends Document {
  title: string;
  description: string;
  dueDate: Date;
  status: 'To Do' | 'In Progress' | 'Done';
  userId: Schema.Types.ObjectId;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default model<ITask>('Task', taskSchema);