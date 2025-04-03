class SettingPage {
    get stettings() 
    { 
        return $('//android.widget.TextView[@text="Settings"]'); 
    }
    get startNewEncounter() 
    { 
        return $(''); 
    }
    get profileSettings() 
    { 
        return $('//android.widget.TextView[@text="Profile Settings"]'); 
    }
    get support() 
    { 
        return $('//android.widget.TextView[@text="Support"]'); 
    }
    get launguage() 
    { 
        return $('~Language, English'); 
    }
    get generalSettings() 
    { 
        return $('~General Settings'); 
    }
    get generalSettingsDone() 
    { 
        return $('~Done'); 
    }
    get logoutBtn() 
    { 
        return $('//android.widget.TextView[@text="Logout"]'); 
    }
    get edit() 
    { 
        return $('~edit'); 
    }
    get firstName() 
    { 
        return $('~firstName'); 
    }
    get middleName() 
    { 
        return $('~middleName'); 
    }
    get lastName() 
    { 
        return $('~lastName'); 
    }
    get email() 
    { 
        return $('~email'); 
    }
    get save() 
    { 
        return $('~save'); 
    }
    get cancel() 
    { 
        return $('~cancel'); 
    }
    get speciality() 
    { 
        return $('~speciality'); 
    }
    get () 
    { 
        return $(''); 
    }

    get doctorname() 
    { 
        return $('//android.widget.TextView[@text="nag subbarayudu"]'); 
    }
    get back() 
    { 
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]'); 
    }
    get talkToUs() 
    { 
        return $('~Talk to us'); 
    }
    get email() 
    { 
        return $('~Email'); 
    }
    
    get english() 
    { 
        return $('~English'); 
    }
    get Inglish()
    {
        return $('~Inglés'); 

    }
    get spanish() 
    { 
        return $('~Español'); 
    }
    get selectAllEnabled() 
    { 
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'); 
    }
    get selectAllDisabled() 
    { 
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'); 
    }
    get cdssEnabled() 
    { 
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup'); 
    }
    get cdssDisabled(){
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup')
    }
    get diognosisJustificationDisabled(){
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup')
    }
    get diognosisJustificationEnabled() 
    { 
        return $('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup'); 
    }
    get logoutcancelationBtn() 
    { 
        return $('//android.widget.Button[@resource-id="android:id/button2"]'); 
    } 
     get logoutConformationBtn() 
    { 
        return $('//android.widget.Button[@resource-id="android:id/button1"]'); 
    }    
    get logingoutText() 
    { 
        return $('//android.widget.TextView[@resource-id="android:id/message"]'); 
    } 
    get logoutBtn() 
    { 
        return $('~Logout'); 
    } 
    get sync() 
    { 
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup'); 
    } 
}
export default new SettingPage();