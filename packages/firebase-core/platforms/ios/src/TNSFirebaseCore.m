#import "TNSFirebaseCore.h"

@implementation TNSFirebaseCore
static LaunchCallback _Nullable _onAppFinishLaunchingCallback;
+ (LaunchCallback)onAppFinishLaunchingCallback {
    return _onAppFinishLaunchingCallback;
}

+ (void)setOnAppFinishLaunchingCallback:(nullable LaunchCallback)callback {
    _onAppFinishLaunchingCallback = callback;
}
@end
