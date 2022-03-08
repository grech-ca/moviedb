import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('char', { length: 100 })
  name: string;
}

