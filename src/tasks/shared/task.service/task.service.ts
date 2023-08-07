import { Injectable } from '@nestjs/common';
import { Task } from '../task/task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async getById(id: string): Promise<Task> {
    return await this.taskModel.findById(id).exec();
  }

  async create(task: Task): Promise<Task> {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  async update(id: string, task: Task): Promise<Task> {
    await this.taskModel.updateOne({ _id: id }, task).exec();
    return await this.taskModel.findById(id).exec();
  }

  async delete(id: string) {
    return await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
