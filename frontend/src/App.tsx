import React, { ReactNode } from "react"
import Header from "./components/Header"
import { UserHome } from "./features/userHome/UserHome"

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}
          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  )
}

const App = () => {
  return (
    <DefaultLayout>
      <UserHome />
    </DefaultLayout>
  )
}

export default App
