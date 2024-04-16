import { DesignationController } from './designation.controller';
import { DesignationService } from './designation.service';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import { Users } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { CreateDesignatinDto } from './dto/create.designation.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

// Mocked AuthUserInfo object
const mockAuthUserInfo: Users = {
  id: 1,
  username: 'exampleUsername',
  password: 'examplePassword',
  mobileNumber: '1234567890',
  emailAddress: 'example@example.com',
  deptId: 1,
  desigId: 1,
  roleId: 1,
  orgId: 1,
  companyId: 1,
  activeStatus: true,
  createdDate: null,
  createdTime: null,
  createdBy: null,
  createdAt: null,
  updatedDate: null,
  updatedTime: null,
  updatedAt: null,
};

const MockPrismaService = {
  designation: {
    create: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
  },
};

describe('DesignationController', () => {
  let controller: DesignationController;
  let service: DesignationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesignationController],
      providers: [
        DesignationService,
        { provide: PrismaService, useValue: MockPrismaService },
        { provide: CACHE_MANAGER, useValue: {} },
      ],
    }).compile();

    controller = module.get<DesignationController>(DesignationController);
    service = module.get<DesignationService>(DesignationService);
  });

  describe('create', () => {
    const authUserInfo = mockAuthUserInfo;
    it('should create a new designation', async () => {
      const createDesignationDto: CreateDesignatinDto = {
        designationName: 'string',
        designationDes: 'string',
        orgId: 1,
        serialNo: 1,
        createdBy: 1,
      };

      const createdDesignation = {
        id: 1, // Ensure this matches the structure of the expected return type
        ...createDesignationDto,
      };

      jest
        .spyOn(service, 'create')
        .mockResolvedValue(createdDesignation as any);

      // Call the create method with the DTO and mockAuthUserInfo
      const result = await controller.create(
        createDesignationDto,
        authUserInfo,
      );

      // Expectations
      expect(result).toEqual({
        message: 'Created Successfully',
        success: true,
        status: HttpStatus.CREATED,
        results: createdDesignation,
      });
      expect(service.create).toHaveBeenCalledWith(
        createDesignationDto,
        authUserInfo,
      );
    });
  });
});
