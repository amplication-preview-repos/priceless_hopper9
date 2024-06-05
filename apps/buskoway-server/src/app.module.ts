import { Module } from "@nestjs/common";
import { ReceptionnisteModule } from "./receptionniste/receptionniste.module";
import { UtilisateurModule } from "./utilisateur/utilisateur.module";
import { ChauffeurModule } from "./chauffeur/chauffeur.module";
import { AdministrateurModule } from "./administrateur/administrateur.module";
import { CarteDeTransportModule } from "./carteDeTransport/carteDeTransport.module";
import { UserModule } from "./user/user.module";
import { SupplierModule } from "./supplier/supplier.module";
import { DeviceInfoModule } from "./deviceInfo/deviceInfo.module";
import { InventoryItemModule } from "./inventoryItem/inventoryItem.module";
import { IncidentModule } from "./incident/incident.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { TransportCardModule } from "./transportCard/transportCard.module";
import { UserLogModule } from "./userLog/userLog.module";
import { FareModule } from "./fare/fare.module";
import { RouteModule } from "./route/route.module";
import { MessageModule } from "./message/message.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { VehicleMaintenanceModule } from "./vehicleMaintenance/vehicleMaintenance.module";
import { NotificationModule } from "./notification/notification.module";
import { StopModule } from "./stop/stop.module";
import { TripModule } from "./trip/trip.module";
import { FinancialRecordModule } from "./financialRecord/financialRecord.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { AppUserModule } from "./appUser/appUser.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    ReceptionnisteModule,
    UtilisateurModule,
    ChauffeurModule,
    AdministrateurModule,
    CarteDeTransportModule,
    UserModule,
    SupplierModule,
    DeviceInfoModule,
    InventoryItemModule,
    IncidentModule,
    FeedbackModule,
    TransportCardModule,
    UserLogModule,
    FareModule,
    RouteModule,
    MessageModule,
    VehicleModule,
    VehicleMaintenanceModule,
    NotificationModule,
    StopModule,
    TripModule,
    FinancialRecordModule,
    ScheduleModule,
    SubscriptionModule,
    AppUserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
