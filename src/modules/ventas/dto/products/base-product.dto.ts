import { IsNotEmpty, IsString, ArrayNotEmpty, IsNumber, IsPositive } from "class-validator";
import { 
    IsNotEmptyValidationOptions, 
    IsStringValidationOptions, 
    IsNumberValidationOptions, 
    ArrayNotEmptyValidationOptions, 
    IsPositiveValidationOptions } from "@shared/validator";

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
    readonly description: string;

    @IsNotEmpty(IsNotEmptyValidationOptions())
    @ArrayNotEmpty(ArrayNotEmptyValidationOptions())
    readonly images : string[];
}