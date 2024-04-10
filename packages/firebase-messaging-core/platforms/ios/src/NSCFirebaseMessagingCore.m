#import "NSCFirebaseMessagingCore.h"
@implementation NSCFirebaseMessagingCore

BOOL ShowNotificationsWhenInForeground = NO;
BoolCallback RegisterDeviceForRemoteMessagesCallback = nil;
CompletableDictionaryCallback OnNotificationTapCallback = nil;
CompletableDictionaryCallback OnMessageCallback = nil;
StringCallback OnTokenCallback = nil;

+ (void)setShowNotificationsWhenInForeground:(BOOL)showNotificationsWhenInForeground {
    ShowNotificationsWhenInForeground = showNotificationsWhenInForeground;
}

+ (BOOL)showNotificationsWhenInForeground {
    return ShowNotificationsWhenInForeground;
}

+ (BoolCallback)registerDeviceForRemoteMessagesCallback {
    return RegisterDeviceForRemoteMessagesCallback;
}

+ (void)setRegisterDeviceForRemoteMessagesCallback:(BoolCallback)callback {
    RegisterDeviceForRemoteMessagesCallback = callback;
}

+ (CompletableDictionaryCallback)onNotificationTapCallback {
    return OnNotificationTapCallback;
}

+ (void)setOnNotificationTapCallback:(CompletableDictionaryCallback)callback {
    OnNotificationTapCallback = callback;
}

+ (CompletableDictionaryCallback)onMessageCallback {
    return OnMessageCallback;
}

+ (void)setOnMessageCallback:(CompletableDictionaryCallback)callback {
    OnMessageCallback = callback;
}

+ (StringCallback)onTokenCallback {
    return OnTokenCallback;
}

+ (void)setOnTokenCallback:(StringCallback)callback {
    OnTokenCallback = callback;
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

