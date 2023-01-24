import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products', { schema: 'ventas' })
export class ProductEntity {
  @PrimaryGeneratedColumn('ventas')
  id: string;

  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @DeleteDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    nullable: true,
  })
  deleteAt: Date;
  //Relaciones
}
