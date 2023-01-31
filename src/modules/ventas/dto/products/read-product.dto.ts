import { Expose } from 'class-transformer';
import { CategoryEntity } from '../../entities/category.entity';
import { BaseProductDto } from './base-product.dto';

export class ReadProductDto extends BaseProductDto {

  @Expose()
  readonly title: string;

  @Expose()
  readonly price: number;

  @Expose()
  readonly category: CategoryEntity;

}