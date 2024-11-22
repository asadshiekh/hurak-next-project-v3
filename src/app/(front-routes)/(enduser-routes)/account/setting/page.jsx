import AccountSettings from "@/components/enduser-panel/account-setting/page";
import Header from "@/components/enduser-panel/header";

const AccountSetting =()=>{
    return(
        <div>
            <Header headerText={"Account settings"} breadcrum={"/ Account settings"} />
            <AccountSettings/>
        </div>
    )
}

export default AccountSetting;