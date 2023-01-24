import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
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
  @ManyToOne(() => CategoryEntity, (category) => category.product)
  category: CategoryEntity;

  @Column('varchar', {
    name: 'title',
    unique: true,
    comment: 'titulo de producto',
  })
  title: string;


}
