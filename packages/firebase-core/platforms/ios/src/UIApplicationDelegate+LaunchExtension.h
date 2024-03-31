#import <UIKit/UIKit.h>

@interface NSObject (TNSUIAppDelegateExt) <UIApplicationDelegate>
- (BOOL)application:(nullable UIApplication *)application didFinishLaunchingWithOptions:(nullable NSDictionary<UIApplicationLaunchOptionsKey, id> *)launchOptions;
@end