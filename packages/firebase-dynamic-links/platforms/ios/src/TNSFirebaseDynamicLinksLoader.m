#import "TNSFirebaseDynamicLinksLoader.h"
#import <objc/runtime.h>
@implementation TNSFirebaseDynamicLinksLoader : NSObject
+ (void)load {
    Class clazz = NSClassFromString(@"TNSFirebaseDynamicLinksAppDelegate");
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-performSelector-leaks"
   [clazz performSelector: NSSelectorFromString(@"sharedInstance")];
#pragma clang diagnostic pop
}
@end
