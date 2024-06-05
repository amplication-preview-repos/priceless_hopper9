/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Fare as PrismaFare } from "@prisma/client";

export class FareServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FareCountArgs, "select">): Promise<number> {
    return this.prisma.fare.count(args);
  }

  async fares<T extends Prisma.FareFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FareFindManyArgs>
  ): Promise<PrismaFare[]> {
    return this.prisma.fare.findMany<Prisma.FareFindManyArgs>(args);
  }
  async fare<T extends Prisma.FareFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FareFindUniqueArgs>
  ): Promise<PrismaFare | null> {
    return this.prisma.fare.findUnique(args);
  }
  async createFare<T extends Prisma.FareCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FareCreateArgs>
  ): Promise<PrismaFare> {
    return this.prisma.fare.create<T>(args);
  }
  async updateFare<T extends Prisma.FareUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FareUpdateArgs>
  ): Promise<PrismaFare> {
    return this.prisma.fare.update<T>(args);
  }
  async deleteFare<T extends Prisma.FareDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FareDeleteArgs>
  ): Promise<PrismaFare> {
    return this.prisma.fare.delete(args);
  }
}