#import "TNSFirebaseMessaging.h"
@implementation TNSFirebaseMessaging

BOOL ShowNotificationsWhenInForeground = NO;
BoolCallback RegisterDeviceForRemoteMessagesCallback = nil;
DictionaryCallback OnNotificationTapCallback = nil;
DictionaryCallback OnMessageCallback = nil;
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

+ (DictionaryCallback)onNotificationTapCallback {
    return OnNotificationTapCallback;
}

+ (void)setOnNotificationTapCallback:(DictionaryCallback)callback {
    OnNotificationTapCallback = callback;
}

+ (DictionaryCallback)onMessageCallback {
    return OnMessageCallback;
}

+ (void)setOnMessageCallback:(DictionaryCallback)callback {
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

    return token;
}
@end

