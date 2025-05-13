#import "NSCFirebaseMessagingCore.h"
@implementation NSCFirebaseMessagingCore

BOOL NSCFirebaseShowNotificationsWhenInForeground = NO;
BoolCallback NSCFirebaseRegisterDeviceForRemoteMessagesCallback = nil;
CompletableDictionaryCallback NSCFirebaseOnNotificationTapCallback = nil;
CompletableDictionaryCallback NSCFirebaseOnMessageCallback = nil;
StringCallback NSCFirebaseOnTokenCallback = nil;

+ (void)setShowNotificationsWhenInForeground:(BOOL)showNotificationsWhenInForeground {
  NSCFirebaseShowNotificationsWhenInForeground = showNotificationsWhenInForeground;
}

+ (BOOL)showNotificationsWhenInForeground {
    return NSCFirebaseShowNotificationsWhenInForeground;
}

+ (BoolCallback)registerDeviceForRemoteMessagesCallback {
    return NSCFirebaseRegisterDeviceForRemoteMessagesCallback;
}

+ (void)setRegisterDeviceForRemoteMessagesCallback:(BoolCallback)callback {
  NSCFirebaseRegisterDeviceForRemoteMessagesCallback = callback;
}

+ (CompletableDictionaryCallback)onNotificationTapCallback {
    return NSCFirebaseOnNotificationTapCallback;
}

+ (void)setOnNotificationTapCallback:(CompletableDictionaryCallback)callback {
  NSCFirebaseOnNotificationTapCallback = callback;
}

+ (CompletableDictionaryCallback)onMessageCallback {
    return NSCFirebaseOnMessageCallback;
}

+ (void)setOnMessageCallback:(CompletableDictionaryCallback)callback {
  NSCFirebaseOnMessageCallback = callback;
}

+ (StringCallback)onTokenCallback {
    return NSCFirebaseOnTokenCallback;
}

+ (void)setOnTokenCallback:(StringCallback)callback {
  NSCFirebaseOnTokenCallback = callback;
}


+ (NSString *)APNSTokenToString:(NSData *)tokenData {
    const char *data = [tokenData bytes];

    NSMutableString *token = [NSMutableString string];
    for (NSInteger i = 0; i < tokenData.length; i++) {
      [token appendFormat:@"%02.2hhX", data[i]];
    }

    return [token copy];
}
@end

