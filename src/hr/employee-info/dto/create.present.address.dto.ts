import { Injectable } from "@nestjs/common";
import {IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()

export class CreatePresentAddressDto { 
    @IsOptional()
    @IsNumber()
    presentDiviId: number

    @IsOptional()
    @IsNumber()
    presentDistId
    @IsOptional()
    @IsNumber()
    presentPSId
    @IsOptional()
    @IsNumber()
    presentCityCor
    @IsOptional()
    @IsString()
    presentWord
    @IsOptional()
    @IsString()
    presentWordNo
    @IsOptional()
    @IsString()
    presentVillRoad 
    @IsOptional()
    @IsString()
    presentBasHolding
    @IsOptional()
    @IsString()
    presentPostOffice
    @IsOptional()
    @IsString()
    presentPostOfficeCode
    @IsOptional()
    @IsString()
    perDiviId
    @IsOptional()
    @IsNumber()
    pertDisId
    @IsOptional()
    @IsNumber()
    pertPSId
    @IsOptional()
    @IsNumber()
    perCityCor
    @IsOptional()
    @IsString()
    perWord
    @IsOptional()
    @IsString()
    perWordNo
    @IsOptional()
    @IsString()
    perVillRoad
    @IsOptional()
    @IsString()
    perBasHolding
    @IsOptional()
    @IsString()
    perPostOffice
    @IsOptional()
    @IsString()
    perPostOfficeCode
}