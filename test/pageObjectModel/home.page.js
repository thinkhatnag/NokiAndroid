class HomePage {
  get homeScreenAnimation() {
    return $(
      "//android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView[4]/com.horcrux.svg.CircleView"
    );
  }

  get startNewEncounterButton() {
    return $("~Start New Encounter");
  }

  get welcomeThumbnail() {
    return $(
      "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView"
    );
  }

  get home() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[1]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[1]'
    );
  } ////android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[1]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[1]
  get patients() {
    return $(
      '-android uiautomator:new UiSelector().className("android.widget.Button").instance(1)'
    );
  }
  get encounter() {
    return $(
      '-android uiautomator:new UiSelector().className("android.widget.Button").instance(2)'
    );
  }
  get settings() {
    return $(
      '-android uiautomator:new UiSelector().className("android.widget.Button").instance(3)'
    );
  }
}

export default new HomePage();
