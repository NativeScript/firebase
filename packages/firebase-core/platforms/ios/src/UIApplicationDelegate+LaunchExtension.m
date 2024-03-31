#import "UIApplicationDelegate+LaunchExtension.h"
#import "TNSFirebaseCore.h"
#import <objc/runtime.h>

@implementation NSObject (TNSUIAppDelegateExt)
- (BOOL)application:(nullable UIApplication *)application didFinishLaunchingWithOptions:(nullable NSDictionary<UIApplicationLaunchOptionsKey, id> *)launchOptions {
    LaunchCallback callback = [TNSFirebaseCore onAppFinishLaunchingCallback];
    if(callback != nil){
        callback();
    }
    return YES;
}
@end
