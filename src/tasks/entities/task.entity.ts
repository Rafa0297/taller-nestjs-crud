import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid') // ID autoincremental
  id?: string;

  @Column() // Columna de texto
  title?: string;

  @Column()
  description?: string;

  @Column({ default: false }) // Por defecto, la tarea no está completada
  isCompleted?: boolean;
}
