#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface TNSFirebaseMessaging : NSObject
+(NSString*)APNSTokenToString:(NSData*)data;
@end