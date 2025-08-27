import { Outlet } from "react-router-dom";
import { AuthProvider } from "src/contexts/AuthContext";
import { SignUpFormProvider } from "src/contexts/SignUpFormContext";
import { NftFormProvider } from "src/contexts/NftFormContext";
import ModalProvider from "src/components/common/modal/ModalProvider";

export default function RootWrapper() {
  return (
    <AuthProvider>
      <SignUpFormProvider>
        <NftFormProvider>
          <Outlet />
          <ModalProvider />
        </NftFormProvider>
      </SignUpFormProvider>
    </AuthProvider>
  );
}
