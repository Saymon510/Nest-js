import { IsOptional, IsString } from 'class-validator';
import { IsStringValidationOptions } from '@shared/validation';
import { PaginationDto } from '../pagination.dto';

export class FilterProtuctDto extends PaginationDto {

  @IsOptional()
  @IsString(IsStringValidationOptions())
  readonly title: string;

}