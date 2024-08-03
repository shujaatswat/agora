import CustomButton from "../Constant/customButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function TabsComponent() {
  return (
    <div className="flex justify-between p-4">
      <Tabs
        defaultValue="account"
        className="w-[700px]  rounded-full  bg-white"
      >
        <TabsList className="grid grid-cols-5 rounded-full mx-2 gap-8">
          <TabsTrigger value="Payment" className=" rounded-full  text-gray-600">
            Payment methods
          </TabsTrigger>
          <TabsTrigger
            value="Shipping"
            className=" rounded-full  text-gray-600"
          >
            Shipping addresses
          </TabsTrigger>
          <TabsTrigger value="Credits" className=" rounded-full  text-gray-600">
            Credits
          </TabsTrigger>
          <TabsTrigger value="Profile" className=" rounded-full  text-gray-600">
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="Personal"
            className=" rounded-full w-fit text-gray-600"
          >
            Personalization
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Payment"></TabsContent>
        <TabsContent value="Shipping"></TabsContent>
        <TabsContent value="Credits"></TabsContent>
        <TabsContent value="Profile"></TabsContent>
        <TabsContent value="Personal"></TabsContent>
      </Tabs>
      <CustomButton
        BtnText="Log out"
        className="w-fit bg-black text-white py-2 px-4 rounded-full"
      />
    </div>
  );
}
