import React from "react";
import { MyAccount } from "@/components/iHedge/widgets/MyAccount/MyAccount";

export default function AccountPage() {
  return (
    <main className="min-h-screen pt-[20px] px-5 lg:px-[60px] 2xl:px-[100px] pb-10">
      <div className="max-w-[1440px] mx-auto">
        <MyAccount />
      </div>
    </main>
  );
}
