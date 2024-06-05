import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReceptionnisteList } from "./receptionniste/ReceptionnisteList";
import { ReceptionnisteCreate } from "./receptionniste/ReceptionnisteCreate";
import { ReceptionnisteEdit } from "./receptionniste/ReceptionnisteEdit";
import { ReceptionnisteShow } from "./receptionniste/ReceptionnisteShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { ChauffeurList } from "./chauffeur/ChauffeurList";
import { ChauffeurCreate } from "./chauffeur/ChauffeurCreate";
import { ChauffeurEdit } from "./chauffeur/ChauffeurEdit";
import { ChauffeurShow } from "./chauffeur/ChauffeurShow";
import { AdministrateurList } from "./administrateur/AdministrateurList";
import { AdministrateurCreate } from "./administrateur/AdministrateurCreate";
import { AdministrateurEdit } from "./administrateur/AdministrateurEdit";
import { AdministrateurShow } from "./administrateur/AdministrateurShow";
import { CarteDeTransportList } from "./carteDeTransport/CarteDeTransportList";
import { CarteDeTransportCreate } from "./carteDeTransport/CarteDeTransportCreate";
import { CarteDeTransportEdit } from "./carteDeTransport/CarteDeTransportEdit";
import { CarteDeTransportShow } from "./carteDeTransport/CarteDeTransportShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { DeviceInfoList } from "./deviceInfo/DeviceInfoList";
import { DeviceInfoCreate } from "./deviceInfo/DeviceInfoCreate";
import { DeviceInfoEdit } from "./deviceInfo/DeviceInfoEdit";
import { DeviceInfoShow } from "./deviceInfo/DeviceInfoShow";
import { InventoryItemList } from "./inventoryItem/InventoryItemList";
import { InventoryItemCreate } from "./inventoryItem/InventoryItemCreate";
import { InventoryItemEdit } from "./inventoryItem/InventoryItemEdit";
import { InventoryItemShow } from "./inventoryItem/InventoryItemShow";
import { IncidentList } from "./incident/IncidentList";
import { IncidentCreate } from "./incident/IncidentCreate";
import { IncidentEdit } from "./incident/IncidentEdit";
import { IncidentShow } from "./incident/IncidentShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { TransportCardList } from "./transportCard/TransportCardList";
import { TransportCardCreate } from "./transportCard/TransportCardCreate";
import { TransportCardEdit } from "./transportCard/TransportCardEdit";
import { TransportCardShow } from "./transportCard/TransportCardShow";
import { UserLogList } from "./userLog/UserLogList";
import { UserLogCreate } from "./userLog/UserLogCreate";
import { UserLogEdit } from "./userLog/UserLogEdit";
import { UserLogShow } from "./userLog/UserLogShow";
import { FareList } from "./fare/FareList";
import { FareCreate } from "./fare/FareCreate";
import { FareEdit } from "./fare/FareEdit";
import { FareShow } from "./fare/FareShow";
import { RouteList } from "./route/RouteList";
import { RouteCreate } from "./route/RouteCreate";
import { RouteEdit } from "./route/RouteEdit";
import { RouteShow } from "./route/RouteShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { VehicleList } from "./vehicle/VehicleList";
import { VehicleCreate } from "./vehicle/VehicleCreate";
import { VehicleEdit } from "./vehicle/VehicleEdit";
import { VehicleShow } from "./vehicle/VehicleShow";
import { VehicleMaintenanceList } from "./vehicleMaintenance/VehicleMaintenanceList";
import { VehicleMaintenanceCreate } from "./vehicleMaintenance/VehicleMaintenanceCreate";
import { VehicleMaintenanceEdit } from "./vehicleMaintenance/VehicleMaintenanceEdit";
import { VehicleMaintenanceShow } from "./vehicleMaintenance/VehicleMaintenanceShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { StopList } from "./stop/StopList";
import { StopCreate } from "./stop/StopCreate";
import { StopEdit } from "./stop/StopEdit";
import { StopShow } from "./stop/StopShow";
import { TripList } from "./trip/TripList";
import { TripCreate } from "./trip/TripCreate";
import { TripEdit } from "./trip/TripEdit";
import { TripShow } from "./trip/TripShow";
import { FinancialRecordList } from "./financialRecord/FinancialRecordList";
import { FinancialRecordCreate } from "./financialRecord/FinancialRecordCreate";
import { FinancialRecordEdit } from "./financialRecord/FinancialRecordEdit";
import { FinancialRecordShow } from "./financialRecord/FinancialRecordShow";
import { ScheduleList } from "./schedule/ScheduleList";
import { ScheduleCreate } from "./schedule/ScheduleCreate";
import { ScheduleEdit } from "./schedule/ScheduleEdit";
import { ScheduleShow } from "./schedule/ScheduleShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BUSKOWAY"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Receptionniste"
          list={ReceptionnisteList}
          edit={ReceptionnisteEdit}
          create={ReceptionnisteCreate}
          show={ReceptionnisteShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Chauffeur"
          list={ChauffeurList}
          edit={ChauffeurEdit}
          create={ChauffeurCreate}
          show={ChauffeurShow}
        />
        <Resource
          name="Administrateur"
          list={AdministrateurList}
          edit={AdministrateurEdit}
          create={AdministrateurCreate}
          show={AdministrateurShow}
        />
        <Resource
          name="CarteDeTransport"
          list={CarteDeTransportList}
          edit={CarteDeTransportEdit}
          create={CarteDeTransportCreate}
          show={CarteDeTransportShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="DeviceInfo"
          list={DeviceInfoList}
          edit={DeviceInfoEdit}
          create={DeviceInfoCreate}
          show={DeviceInfoShow}
        />
        <Resource
          name="InventoryItem"
          list={InventoryItemList}
          edit={InventoryItemEdit}
          create={InventoryItemCreate}
          show={InventoryItemShow}
        />
        <Resource
          name="Incident"
          list={IncidentList}
          edit={IncidentEdit}
          create={IncidentCreate}
          show={IncidentShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="TransportCard"
          list={TransportCardList}
          edit={TransportCardEdit}
          create={TransportCardCreate}
          show={TransportCardShow}
        />
        <Resource
          name="UserLog"
          list={UserLogList}
          edit={UserLogEdit}
          create={UserLogCreate}
          show={UserLogShow}
        />
        <Resource
          name="Fare"
          list={FareList}
          edit={FareEdit}
          create={FareCreate}
          show={FareShow}
        />
        <Resource
          name="Route"
          list={RouteList}
          edit={RouteEdit}
          create={RouteCreate}
          show={RouteShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Vehicle"
          list={VehicleList}
          edit={VehicleEdit}
          create={VehicleCreate}
          show={VehicleShow}
        />
        <Resource
          name="VehicleMaintenance"
          list={VehicleMaintenanceList}
          edit={VehicleMaintenanceEdit}
          create={VehicleMaintenanceCreate}
          show={VehicleMaintenanceShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Stop"
          list={StopList}
          edit={StopEdit}
          create={StopCreate}
          show={StopShow}
        />
        <Resource
          name="Trip"
          list={TripList}
          edit={TripEdit}
          create={TripCreate}
          show={TripShow}
        />
        <Resource
          name="FinancialRecord"
          list={FinancialRecordList}
          edit={FinancialRecordEdit}
          create={FinancialRecordCreate}
          show={FinancialRecordShow}
        />
        <Resource
          name="Schedule"
          list={ScheduleList}
          edit={ScheduleEdit}
          create={ScheduleCreate}
          show={ScheduleShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
