#import "TNSFirebaseMessaging.h"

@implementation TNSFirebaseMessaging
+ (NSString*) APNSTokenToString: (NSData*) tokenData {
  const char *data = [tokenData bytes];

  NSMutableString *token = [NSMutableString string];
  for (NSInteger i = 0; i < tokenData.length; i++) {
    [token appendFormat:@"%02.2hhX", data[i]];
  }

  return token;
}
@end