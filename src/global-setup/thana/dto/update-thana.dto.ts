import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class UpdateThanatDto {
  @IsNotEmpty()
  @IsString()
  thanaName: string;

  @IsOptional()
  @IsString()
  thanaDes: string;

  @IsOptional()
  @IsNumber()
  orgId: number;

  @IsOptional()
  @IsNumber()
  serialNo: number;
  
  @IsNotEmpty()
  @IsNumber()
  dristrictId

  @IsOptional()
  @IsNumber()
  activeStatus: boolean;
}
