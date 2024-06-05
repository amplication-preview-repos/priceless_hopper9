/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DeviceInfo as PrismaDeviceInfo } from "@prisma/client";

export class DeviceInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DeviceInfoCountArgs, "select">
  ): Promise<number> {
    return this.prisma.deviceInfo.count(args);
  }

  async deviceInfos<T extends Prisma.DeviceInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceInfoFindManyArgs>
  ): Promise<PrismaDeviceInfo[]> {
    return this.prisma.deviceInfo.findMany<Prisma.DeviceInfoFindManyArgs>(args);
  }
  async deviceInfo<T extends Prisma.DeviceInfoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceInfoFindUniqueArgs>
  ): Promise<PrismaDeviceInfo | null> {
    return this.prisma.deviceInfo.findUnique(args);
  }
  async createDeviceInfo<T extends Prisma.DeviceInfoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceInfoCreateArgs>
  ): Promise<PrismaDeviceInfo> {
    return this.prisma.deviceInfo.create<T>(args);
  }
  async updateDeviceInfo<T extends Prisma.DeviceInfoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceInfoUpdateArgs>
  ): Promise<PrismaDeviceInfo> {
    return this.prisma.deviceInfo.update<T>(args);
  }
  async deleteDeviceInfo<T extends Prisma.DeviceInfoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeviceInfoDeleteArgs>
  ): Promise<PrismaDeviceInfo> {
    return this.prisma.deviceInfo.delete(args);
  }
}
