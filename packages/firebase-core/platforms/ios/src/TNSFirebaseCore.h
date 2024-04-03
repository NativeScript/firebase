#import <Foundation/Foundation.h>
#import "UIApplicationDelegate+LaunchExtension.h"
typedef void(^LaunchCallback)(void);
@interface TNSFirebaseCore: NSObject
+(LaunchCallback) onAppFinishLaunchingCallback;
+(void) setOnAppFinishLaunchingCallback:(LaunchCallback)callback;
+(BOOL) isSimulator;
@end
