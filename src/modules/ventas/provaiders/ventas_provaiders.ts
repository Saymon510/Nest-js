import { DataSource } from 'typeorm';
import { ProductEntity } from '@ventas/entities';

import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
import { CategoryEntity } from '../entities/category.entity';

export const ventasProviders = [
  {
    provide: RepositoryEnum.Product_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CATEGORY_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CategoryEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
];