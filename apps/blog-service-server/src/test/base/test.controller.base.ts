/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TestService } from "../test.service";
import { TestCreateInput } from "./TestCreateInput";
import { Test } from "./Test";
import { TestFindManyArgs } from "./TestFindManyArgs";
import { TestWhereUniqueInput } from "./TestWhereUniqueInput";
import { TestUpdateInput } from "./TestUpdateInput";

export class TestControllerBase {
  constructor(protected readonly service: TestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Test })
  async createTest(@common.Body() data: TestCreateInput): Promise<Test> {
    return await this.service.createTest({
      data: data,
      select: {
        createdAt: true,
        date: true,
        id: true,
        numberField: true,
        stringField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Test] })
  @ApiNestedQuery(TestFindManyArgs)
  async tests(@common.Req() request: Request): Promise<Test[]> {
    const args = plainToClass(TestFindManyArgs, request.query);
    return this.service.tests({
      ...args,
      select: {
        createdAt: true,
        date: true,
        id: true,
        numberField: true,
        stringField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Test })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async test(
    @common.Param() params: TestWhereUniqueInput
  ): Promise<Test | null> {
    const result = await this.service.test({
      where: params,
      select: {
        createdAt: true,
        date: true,
        id: true,
        numberField: true,
        stringField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Test })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTest(
    @common.Param() params: TestWhereUniqueInput,
    @common.Body() data: TestUpdateInput
  ): Promise<Test | null> {
    try {
      return await this.service.updateTest({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
          id: true,
          numberField: true,
          stringField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Test })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTest(
    @common.Param() params: TestWhereUniqueInput
  ): Promise<Test | null> {
    try {
      return await this.service.deleteTest({
        where: params,
        select: {
          createdAt: true,
          date: true,
          id: true,
          numberField: true,
          stringField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
