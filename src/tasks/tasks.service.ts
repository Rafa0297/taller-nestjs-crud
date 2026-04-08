import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  private idCounter = 1;

  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newtask: Task = {
      id: this.idCounter++,
      title: createTaskDto.title,
      description: createTaskDto.description,
      isCompleted: false,
    };
    return await this.taskRepository.save(newtask);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) throw new NotFoundException(`Task with id ${id} not found`);
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const updatedTask = await this.taskRepository.findOne({ where: { id } });
    if (!updatedTask)
      throw new NotFoundException(`Task with id ${id} not found`);

    if (updateTaskDto.title !== undefined) {
      updatedTask.title = updateTaskDto.title;
    }

    if (updateTaskDto.description !== undefined) {
      updatedTask.description = updateTaskDto.description;
    }

    if (updateTaskDto.isCompleted !== undefined) {
      updatedTask.isCompleted = updateTaskDto.isCompleted;
    }

    return await this.taskRepository.save(updatedTask);
  }

  async remove(id: number) {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) throw new NotFoundException(`Task with id ${id} not found`);
    await this.taskRepository.remove(task);
    return { message: `Task with id ${id} has been removed` };
  }
}
