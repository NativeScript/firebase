#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef void(^BoolCallback)(BOOL success, NSError* _Nullable error);
typedef void(^DictionaryCallback)(NSDictionary* _Nullable value);
typedef void(^StringCallback)(NSString* _Nullable value);

@interface TNSFirebaseMessaging: NSObject

@property (class) BOOL showNotificationsWhenInForeground;

@property (nonatomic, strong, class) BoolCallback _Nullable registerDeviceForRemoteMessagesCallback;

@property (nonatomic, strong, class) DictionaryCallback _Nullable onNotificationTapCallback;

@property (nonatomic, strong, class) DictionaryCallback _Nullable onMessageCallback;

@property (nonatomic, strong, class) StringCallback _Nullable onTokenCallback;

+(NSString* _Nonnull) APNSTokenToString: (NSData* _Nonnull)tokenData;
@end

