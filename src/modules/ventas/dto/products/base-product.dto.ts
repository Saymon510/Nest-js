import { CategoryEntity } from '../../entities/category.entity';
import {
  Allow,
  IsNotEmpty,
  ArrayNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import {
  IsNotEmptyValidationOptions,
  IsStringValidationOptions,
  IsNumberValidationOptions,
  IsPositiveValidationOptions,
  ArrayNotEmptValidationOptions,
} from '@shared/validation';

export class BaseProductDto {
  @IsNotEmpty(IsNotEmptyValidationOptions())
  @IsString(IsStringValidationOptions())
  readonly title: string;

  @IsNotEmpty(IsNotEmptyValidationOptions())
  @IsNumber(IsNumberValidationOptions())
  @IsPositive(IsPositiveValidationOptions())
  readonly price: number;

  @IsNotEmpty(IsNotEmptyValidationOptions())
  @IsString(IsStringValidationOptions())
  readonly descripcion: string;

  @IsNotEmpty(IsNotEmptyValidationOptions())
  @ArrayNotEmpty(ArrayNotEmptValidationOptions())
  readonly images: string[];

  @Allow()
  readonly category: CategoryEntity;
}
